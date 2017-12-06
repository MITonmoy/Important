using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Serialization;

namespace Tableau_Wrapper.Services.Models.TableauServer
{
    [XmlRoot("tsRequest")]
    public class SwitchSiteRequest
    {
        [XmlElement("site")]
        public SwitchSiteRequestData SwitchSiteData { get; set; }
    }

    public class SwitchSiteRequestData : TsSite { }
}
