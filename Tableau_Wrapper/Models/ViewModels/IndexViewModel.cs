using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Xml.Serialization;

namespace Tableau_Wrapper.Models.ViewModels
{
    public class IndexViewModel
    {
        public string ServerUrl { get; set; }
        public string UserId { get; set; }
        public string UserName { get; set; }
        public string SiteId { get; set; }
        public string SiteName { get; set; }
        public bool IsTopLevelMenu { get; set; }
        public List<Category> Categories { get; set; }
    }
}