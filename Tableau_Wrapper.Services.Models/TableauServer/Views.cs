using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Xml.Serialization;

namespace Tableau_Wrapper.Services.Models.TableauServer
{
    [XmlRoot("tsResponse", Namespace = "http://tableau.com/api")]
    public class Views : IResponse
    {
        [XmlElement("pagination")]
        public Pagination Pagination { get; set; }

        [XmlArray("views")]
        [XmlArrayItem("view")]
        public List<View> ItemList { get; set; }

        public bool IsError { get; set; }

        public ErrorResponse ErrorResponse { get; set; }
    }

    public class View
    {
        [XmlAttribute("id")]
        public string Id { get; set; }
        [XmlAttribute("name")]
        public string Name { get; set; }
        [XmlAttribute("contentUrl")]
        public string ContentUrl { get; set; }
        [XmlElement("usage")]
        public Usage Usage { get; set; }
        [XmlElement("note")]
        public string Note { get; set; }

        public override int GetHashCode()
        {
            return Id.GetHashCode();
        }
    }

    public class Usage
    {
        [XmlAttribute("totalViewCount")]
        public string TotalViewCount { get; set; }
    }
}
