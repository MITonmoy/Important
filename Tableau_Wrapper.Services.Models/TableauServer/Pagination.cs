using System.Xml.Serialization;

namespace Tableau_Wrapper.Services.Models.TableauServer
{
    public class Pagination
    {
        [XmlAttribute("pageNumber")]
        public int PageNumber { get; set; }
        [XmlAttribute("pageSize")]
        public int PageSize { get; set; }
        [XmlAttribute("totalAvailable")]
        public int TotalAvailable { get; set; }
    }
}