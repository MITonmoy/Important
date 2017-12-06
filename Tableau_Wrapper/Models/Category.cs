using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Xml.Serialization;
using Tableau_Wrapper.Services.Models.TableauServer;

namespace Tableau_Wrapper.Models
{
    public class Category : IEquatable<Category>
    {
        [XmlAttribute("name")]
        public string Name { get; set; }
        [XmlAttribute("includeall")]
        public bool IncludeAllWorkbooks { get; set; }
        [XmlAttribute("includefavs")]
        public bool IncludeAllFavs { get; set; }

        [XmlArray("workbooks")]
        [XmlArrayItem("workbook")]
        public List<Workbook> Workbooks { get; set; }

        public bool Equals(Category other)
        {
            return (other != null) && (Name == other.Name);
        }

        public override int GetHashCode()
        {
            return Name.GetHashCode();
        }

        public override bool Equals(object obj)
        {
            if (obj == null) return false;
            if (ReferenceEquals(this, obj)) return true;

            var castedObj = obj as Category;

            if (castedObj == null) return false;

            return Equals(castedObj);
        }
    }
}