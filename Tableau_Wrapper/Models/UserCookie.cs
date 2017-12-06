using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Tableau_Wrapper.Models
{
    public class UserCookie
    {
        public string SiteId { get; set; }
        public string SiteName { get; set; }
        public string Token { get; set; }
        public DateTime IssueDate { get; set; }
    }
}