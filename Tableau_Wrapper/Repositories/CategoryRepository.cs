using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using System.Xml.Serialization;
using Tableau_Wrapper.Models;

namespace Tableau_Wrapper.Repositories
{
    public class CategoryRepository : BaseRepository<UserCategories>, IUserCategoriesRepository
    {
        private string XmlFilePath{ get { return $"{AppPhysicalRoot}\\Resources\\Categories\\Categories-{UserName}-{UserId}.xml"; } }

        public List<Category> GetCategoriesForSite(string siteId)
        {
            var fullList = Get();
            return new List<Category>();
        }

        public void SaveCategoriesForSite(string siteId, List<Category> categories)
        {
            throw new NotImplementedException();
        }

        protected override UserCategories GetAllFromSource()
        {
            if (!File.Exists(XmlFilePath))
                return GetDefaultCategoryList();

            var fileInfo = new FileInfo(XmlFilePath);

            if (fileInfo.Length <= 0)
                return GetDefaultCategoryList();

            using (var strm = File.Open(XmlFilePath, FileMode.OpenOrCreate, FileAccess.ReadWrite))
            {
                var srlzr = new XmlSerializer(typeof(UserCategories));
                return srlzr.Deserialize(strm) as UserCategories;
            }
        }

        private UserCategories GetDefaultCategoryList()
        {
            throw new NotImplementedException();
        }
    }

    public interface IUserCategoriesRepository : IRepository<UserCategories>
    {
        List<Category> GetCategoriesForSite(string siteId);
        void SaveCategoriesForSite(string siteId, List<Category> categories);
    }
}