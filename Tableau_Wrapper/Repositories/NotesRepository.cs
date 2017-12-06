using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Tableau_Wrapper.Helpers;
using Tableau_Wrapper.Models.ViewModels;

namespace Tableau_Wrapper.Repositories
{
    public class NotesRepository
    {
        private IndexViewModel _allInfo;
        private string _userName;

        public string ContentFilePath
        {
            get { return $"{ResourcesFolderLocation.Trim('\\').Trim()}\\IndexViewModel-{UserName}-{UserId}.xml"; }
        }
        public string ResourcesFolderLocation { get; private set; }
        public string UserName { get { return _userName; } set { _userName = value.Contains('\\') ? value.Split('\\').Last() : value; } }
        public string UserId { get; private set; }

        public NotesRepository(string resourcesFolderLocation, string userName, string userId)
        {
            ResourcesFolderLocation = resourcesFolderLocation;
            UserName = userName;
            UserId = userId;
            LoadAllNotes();
        }

        public bool Save(string workbookName, string viewName, string note)
        {
            if (_allInfo == null) LoadAllNotes();
            if (_allInfo == null) return false;

            var workbooks = _allInfo.Categories.SelectMany(c => c.Workbooks).Where(w => w.Name == workbookName).ToArray();

            if (workbooks.Length < 1) return false;

            foreach (var workbook in workbooks)
            {
                var view = workbook.Views.FirstOrDefault(vn => vn.Name == viewName || vn.Name.Replace('_', ' ') == viewName);

                if (view == null) continue;

                view.Note = note;
            }

            SaveAllNotes();

            return true;
        }

        private void SaveAllNotes()
        {
            if (!System.IO.File.Exists(ContentFilePath))
                System.IO.File.CreateText(ContentFilePath);
            XmlFileHelper.SaveDataToFile(_allInfo, ContentFilePath);
        }

        private void LoadAllNotes()
        {
            _allInfo = GetAllNotes();
        }

        private IndexViewModel GetAllNotes()
        {
            if (!System.IO.File.Exists(ContentFilePath))
                System.IO.File.CreateText(ContentFilePath);
            var data = XmlFileHelper.GetDataFromFile<IndexViewModel>(ContentFilePath);
            return data;
        }
    }
}