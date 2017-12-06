using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Xml.Linq;
using System.Xml.Serialization;

namespace Tableau_Wrapper.Services.Models.TableauServer
{
    [XmlRoot("tsResponse", Namespace = "http://tableau.com/api")]
    public class TsSigninResponse: IResponse
    {
        [XmlElement("credentials")]
        public RsCredentials Credentials { get; set; }

        public ErrorResponse ErrorResponse { get; set; }

        public bool IsError { get; set; }
    }

    public class RsCredentials
    {
        [XmlAttribute("token")]
        public string Token { get; set; }
        [XmlElement("site")]
        public TsSite Site { get; set; }
        [XmlElement("user")]
        public TsUser User { get; set; }
    }

    public class TsUser
    {
        [XmlAttribute("id")]
        public string Id { get; set; }
    }
}
