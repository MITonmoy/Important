using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using System.Web.Mvc;
using System.Xml;
using System.Xml.Serialization;
using Tableau_Wrapper.Helpers;
using Tableau_Wrapper.Models;
using Tableau_Wrapper.Models.ViewModels;
using Tableau_Wrapper.Repositories;
using Tableau_Wrapper.Services;
using Tableau_Wrapper.Services.Models;
using Tableau_Wrapper.Services.Models.TableauServer;
using static Tableau_Wrapper.Models.AppConstants;

namespace Tableau_Wrapper.Controllers
{
    public class HomeController : BaseAppController
    {
        private static Dictionary<string, PptDownloadModel> _pptDls = new Dictionary<string, PptDownloadModel>();

        private ITableauService _tService;
        private UserFavLists _favLists;
        private IIndexViewModelRepository _indexRepo;

        public HomeController()
        {
            _tService = new TableauService(TableauSettings.ServerUrl, TableauSettings.ApiVersion);
            _tService.LogEventHandler += HandleLogEvents;
        }

        public ActionResult Index()
        {
            if (!IsTableauTokenAvailable)
            {
                LogError("User token not found. Redirecting to Signin page.");
                return RedirectToAction("Signin", "Account");
            }

            LogMessage("User token found. Sending view.");
            return View();

            /*
            LogMessage("User token found. Preparing to fetch left side menu data.");
            if (_indexRepo == null)
            {
                _indexRepo = new IndexViewModelRepository(
                    userId: TsUserId,
                    userName: TsUserName,
                    userToken: TsUserToken,
                    siteId: TsCurrentSiteId,
                    siteName: TsCurrentSiteName,
                    cacheFolderLocation: Server.MapPath(Resources.IndexViewModelsLocation),
                    favouritesCacheFolderLocation: Server.MapPath("~/Resources/UserFavLists"),
                    categoriesCacheFolderLocation: Server.MapPath("~/Resources/Categories"));
            }

            var viewModel = _indexRepo.Get();

            LogMessage("Left side menu data fetched. Delivering the view with data.");
            LogMessage($"Top level menu enabled: {(ConfigurationManager.AppSettings[TopLevelMenuSettingsKey] as string)}.");
            ViewData[TsSiteIdSessionKey] = TsCurrentSiteId;
            //ViewData[TreeViewMenuSettingsKey] = ConfigurationManager.AppSettings[TreeViewMenuSettingsKey];
            ViewData[TopLevelMenuSettingsKey] = ConfigurationManager.AppSettings[TopLevelMenuSettingsKey]; 
            return View(viewModel);
            */
        }

        public JsonResult GetMenuData()
        {
            if (!IsTableauTokenAvailable)
            {
                LogMessage("User token not found. Returning null");
                return Json(null, JsonRequestBehavior.AllowGet);
            }

            LogMessage("User token found. Preparing to fetch left side menu data.");
            if (_indexRepo == null)
            {
                _indexRepo = new IndexViewModelRepository(
                    userId: TsUserId,
                    userName: TsUserName,
                    userToken: TsUserToken,
                    siteId: TsCurrentSiteId,
                    siteName: TsCurrentSiteName,
                    cacheFolderLocation: Server.MapPath(Resources.IndexViewModelsLocation),
                    favouritesCacheFolderLocation: Server.MapPath("~/Resources/UserFavLists"),
                    categoriesCacheFolderLocation: Server.MapPath("~/Resources/Categories"));
            }

            var viewModel = _indexRepo.Get();

            LogMessage("Left side menu data fetched. Delivering the view with data.");
            LogMessage($"Top level menu enabled: {(ConfigurationManager.AppSettings[TopLevelMenuSettingsKey] as string)}.");
            viewModel.ServerUrl = ServerUrl;
            viewModel.UserId = TsUserId;
            viewModel.UserName = TsUserName;
            viewModel.SiteId = TsCurrentSiteId;
            viewModel.SiteName = TsCurrentSiteName;
            viewModel.IsTopLevelMenu = bool.Parse(ConfigurationManager.AppSettings[TopLevelMenuSettingsKey]);
            //ViewData[TsSiteIdSessionKey] = TsCurrentSiteId;
            //ViewData[TreeViewMenuSettingsKey] = ConfigurationManager.AppSettings[TreeViewMenuSettingsKey];
            //ViewData[TopLevelMenuSettingsKey] = ConfigurationManager.AppSettings[TopLevelMenuSettingsKey];
            return Json(viewModel, JsonRequestBehavior.AllowGet);
        }

