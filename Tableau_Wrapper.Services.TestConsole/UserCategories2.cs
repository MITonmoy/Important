using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Xml.Serialization;
using Tableau_Wrapper.Models;

namespace Tableau_Wrapper.Services.TestConsole
{
    [XmlRoot("categorylists")]
    public class UserCategories2
    {
        [XmlAttribute("userid")]
        public string UserId { get; set; }
        [XmlAttribute("username")]
        public string UserName { get; set; }

        [XmlArray("sites")]
        [XmlArrayItem("site")]
        public List<SiteCategories> SiteFavsList { get; set; }
    }

    public class SiteCategories
    {
        [XmlAttribute("id")]
        public string SiteId { get; set; }
        [XmlAttribute("name")]
        public string SiteName { get; set; }

        [XmlArray("categories")]
        [XmlArrayItem("category")]
        public List<Category2> Categories { get; set; }
    }
}