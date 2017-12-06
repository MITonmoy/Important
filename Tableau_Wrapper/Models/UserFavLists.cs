using System.Collections.Generic;
using System.Xml.Serialization;

namespace Tableau_Wrapper.Models
{
    [XmlRoot("favlists")]
    public class UserFavLists
    {
        [XmlAttribute("userid")]
        public string UserId { get; set; }
        [XmlAttribute("username")]
        public string UserName { get; set; }

        [XmlArray("sites")]
        [XmlArrayItem("site")]
        public List<SiteFavs> SiteFavsList { get; set; }
    }

    public class SiteFavs
    {
        [XmlAttribute("id")]
        public string SiteId { get; set; }

        [XmlArray("workbooks")]
        [XmlArrayItem("workbook")]
        public List<FavWorkbook> WorkbookList { get; set; }
    }

    public class FavWorkbook
    {
        [XmlAttribute("id")]
        public string WorkbookId { get; set; }
    }
}