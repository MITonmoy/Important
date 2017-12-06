using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Xml.Serialization;

namespace Tableau_Wrapper.Services.Models.TableauServer
{
    [XmlRoot("tsResponse", Namespace = "http://tableau.com/api")]
    public class Projects : IResponse
    {
        [XmlElement("pagination")]
        public Pagination Pagination { get; set; }

        [XmlArray("projects")]
        [XmlArrayItem("project")]
        public List<Project> ItemList { get; set; }

        public bool IsError { get; set; }

        public ErrorResponse ErrorResponse { get; set; }
    }
}
