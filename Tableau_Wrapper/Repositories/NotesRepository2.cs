using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Tableau_Wrapper.Helpers;

namespace Tableau_Wrapper.Repositories
{
    public class NotesRepository2
    {
        private UserNotes _allNotes;

        public string ContentFilePath
        {
            get { return $"{ResourcesFolderLocation.Trim('\\').Trim()}\\UserNotes\\Notes-{UserName}-{UserId}.xml"; }
        }
        public string ResourcesFolderLocation { get; private set; }
        public object UserName { get; private set; }
        public object UserId { get; private set; }

        public NotesRepository2(string resourcesFolderLocation, string userName, string userId)
        {
            ResourcesFolderLocation = resourcesFolderLocation;
            UserName = userName;
            UserId = userId;
            LoadAllNotes();
        }

        public SiteNotes Get(string siteIdOrName)
        {
            if (_allNotes == null) LoadAllNotes();
            if (_allNotes == null) return null;

            var result = _allNotes.SiteNoteList
                .FirstOrDefault(sn => sn.SiteName == siteIdOrName || sn.SiteId == siteIdOrName);

            return result;
        }

        public bool Save(string siteId, string siteName, string workbookId, string workbookName, string viewId, string viewName, string viewContentUrl, string note)
        {
            if (_allNotes == null) LoadAllNotes();
            if (_allNotes == null) return false;

            var site = _allNotes.SiteNoteList.FirstOrDefault(sn => sn.SiteName == siteName);

            if (site == null)
            {
                site = new SiteNotes { SiteId = siteId, SiteName = siteName };
                _allNotes.SiteNoteList.Add(site);
            }

            var workbook = site.WorkbookNoteList.FirstOrDefault(wn => wn.WorkbookName == workbookName);

            if (workbook == null)
            {
                workbook = new WorkbookNotes { WorkbookId = workbookId, WorkbookName = workbookName };
                if (site.WorkbookNoteList == null) site.WorkbookNoteList = new List<WorkbookNotes>();
                site.WorkbookNoteList.Add(workbook);
            }

            var view = workbook.ViewNoteList.FirstOrDefault(vn => vn.ViewName == viewName);

            if (view == null)
            {
                view = new ViewNotes { ViewId = viewId, ViewName = viewName, ContentUrl = viewContentUrl };
                if (workbook.ViewNoteList == null) workbook.ViewNoteList = new List<ViewNotes>();
                workbook.ViewNoteList.Add(view);
            }
            view.Note = note;

            SaveAllNotes();

            return true;
        }

        private void SaveAllNotes()
        {
            if (!System.IO.File.Exists(ContentFilePath))
                System.IO.File.CreateText(ContentFilePath);
            XmlFileHelper.SaveDataToFile(_allNotes, ContentFilePath);
        }

        private void LoadAllNotes()
        {
            _allNotes = GetAllNotes();
        }

        private UserNotes GetAllNotes()
        {
            if (!System.IO.File.Exists(ContentFilePath))
                System.IO.File.CreateText(ContentFilePath);
            var data = XmlFileHelper.GetDataFromFile<UserNotes>(ContentFilePath);
            return data;
        }
    }

    public class UserNotes
    {
        public string UserId { get; set; }
        public string UserName { get; set; }
        public List<SiteNotes> SiteNoteList { get; set; }
    }

    public class SiteNotes
    {
        public string SiteId { get; set; }
        public string SiteName { get; set; }
        public List<WorkbookNotes> WorkbookNoteList { get; set; }
    }

    public class WorkbookNotes
    {
        public string WorkbookId { get; set; }
        public string WorkbookName { get; set; }
        public List<ViewNotes> ViewNoteList { get; set; }
    }

    public class ViewNotes
    {
        public string ViewId { get; set; }
        public string ViewName { get; set; }
        public string ContentUrl { get; set; }
        public string Note { get; set; }
    }
}