        public string GetPpt(string viewContentUrl) // Expected in format "{WorkbookName}/sheets/{ViewName}"
        {
            Logger.Info($"Preparing PPT export for {viewContentUrl} view of site {TsCurrentSiteName}.");
            var viewName = viewContentUrl.Split('/').Last();
            var result = _tService.TryGetImageExportForView(TsCurrentSiteName, viewContentUrl, TsUserToken);

            var base64String = Convert.ToBase64String(result);

            var pptDoc = new XmlDocument();
            pptDoc.Load(Server.MapPath(PptTemplateLocation));
            var docRoot = pptDoc.DocumentElement;

            var nsmgr = new XmlNamespaceManager(pptDoc.NameTable);
            nsmgr.AddNamespace("pkg", docRoot.NamespaceURI);

            var nodes = docRoot.SelectNodes(@"/pkg:package/pkg:part[not(contains(@pkg:name, 'thumbnail'))]/pkg:binaryData", nsmgr);
            var imageNode = nodes[0];

            imageNode.InnerText = base64String;

            var guid = Guid.NewGuid().ToString();
            var destFileName = $"{viewName}-{guid}.xml";
            var destFilePath = Server.MapPath($"{PptExportOutputLocation}/{destFileName}");
            pptDoc.Save(destFilePath);

            if (!_pptDls.ContainsKey(guid))
                _pptDls.Add(guid, new PptDownloadModel { DestFileName = destFileName, ViewName = viewName });

            Logger.Info($"PPT prepared for {viewContentUrl} view of site {TsCurrentSiteName} with id of {guid}. Now sending the id.");
            return guid;
        }

        public void GetPptCreatedFile(string dlguid)
        {
            Logger.Info($"PPT download request with id of {dlguid}.");
            PptDownloadModel dlInfo;
            _pptDls.TryGetValue(dlguid, out dlInfo);

            if (dlInfo == null) return;

            var destFilePath = Server.MapPath($"{PptExportOutputLocation}/{dlInfo.DestFileName}");

            Response.Clear();
            Response.ContentType = "application/xml";
            Response.AppendHeader("Content-Disposition", $"attachment;filename={dlInfo.ViewName}.xml");
            Response.WriteFile(destFilePath);
            Response.End();
            System.IO.File.Delete(destFilePath);
            _pptDls.Remove(dlguid);
            Logger.Info($"PPT downloaded with a full file path {destFilePath}.");
        }

        public string GetCurrentSiteName()
        {
            LogMessage($"Fetching current site name. Site name is {TsCurrentSiteName}.");
            return TsCurrentSiteName;
        }

        public string GetCurrentServerUrl()
        {
            LogMessage($"Fetching current server URL. Server URL is {TableauSettings.ServerUrl}");
            return TableauSettings.ServerUrl;
        }

        public string GetVizTokenDefault()
        {
            //return TsTrustedToken;
            return GetVizToken(TsUserName, TsCurrentSiteName);
        }

        public string GetVizTokenForCurrentUser(string siteName)
        {
            return GetVizToken(TsUserName, siteName);
        }

        public string GetVizToken(string userName, string siteName)
        {
            return _tService.TryGetTrustedToken(userName, siteName);
        }

