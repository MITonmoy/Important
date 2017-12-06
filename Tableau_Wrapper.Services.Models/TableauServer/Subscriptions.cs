using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Serialization;
using Tableau_Wrapper.Services.Models.TableauServer;

namespace Tableau_Wrapper.Services.Models.TableauServer
{
    [XmlRoot("tsResponse", Namespace = "http://tableau.com/api")]
    public class Subscriptions : IResponse
    {
        [XmlElement("pagination")]
        public Pagination Pagination { get; set; }

        [XmlArray("subscriptions")]
        [XmlArrayItem("subscription")]
        public List<Subscription> ItemList { get; set; }

        public ErrorResponse ErrorResponse { get; set; }

        public bool IsError { get; set; }
    }

    public class Subscription
    {
        [XmlAttribute("id")]
        public string Id { get; set; }
        [XmlAttribute("subject")]
        public string Subject { get; set; }
        [XmlElement("content")]
        public SubscriptionContent Content { get; set; }
        [XmlElement("schedule")]
        public TsSchedule Schedule { get; set; }
        [XmlElement("user")]
        public TsUser User { get; set; }
    }

    [XmlRoot("tsRequest")]
    public class SubscriptionRequest
    {
        [XmlElement("subscription")]
        public Subscription RequestItem { get; set; }
    }

    public class SubscriptionContent
    {
        [XmlAttribute("id")]
        public string Id { get; set; }
        [XmlAttribute("type")]
        public string Type { get; set; }
    }
}
