using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Tableau_Wrapper.Services.Models.TableauServer;

namespace Tableau_Wrapper.Services.TestConsole
{
    public class AbcRepository<TCollection, TItem> where TCollection : class, new() where TItem : class, new()
    {
        protected TCollection AllItemsCache;
        protected ICacheProvider<TCollection> CacheProvider;

        public bool LocalCacheExists { get { return CacheProvider.DoesCacheExists; } }

        public string CacheFileLocation { get; private set; }

        public IList<TItem> Get()
        {
            if (!LocalCacheExists)
            {
                GetFromSource();
                SaveToLocalCache();
            }
            ServeFromLocalCache();
            return new[] { new TItem() };
        }

        public bool Save(TItem data)
        {
            return false;
        }

        public bool Add(TItem data)
        {
            return false;
        }

        public bool Delete(TItem data)
        {
            return false;
        }

        private void ServeFromLocalCache()
        {
            throw new NotImplementedException();
        }

        private void SaveToLocalCache()
        {
            throw new NotImplementedException();
        }

        protected void GetFromSource()
        {
            throw new NotImplementedException();
        }
    }

    public class XmlFileCacheProvider<T> : ICacheProvider<T>
    {
        public string CacheFileLocation { get; private set; }
        public bool DoesCacheExists { get { return File.Exists(CacheFileLocation); } }

        public T Get()
        {
            throw new NotImplementedException();
        }

        public bool Save(T obj)
        {
            throw new NotImplementedException();
        }
    }

    public interface ICacheProvider<T>
    {
        bool DoesCacheExists { get; }
        string CacheFileLocation { get; }
        T Get();
        bool Save(T obj);
    }
}