        [HttpPost]
        public void SetFav(string workbookId, bool remove)
        {
            if (_favLists == null)
                _favLists = GetFavList(TsUserName, TsUserId);

            if (_favLists.SiteFavsList == null) _favLists.SiteFavsList = new List<SiteFavs>();
            var curSiteExists = _favLists.SiteFavsList.Any(f => f.SiteId == TsCurrentSiteId);

            LogMessage($"{(remove? "Saving" : "Removing")} favourite for {Environment.NewLine}Site {TsCurrentSiteName} and workbook id {workbookId}");
            if (!remove)
            {
                var fwrk = new FavWorkbook { WorkbookId = workbookId };
                if (!curSiteExists)
                {
                    var curSiteFavs = new SiteFavs { SiteId = TsCurrentSiteId };
                    curSiteFavs.WorkbookList = new List<FavWorkbook>();
                    curSiteFavs.WorkbookList.Add(fwrk);
                    _favLists.SiteFavsList.Add(curSiteFavs);
                }
                else
                {
                    var curSiteFavs = _favLists.SiteFavsList.First(f => f.SiteId == TsCurrentSiteId);
                    if (curSiteFavs.WorkbookList == null) curSiteFavs.WorkbookList = new List<FavWorkbook>();
                    var curWrkBookExists = curSiteFavs.WorkbookList.Any(w => w.WorkbookId == workbookId);
                    if (!curWrkBookExists)
                        curSiteFavs.WorkbookList.Add(fwrk);
                }
            }
            else
            {
                if (curSiteExists)
                {
                    var curSiteFavs = _favLists.SiteFavsList.First(f => f.SiteId == TsCurrentSiteId);
                    if (curSiteFavs.WorkbookList == null) curSiteFavs.WorkbookList = new List<FavWorkbook>();
                    if (curSiteFavs.WorkbookList.Any(w => w.WorkbookId == workbookId))
                    {
                        curSiteFavs.WorkbookList.RemoveAll(w => w.WorkbookId == workbookId);
                    }
                }
            }

            SaveFavLists(_favLists, TsUserName, TsUserId);
        }

        [HttpPost]
        public void SaveNote(string workbookName, string viewName, string note)
        {
            var repo = new NotesRepository(Server.MapPath(Resources.IndexViewModelsLocation), TsUserName, TsUserId);
            var success = repo.Save(workbookName, viewName, note);

            LogMessage($"Saving notes for {Environment.NewLine}Site {TsCurrentSiteName} Workbook Name {workbookName} and View Name {viewName} with note - {note}");
            if (!success) throw new Exception($"Notes could not be saved for User: {TsUserName}, UserId: {TsUserId}, Workbook: {workbookName}, View: {viewName}");
        }

