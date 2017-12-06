using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Xml.Serialization;

namespace Tableau_Wrapper.Models
{
    [XmlRoot("categorylists")]
    public class UserCategories
    {
        [XmlAttribute("userid")]
        public string UserId { get; set; }
        [XmlAttribute("username")]
        public string UserName { get; set; }

        [XmlArray("sites")]
        [XmlArrayItem("site")]
        public List<SiteCategories> SiteCategoriesList { get; set; }
    }

    public class SiteCategories
    {
        [XmlAttribute("id")]
        public string SiteId { get; set; }
        [XmlAttribute("name")]
        public string SiteName { get; set; }

        [XmlArray("categories")]
        [XmlArrayItem("category")]
        public List<Category> Categories { get; set; }
    }
}