using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Serialization;
using Tableau_Wrapper.Services.Models.Helpers;

namespace Tableau_Wrapper.Services.Models.TableauServer
{
    [XmlRoot("tsResponse", Namespace = "http://tableau.com/api")]
    public class ErrorResponse
    {
        [XmlElement("error")]
        public ErrorDetails ErrorDetails { get; set; }
        public string ExceptionDetails { get; set; }

        public override string ToString()
        {
            string result = $"{nameof(ExceptionDetails)}: {ExceptionDetails.ToSafeString()}";

            if (ErrorDetails != null)
                result = $"{nameof(ErrorDetails)}: {ErrorDetails.ToString()}{Environment.NewLine}{result}";
            return result;
        }
    }

    public class ErrorDetails
    {
        [XmlAttribute("code")]
        public string Code { get; set; }
        [XmlElement("summary")]
        public string Summary { get; set; }
        [XmlElement("details")]
        public string Details { get; set; }
        public HttpStatusCode HttpStatusCode { get; set; }
        public string HttpStatusDescription { get; set; }

        public override string ToString()
        {
            var result = $"{nameof(Code)}: {Code.ToSafeString()}" +
                $"{Environment.NewLine}{nameof(Summary)}: {Summary.ToSafeString()}" +
                $"{Environment.NewLine}{nameof(Details)}: {Details.ToSafeString()}" +
                $"{Environment.NewLine}{nameof(HttpStatusCode)}: {HttpStatusCode}" +
                $"{Environment.NewLine}{nameof(HttpStatusDescription)}: {HttpStatusDescription.ToSafeString()}";
            return result;
        }
    }
}
