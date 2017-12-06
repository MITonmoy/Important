using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Xml.Serialization;

namespace Tableau_Wrapper.Services.TestConsole
{
    public class Category2
    {
        [XmlAttribute("name")]
        public string Name { get; set; }
        [XmlAttribute("includeall")]
        public bool IncludeAllWorkbooks { get; set; }
        [XmlAttribute("includefavs")]
        public bool IncludeAllFavs { get; set; }

        [XmlArray("workbooks")]
        [XmlArrayItem("workbook")]
        public List<Workbook2> Workbooks { get; set; }
    }
}