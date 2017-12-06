using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using Tableau_Wrapper.CacheProviders;

namespace Tableau_Wrapper.Repositories
{
    public class BaseRepository<T> : IRepository<T>
    {
        private string _userName;
        private string _userId;

        protected T LocalCache;
        protected ICacheProvider<T> CacheProvider;

        protected virtual bool IsCacheExists { get { return LocalCache != null; } }

        public string AppPhysicalRoot { get; set; }
        public string UserId { get { return _userId; } set { _userId = value; CacheProvider.UserId = value; } }
        public string UserName { get { return _userName; } set { _userName = value.Contains('\\') ? value.Split('\\').Last() : value; CacheProvider.UserName = _userName; } }
        public string UserToken { get; set; }

        public BaseRepository() { }

        public BaseRepository(ICacheProvider<T> cacheProvider) { CacheProvider = cacheProvider; }

        public virtual T Get()
        {
            if (!IsCacheExists)
            {
                LocalCache = GetAllFromSource();
                CacheProvider.Save(LocalCache);
            }
            return LocalCache;
        }
        protected virtual T GetAllFromSource()
        {
            return Activator.CreateInstance<T>();
        }
        public virtual bool Save()
        {
            return CacheProvider.Save(LocalCache);
        }

        #region IDisposable Support
        private bool disposedValue = false; // To detect redundant calls

        protected virtual void Dispose(bool disposing)
        {
            if (!disposedValue)
            {
                if (disposing)
                {
                    // TODO: dispose managed state (managed objects).
                }

                // TODO: free unmanaged resources (unmanaged objects) and override a finalizer below.
                // TODO: set large fields to null.

                disposedValue = true;
            }
        }

        // TODO: override a finalizer only if Dispose(bool disposing) above has code to free unmanaged resources.
        // ~BaseRepository() {
        //   // Do not change this code. Put cleanup code in Dispose(bool disposing) above.
        //   Dispose(false);
        // }

        // This code added to correctly implement the disposable pattern.
        public void Dispose()
        {
            // Do not change this code. Put cleanup code in Dispose(bool disposing) above.
            Dispose(true);
            // TODO: uncomment the following line if the finalizer is overridden above.
            // GC.SuppressFinalize(this);
        }

    }
    #endregion 
}