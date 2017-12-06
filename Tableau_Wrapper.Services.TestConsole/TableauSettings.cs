using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Threading.Tasks;

namespace Tableau_Wrapper.Services.TestConsole
{
    public class TableauSettings
    {
        public string ServerUrl { get { return ConfigurationManager.AppSettings["ServerUrl"]; } }
        public string ApiVersion { get { return ConfigurationManager.AppSettings["ApiVersion"]; } }
        public string AdminUser { get { return ConfigurationManager.AppSettings["AdminUser"]; } }
        public string AdminPassword { get { return ConfigurationManager.AppSettings["AdminPassword"]; } }
    }
}
