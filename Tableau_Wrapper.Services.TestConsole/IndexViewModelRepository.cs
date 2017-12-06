using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Tableau_Wrapper.Models;
using Tableau_Wrapper.Models.ViewModels;
using Tableau_Wrapper.Services.Models.TableauServer;

namespace Tableau_Wrapper.Services.TestConsole
{
    class IndexViewModelRepository : RepositoryBase<IndexViewModel>, IIndexViewModelRepository
    {
        public IndexViewModelRepository(ICacheProvider<IndexViewModel> cacheProvider) : base(cacheProvider)
        {
        }

        public IList<Category> GetAllCategories()
        {
            return Get().Categories;
        }

        public IList<Category> GetCategories(Func<Category, bool> filter)
        {
            return GetAllCategories().Where(filter).ToList();
        }

        public Category GetCategory(Func<Category, bool> filter)
        {
            return GetAllCategories().FirstOrDefault(filter);
        }

        public Category GetCategory(string name)
        {
            return GetCategory(c => c.Name == name);
        }

        public void UpdateCategory(Category obj)
        {
            var cat = GetCategory(obj.Name);

            if (cat == null) return;

            var catIndex = _data.Categories.IndexOf(obj);

            _data.Categories[catIndex] = obj;
            Save();
        }

        public void SaveFavourite(string categoryName, string workbookNameOrId, bool isFavourite)
        {
            var wbk = GetCategory(categoryName).Workbooks
                .FirstOrDefault(w => w.Name == workbookNameOrId || w.Id == workbookNameOrId);

            if (wbk == null) return;
            wbk.IsFavourite = isFavourite;
            Save();
        }

        public void SaveNote(string categoryName, string workbookNameOrId, string viewNameOrId, string note)
        {
            var wbk = GetCategory(categoryName).Workbooks
                .FirstOrDefault(w => w.Name == workbookNameOrId || w.Id == workbookNameOrId);

            if (wbk == null) return;

            var vw = wbk.Views.FirstOrDefault(v => v.Name == viewNameOrId || v.Id == viewNameOrId);

            if (vw == null) return;

            vw.Note = note;
            Save();
        }
    }

    internal interface IIndexViewModelRepository : IRepository<IndexViewModel>
    {
        IList<Category> GetAllCategories();
        IList<Category> GetCategories(Func<Category, bool> filter);
        Category GetCategory(string name);
        Category GetCategory(Func<Category, bool> filter);
        void UpdateCategory(Category obj);
        void SaveNote(string categoryName, string workbookNameOrId, string viewNameOrId, string note);
        void SaveFavourite(string categoryName, string workbookNameOrId, bool isFavourite);
    }

    internal interface IRepository<T>
    {
        T Get();
        void Save();
        void Save(T obj);
        void RefreshData();
    }

    internal class RepositoryBase<T> : IRepository<T>
    {
        protected T _data;
        protected ICacheProvider<T> CacheProvider;

        protected virtual void LoadDataFromCache()
        {
            _data = CacheProvider.Get();
        }

        public RepositoryBase(ICacheProvider<T> cacheProvider)
        {
            CacheProvider = cacheProvider;
            LoadDataFromCache();
        }

        public T Get()
        {
            if (_data == null)
                LoadDataFromCache();
            return _data;
        }

        public void Save()
        {
            var success = CacheProvider.Save(_data);

            if (!success)
            {
                var ex = new Exception("An error occurred while saving to cache.");
                throw ex;
            }
        }

        public void Save(T obj)
        {
            _data = obj;
            Save();
        }

        public void RefreshData()
        {
            LoadDataFromCache();
        }
    }
}
