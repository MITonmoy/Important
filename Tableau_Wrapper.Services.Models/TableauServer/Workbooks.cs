using System;
using System.Collections.Generic;
using System.Xml.Serialization;

namespace Tableau_Wrapper.Services.Models.TableauServer
{
    [XmlRoot("tsResponse", Namespace = "http://tableau.com/api")]
    public class Workbooks : IResponse
    {
        [XmlElement("pagination")]
        public Pagination Pagination { get; set; }

        [XmlArray("workbooks")]
        [XmlArrayItem("workbook")]
        public List<Workbook> ItemList { get; set; }

        public bool IsError { get; set; }

        public ErrorResponse ErrorResponse { get; set; }
    }

    [XmlRoot("tsResponse", Namespace = "http://tableau.com/api")]
    public class WorkbookWrapped : IResponse
    {
        [XmlElement("workbook")]
        public Workbook Workbook { get; set; }

        [XmlIgnore]
        public bool IsError { get; set; }

        [XmlIgnore]
        public ErrorResponse ErrorResponse { get; set; }
    }

    public class Workbook: IEquatable<Workbook>
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
        [XmlAttribute("isFavourite")]
        public bool IsFavourite { get; set; }

        [XmlArray("views")]
        [XmlArrayItem("view")]
        public List<View> Views { get; set; }

        public override int GetHashCode()
        {
            return $"{Id}{Name}".GetHashCode();
        }

        public bool Equals(Workbook other)
        {
            return (other != null) && (Id == other.Id) && (Name == other.Name);
        }

        public override bool Equals(object obj)
        {
            if (obj == null) return false;
            if (ReferenceEquals(this, obj)) return true;

            var castedObj = obj as Workbook;

            if (castedObj == null) return false;

            return Equals(castedObj);
        }
    }

    public class WorkbookTag
    {
        [XmlAttribute("label")]
        public string Label { get; set; }
    }
}