        public JsonResult GetSchedules()
        {
            if (!IsTableauTokenAvailable)
                return Json(new List<TsSchedule>(), JsonRequestBehavior.AllowGet);
            
            var schedules = _tService.TryGetSchedules(TsUserToken);
            var result = schedules.ItemList.Where(s => s.Type.ToLowerInvariant().Trim() == "subscription").ToList();
            return Json(result, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public void SaveSubscription(string workbookId, string viewId, string scope, string scheduleId, string subject)
        {
            if (string.IsNullOrWhiteSpace(scope) || string.IsNullOrWhiteSpace(subject))
                throw new Exception("scope or subject is empty");

            LogMessage($"Saving subscription for {Environment.NewLine}WorkbookId : {workbookId}{Environment.NewLine}ViewId : {viewId}{Environment.NewLine}Scope : {scope}{Environment.NewLine}ScheduleId : {scheduleId}{Environment.NewLine}Subject : {subject}");

            if (scope == "view")
                _tService.TrySaveSubscription(TsCurrentSiteId, TsUserId, viewId, scope, scheduleId, subject, TsUserToken);

            if (scope == "workbook")
                _tService.TrySaveSubscription(TsCurrentSiteId, TsUserId, workbookId, scope, scheduleId, subject, TsUserToken);
        }

        public ActionResult RefreshCache()
        {
            MaintainCacheManifest();
            return View();
        }

        public void TestException()
        {
            for (int i = 0; i < 1000000; i++)
            {

            }
            throw new Exception("This is a test exception.");
        }

        private UserFavLists GetFavList(string userName, string userId)
        {
            if (userName.Contains("\\"))
                userName = userName.Split('\\').Last();

            var xmlFilePath = Server.MapPath($"~/Resources/UserFavLists/FavList-{userName}-{userId}.xml");

            using (var strm = System.IO.File.Open(xmlFilePath, FileMode.OpenOrCreate, FileAccess.ReadWrite))
            {
                if (strm.Length <= 0) return new UserFavLists { UserId = userId, UserName = userName, SiteFavsList = new List<SiteFavs>() };
                var srlzr = new XmlSerializer(typeof(UserFavLists));
                return srlzr.Deserialize(strm) as UserFavLists;
            }
        }

        private void SaveFavLists(UserFavLists favlists, string userName, string userId)
        {
            if (userName.Contains("\\"))
                userName = userName.Split('\\').Last();

            var xmlFilePath = Server.MapPath($"~/Resources/UserFavLists/FavList-{userName}-{userId}.xml");

            var writer = System.IO.File.Exists(xmlFilePath)
                ? System.IO.File.Open(xmlFilePath, FileMode.Truncate, FileAccess.Write)
                : System.IO.File.Open(xmlFilePath, FileMode.OpenOrCreate, FileAccess.Write);

            using (writer)
            {
                var srlzr = new XmlSerializer(typeof(UserFavLists));
                srlzr.Serialize(writer, favlists);
            }
        }

        private void MaintainCacheManifest()
        {
            var manifestFilePath = Server.MapPath("~/Content/manifest.appcache");

            string oldChecksum = GetCurrentChecksum(manifestFilePath);

            string newChecksum;
            string manifestFile = GetManifestFile(Url, out newChecksum);

            if (newChecksum != oldChecksum)
                System.IO.File.WriteAllText(manifestFilePath, manifestFile);
        }

        private string GetCurrentChecksum(string manifestFilePath)
        {
            string checksumValue = string.Empty;

            if (!System.IO.File.Exists(manifestFilePath)) return checksumValue;

            using (var reader = new StreamReader(manifestFilePath))
            {
                var line = reader.ReadLine();
                while (line != null)
                {
                    if (!line.StartsWith("#"))
                    {
                        line = reader.ReadLine();
                        continue;
                    }

                    var parts = line.Split(',');
                    var checksumPart = parts.FirstOrDefault(p => p.ToLowerInvariant().Contains("checksum"));

                    if (checksumPart == null) break;

                    checksumValue = checksumPart.Split(':').Last().Trim();

                    return checksumValue;
                }
            }

            return checksumValue;
        }

        private string GetManifestFile(UrlHelper url, out string newChecksum)
        {
            string leadComment = $"App Version: {GetType().Assembly.GetName().Version}", cachePart = "", networkPart = "*", fallbackPart = "";

            leadComment = $"{leadComment}, Timestamp: {DateTime.Now.ToString("MMMM dd, yyyy H:mm:ss")}";

            var imgFolder = new DirectoryInfo(Server.MapPath("~/Content/Images"));

            var imgNames = GetFileNames(imgFolder);

            cachePart = string.Join(Environment.NewLine, imgNames.Select(img => url.Content($"~/Content/Images/{img}")));

            //cachePart = $"{cachePart}\n" + "http://cdtssql353d:8000/t/Horizon/views/CopaycardSuite_NIAD/2_CopaysandCostImpact?&isdebug=true";

            var manifestContent = $"CACHE:\n{cachePart}\n\nNETWORK:\n{networkPart}\n\nFALLBACK:\n{fallbackPart}";
            var checksum = ChecksumHelper.GetMD5Checksum(manifestContent);
            newChecksum = checksum;

            var manifestFile = $"CACHE MANIFEST\n# {leadComment}, Checksum: {ChecksumHelper.GetMD5Checksum(manifestContent)}\n\n{manifestContent}";

            return manifestFile;
        }

        private string[] GetFileNames(DirectoryInfo rootFolder)
        {
            var result = new List<string>();
            result.AddRange(rootFolder.GetFiles().Select(f => f.Name));

            var dirs = rootFolder.GetDirectories();

            if (dirs.Length > 0)
            {
                result.AddRange(dirs.SelectMany(d => GetFileNames(d).Select(f => $"{d.Name}/{f}")));
            }

            return result.ToArray();
        }
    }
}