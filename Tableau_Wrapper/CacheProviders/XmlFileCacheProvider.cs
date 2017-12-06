using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using Tableau_Wrapper.Helpers;

namespace Tableau_Wrapper.CacheProviders
{
    public class XmlFileCacheProvider<T> : IFileCacheProvider<T> where T : class
    {
        protected static Dictionary<string, long> CacheFileLengths = new Dictionary<string, long>();

        public string FilePrefix { get; set; }

        public string FolderLocation { get; set; }

        public string UserId { get; set; }

        public string UserName { get; set; }

        protected string FullPath { get { return $"{FolderLocation}\\{FilePrefix}-{UserName}-{UserId}.xml"; } }

        public T DefaultValue { get; set; }

        public virtual bool HasNewData
        {
            get
            {
                if (!File.Exists(FullPath)) return true;
                if (!CacheFileLengths.ContainsKey(FullPath)) return true;

                var fileInfo = new FileInfo(FullPath);
                return CacheFileLengths[FullPath] != fileInfo.Length;
            }
        }

        public virtual bool CacheFileExists { get { return File.Exists(FullPath); } }

        public T Get()
        {
            var result = XmlFileHelper.GetDataFromFile<T>(FullPath);

            if (result == null)
                return DefaultValue;

            SetCacheFileLength();

            return result;
        }

        private void SetCacheFileLength()
        {
            if (!File.Exists(FullPath)) return;

            var fileInfo = new FileInfo(FullPath);

            if (!CacheFileLengths.ContainsKey(FullPath))
                CacheFileLengths.Add(FullPath, fileInfo.Length);
            else
                CacheFileLengths[FullPath] = fileInfo.Length;

        }

        public bool Save(T obj)
        {
            try
            {
                XmlFileHelper.SaveDataToFile(obj, FullPath);
            }
            catch (Exception)
            {
                return false;
            }
            return true;
        }
    }
}