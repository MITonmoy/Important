using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using Tableau_Wrapper.CacheProviders;
using Tableau_Wrapper.Helpers;
using Tableau_Wrapper.Models;
using Tableau_Wrapper.Models.ViewModels;
using Tableau_Wrapper.Services;
using Tableau_Wrapper.Services.Models;
using Tableau_Wrapper.Services.Models.TableauServer;
using static Tableau_Wrapper.Models.AppConstants;

namespace Tableau_Wrapper.Repositories
{
    public class IndexViewModelRepository : BaseRepository<IndexViewModel>, IIndexViewModelRepository
    {
        private ITableauService _tService;
        private TableauSettings _tSettings;
        private IFileCacheProvider<UserFavLists> _favCache;
        private IFileCacheProvider<UserCategories> _categoryCache;

        //protected override bool IsCacheExists { get { return base.IsCacheExists && !(_favCache.HasNewData || _categoryCache.HasNewData); } }

        public string SiteId { get; set; }
        public string SiteName { get; set; }

        public IndexViewModelRepository(string userId, string userName, string userToken, string siteId, string siteName,
            string cacheFolderLocation,
            string favouritesCacheFolderLocation,
            string categoriesCacheFolderLocation)
            : base(new XmlFileCacheProvider<IndexViewModel> { UserId = userId, UserName = userName, FilePrefix = "IndexViewModel", FolderLocation = cacheFolderLocation })
        {
            UserId = userId;
            UserName = userName;
            UserToken = userToken;
            SiteId = siteId;
            SiteName = siteName;
            _tSettings = new TableauSettings();
            _tService = new TableauService(_tSettings.ServerUrl, _tSettings.ApiVersion);
            _tService.LogEventHandler += HandleLogEvents;
            _favCache = new XmlFileCacheProvider<UserFavLists>
            {
                UserId = userId,
                UserName = userName,
                FilePrefix = "FavList",
                FolderLocation = favouritesCacheFolderLocation,
                DefaultValue = new UserFavLists
                {
                    UserId = UserId,
                    UserName = UserName,
                    SiteFavsList = new List<SiteFavs> { new SiteFavs { SiteId = siteId, WorkbookList = new List<FavWorkbook>() } }
                }
            };
            _categoryCache = new XmlFileCacheProvider<UserCategories>
            {
                UserId = userId,
                UserName = userName,
                FilePrefix = "Categories",
                FolderLocation = categoriesCacheFolderLocation,
                DefaultValue = new UserCategories
                {
                    UserId = UserId,
                    UserName = UserName,
                    SiteCategoriesList = new List<SiteCategories> { new SiteCategories { SiteId = siteId, SiteName = siteName, Categories = new List<Category>() } }
                }
            };
            LocalCache = CacheProvider.Get();
        }

        protected override IndexViewModel GetAllFromSource()
        {
            var workbooks = _tService.TryGetWorkbooks(SiteId, UserToken);

            var workbooksWithViews = workbooks.ItemList
                .Select(w => _tService.TryGetWorkbookWithViews(w.Id, SiteId, UserToken))
                .Select(x => x.Workbook).ToList();

            foreach (var wrkbk in workbooksWithViews)
            {
                var clearName = wrkbk.Name.Replace('_', ' ').TrimStart(' ', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9').Trim();
                if (!string.IsNullOrWhiteSpace(clearName))
                    wrkbk.Name = clearName;
            }

            var allfavs = _favCache.Get();
            var catgs = _categoryCache.Get();
            var favs = allfavs.SiteFavsList.FirstOrDefault(s => s.SiteId == SiteId);

            if (favs != null)
            {
                foreach (var wrkbk in favs.WorkbookList.Join(workbooksWithViews, fw => fw.WorkbookId, w => w.Id, (fw, w) => w))
                {
                    wrkbk.IsFavourite = true;
                }
            }

            var result = GetCategorizedWorkbooks(catgs.SiteCategoriesList.FirstOrDefault(s => s.SiteId == SiteId), workbooksWithViews.ToArray());

            if (!_categoryCache.CacheFileExists)
                _categoryCache.Save(new UserCategories
                {
                    UserId = UserId,
                    UserName = UserName,
                    SiteCategoriesList = new List<SiteCategories> { new SiteCategories { SiteId = SiteId, SiteName = SiteName, Categories = result.Categories } }
                });

            return result;
        }

        private IndexViewModel GetCategorizedWorkbooks(SiteCategories siteCategories, Workbook[] workbooksWithViews)
        {
            var result = new IndexViewModel { Categories = new List<Category>() };
            var favCategory = new Category { Name = FavoriteCategoryName, IncludeAllFavs = true };
            var uncatCategory = new Category { Name = UncategorizedCategoryName, IncludeAllWorkbooks = true };
            var applicableCategories = siteCategories.Categories
                .Where(c => !(c.Name == FavoriteCategoryName || c.Name == UncategorizedCategoryName || c.IncludeAllFavs || c.IncludeAllWorkbooks))
                .ToList();

            favCategory.Workbooks = workbooksWithViews.Where(w => w.IsFavourite).ToList();

            if (applicableCategories.Count < 1)
            {
                uncatCategory.Workbooks = workbooksWithViews.ToList();
            }
            else
            {
                var addedWorkbooks = new List<Workbook>();

                foreach (var category in applicableCategories)
                {
                    var selectedWorkbooks = GetSelectedWorkbooks(category, workbooksWithViews);
                    category.Workbooks = selectedWorkbooks;
                    addedWorkbooks.AddRange(selectedWorkbooks);
                }

                uncatCategory.Workbooks = workbooksWithViews.Except(addedWorkbooks).ToList();
            }

            result.Categories.Add(favCategory);
            if (applicableCategories.Count > 0) result.Categories.AddRange(applicableCategories);
            result.Categories.Add(uncatCategory);

            return result;
        }

        private List<Workbook> GetSelectedWorkbooks(Category category, Workbook[] workbooksWithViews)
        {
            return category.Workbooks
                .Join(workbooksWithViews, cw => cw.Id, w => w.Id, (cw, w) => w)
                .OrderByDescending(w => w.IsFavourite).ThenBy(w => w.Name)
                .ToList();
        }

        private void LogMessage(string msg)
        {
            Logger.Info($"{nameof(IndexViewModelRepository)} - {msg}{Environment.NewLine}");
        }

        private void LogError(string errMsg)
        {
            Logger.Error($"{nameof(IndexViewModelRepository)} (ERROR) - {errMsg}{Environment.NewLine}");
        }


        private void HandleLogEvents(object sender, TableauWrapperServiceLogEventArgs eventArgs)
        {
            if (string.IsNullOrWhiteSpace(eventArgs.LogType) || eventArgs.LogType.ToLowerInvariant() == "info")
            {
                LogMessage($"from {sender.GetType().Name} - {eventArgs.Message}");
                return;
            }

            if (eventArgs.LogType.ToLowerInvariant() == "error")
            {
                LogError($"from {sender.GetType().Name} - {eventArgs.Message}");
                return;
            }
        }
    }

    public interface IIndexViewModelRepository : IRepository<IndexViewModel>
    {
        string SiteId { get; set; }
        string SiteName { get; set; }
    }
}
