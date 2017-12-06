using System;
using Tableau_Wrapper.Services.Models.TableauServer;

namespace Tableau_Wrapper.Services.Models
{
    public interface ITableauService
    {
        string ApiVersion { get; }
        string ServerUrl { get; }
        EventHandler<TableauWrapperServiceLogEventArgs> LogEventHandler { get; set; }

        Sites GetDummySites();
        bool HasAccessToSite(string contentUrlToSite, string username, string password);
        byte[] TryGetImageExportForView(string siteName, string viewContentUrl, string authToken);
        byte[] TryGetPreviewImageForWorkbook(string siteId, string workbookId, string authToken);
        Projects TryGetProjects(string siteId, string authToken);
        Sites TryGetSites(string adminToken);
        Views TryGetViewsForWorkbook(string siteId, string workbookId, string authToken);
        Workbooks TryGetWorkbooks(string siteId, string authToken);
        WorkbookWrapped TryGetWorkbookWithViews(string workbookId, string siteId, string authToken);
        SigninResponse TrySignin(string username, string password, string siteName = "");
        SignoutResponse TrySignout(string authToken);
        SigninResponse TrySwitchSite(string username, string siteContentUrl, string authToken);
        Subscriptions TryGetSubscriptions(string siteId, string authToken);
        Schedules TryGetSchedules(string authToken);
        void TrySaveSubscription(string tsCurrentSiteId, string tsUserId, string viewId, string scope, string scheduleId, string subject, string authToken);
        string TryGetTrustedToken(string username, string siteName);
    }
}