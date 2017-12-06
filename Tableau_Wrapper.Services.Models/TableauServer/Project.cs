using System.Xml.Serialization;

namespace Tableau_Wrapper.Services.Models.TableauServer
{
    public class Project
    {
        [XmlAttribute("id")]
        public string Id { get; set; }
        [XmlAttribute("name")]
        public string Name { get; set; }
        [XmlAttribute("description")]
        public string Description { get; set; }
        [XmlAttribute("contentPermissions")]
        public string ContentPermissions { get; set; }
    }
}