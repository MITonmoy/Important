using System;
using System.Collections.Generic;
using System.Xml.Serialization;

namespace Tableau_Wrapper.Services.Models.TableauServer
{
    [XmlRoot("tsResponse", Namespace = "http://tableau.com/api")]
    public class Schedules : IResponse
    {
        [XmlElement("pagination")]
        public Pagination Pagination { get; set; }

        [XmlArray("schedules")]
        [XmlArrayItem("schedule")]
        public List<TsSchedule> ItemList { get; set; }

        public bool IsError { get; set; }

        public ErrorResponse ErrorResponse { get; set; }
    }

    public class TsSchedule
    {
        [XmlAttribute("id")]
        public string Id { get; set; }
        [XmlAttribute("name")]
        public string Name { get; set; }
        [XmlAttribute("priority")]
        public string Priority { get; set; }
        [XmlAttribute("type")]
        public string Type { get; set; }
        [XmlAttribute("frequency")]
        public string Frequency { get; set; }
        [XmlAttribute("executionOrder")]
        public string ExecutionOrder { get; set; }
        [XmlElement("frequencyDetails")]
        public TsScheduleFrequency FrequencyDetails { get; set; }
    }

    public class TsScheduleFrequency
    {
        [XmlArray("intervals")]
        [XmlArrayItem("interval")]
        public List<TsScheduleFrequencyInterval> Intervals { get; set; }
    }

    public class TsScheduleFrequencyInterval
    {
        [XmlAttribute("hours")]
        public int Hours { get; set; }
        [XmlAttribute("minutes")]
        public int Minutes { get; set; }
        [XmlAttribute("weekDay")]
        public string WeekDay { get; set; }
        [XmlAttribute("monthDay")]
        public string MonthDay { get; set; }
    }
}