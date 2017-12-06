using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Xml.Serialization;

namespace Tableau_Wrapper.Services.Models.TableauServer
{
    public class TsSite
    {
        [XmlAttribute("id")]
        public string Id { get; set; }
        [XmlAttribute("name")]
        public string Name { get; set; }
        [XmlAttribute("contentUrl")]
        public string ContentUrl { get; set; }
        [XmlAttribute("adminMode")]
        public string AdminMode { get; set; }
        [XmlAttribute("userQuota")]
        public string UserQuota { get; set; }
        [XmlAttribute("storageQuota")]
        public string StorageQuota { get; set; }
        [XmlAttribute("state")]
        public string State { get; set; }
        [XmlAttribute("statusReason")]
        public string StatusReason { get; set; }
    }
}
