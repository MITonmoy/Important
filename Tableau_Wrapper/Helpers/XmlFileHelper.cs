using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Xml.Serialization;

namespace Tableau_Wrapper.Helpers
{
    public static class XmlFileHelper
    {
        public static T GetDataFromFile<T>(string filepath, T defaultValue = null) where T : class
        {
            try
            {
                using (var stream = File.Open(filepath, FileMode.OpenOrCreate, FileAccess.ReadWrite))
                {
                    var srlzr = new XmlSerializer(typeof(T));
                    return srlzr.Deserialize(stream) as T;
                }
            }
            catch (Exception)
            {
                return defaultValue;
            }
        }

        public static void SaveDataToFile<T>(T obj, string filepath) where T : class
        {

            var stream = File.Exists(filepath)
                ? File.Open(filepath, FileMode.Truncate, FileAccess.Write)
                : File.Open(filepath, FileMode.OpenOrCreate, FileAccess.Write);

            using (stream)
            {
                var srlzr = new XmlSerializer(typeof(T));
                srlzr.Serialize(stream, obj);
            }
        }

        public static void SaveDataToFile<T>(T obj, string filepath, string[] excludePropertyList) where T : class
        {
            var xOver = new XmlAttributeOverrides();
            var attrs = new XmlAttributes { XmlIgnore = true };

            foreach (var property in excludePropertyList)
            {
                xOver.Add(typeof(T), property, attrs);
            }


            var stream = File.Exists(filepath)
                ? File.Open(filepath, FileMode.Truncate, FileAccess.Write)
                : File.Open(filepath, FileMode.OpenOrCreate, FileAccess.Write);

            using (stream)
            {
                var srlzr = new XmlSerializer(typeof(T), xOver);
                srlzr.Serialize(stream, obj);
            }
        }
    }
}