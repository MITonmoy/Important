using System;
using System.Collections.Generic;
using System.Xml.Serialization;
using Tableau_Wrapper.Services.Models.TableauServer;

namespace Tableau_Wrapper.Services.TestConsole
{
    [XmlRoot("tsResponse", Namespace = "http://tableau.com/api")]
    public class Workbooks2 : IResponse
    {
        [XmlElement("pagination")]
        public Pagination Pagination { get; set; }

        [XmlArray("workbooks")]
        [XmlArrayItem("workbook")]
        public List<Workbook2> ItemList { get; set; }

        public bool IsError { get; set; }

        public ErrorResponse ErrorResponse { get; set; }
    }

    public class Workbook2
    {
        [XmlAttribute("id")]
        public string Id { get; set; }
        [XmlAttribute("name")]
        public string Name { get; set; }
        [XmlAttribute("contentUrl")]
        public string ContentUrl { get; set; }
        [XmlAttribute("showTabs")]
        public string ShowTabs { get; set; }
        [XmlAttribute("size")]
        public string Size { get; set; }
        [XmlAttribute("createdAt")]
        public string CreatedAt { get; set; }
        [XmlAttribute("updatedAt")]
        public string UpdatedAt { get; set; }
        [XmlElement("project")]
        public Project Project { get; set; }
        [XmlElement("owner")]
        public TsUser Owner { get; set; }

        [XmlArray("tags")]
        [XmlArrayItem("tag")]
        public List<WorkbookTag> Tags { get; set; }
        [XmlAttribute("favourite")]
        public bool IsFavourite { get; set; }

        public override int GetHashCode()
        {
            return Id.GetHashCode();
        }
    }
}