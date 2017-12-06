using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Xml.Linq;
using System.Xml.Serialization;

namespace Tableau_Wrapper.Services.Models.TableauServer
{
    [XmlRoot("tsRequest")]
    //[XmlRoot("tsRequest", Namespace = "http://tableau.com/api")]
    public class SigninRequest
    {
        [XmlElement("credentials")]
        public RqCredentials Credentials { get; set; }
    }

    public class RqCredentials
    {
        [XmlAttribute("name")]
        public string Username { get; set; }
        [XmlAttribute("password")]
        public string Password { get; set; }
        [XmlElement("site")]
        public TsSite Site { get; set; }
    }

}
