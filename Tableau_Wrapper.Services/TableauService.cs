using Tableau_Wrapper.Services.Models;
using Tableau_Wrapper.Services.Models.TableauServer;
using System.Threading.Tasks;
using System;
using Tableau_Wrapper.Services.RequestHandlers;
using System.Collections.Generic;
using System.Net;

namespace Tableau_Wrapper.Services
{
    public class TableauService : ITableauService
    {
        public string ServerUrl { get; private set; }
        public string ApiVersion { get; private set; }
        public EventHandler<TableauWrapperServiceLogEventArgs> LogEventHandler { get; set; }

        public TableauService()
        {
            ServerUrl = "http://cdtssql353d:8000/";
            ApiVersion = "2.3";
        }

        public TableauService(string serverAddress, string apiVersion)
        {
            ServerUrl = serverAddress;
            ApiVersion = apiVersion;
        }

        public SigninResponse TrySignin(string username, string password, string siteName = "")
        {
            TsSigninResponse resObj;

            var handler = new SignInHandler()
            {
                ServerAddress = ServerUrl,
                ApiVersion = ApiVersion,
                Username = username,
                Password = password,
                SiteName = siteName
            };
            handler.LogEventHandler += RedirectLogFromRequestHandlers;

            try
            {
                resObj = handler.GetResponse();
            }
            catch (WebException e)
            {
                if (e.Status == WebExceptionStatus.ProtocolError)
                {
                    var eres = e.Response as HttpWebResponse;
                    var statCode = eres.StatusCode;
                    var desc = eres.StatusDescription;
                }
                resObj = new TsSigninResponse();
                throw;
            }
            catch (Exception)
            {
                resObj = new TsSigninResponse();
                throw;
            }

            return new SigninResponse(resObj, username);
        }

        public SignoutResponse TrySignout(string authToken)
        {
            var handler = new SignoutHandler { ServerAddress = ServerUrl, ApiVersion = ApiVersion };
            handler.LogEventHandler += RedirectLogFromRequestHandlers;

            try
            {
                handler.GetResponse(authToken);
            }
            catch (Exception ex)
            {
                return new SignoutResponse { IsError = true, ErrorMessage = ex.ToString() };
            }

            return new SignoutResponse { IsError = false };
        }

        public SigninResponse TrySwitchSite(string username, string siteContentUrl, string authToken)
        {
            var handler = new SwitchSiteHandler { ServerAddress = ServerUrl, ApiVersion = ApiVersion };
            handler.LogEventHandler += RedirectLogFromRequestHandlers;

            var reqObj = new SwitchSiteRequest { SwitchSiteData = new SwitchSiteRequestData { ContentUrl = siteContentUrl } };
            var resObj = handler.GetResponse(reqObj, authToken);

            return new SigninResponse(resObj, username);
        }

        public byte[] TryGetImageExportForView(string siteName, string viewContentUrl, string authToken)
        {
            var handler = new ViewImageExportHandler() { ServerAddress = ServerUrl, ApiVersion = ApiVersion, SiteName = siteName, ContentUrl = viewContentUrl };
            handler.LogEventHandler += RedirectLogFromRequestHandlers;

            return handler.GetResponse(authToken);
        }

        public byte[] TryGetPreviewImageForWorkbook(string siteId, string workbookId, string authToken)
        {
            var handler = new WorkbookPreviewImageHandler() { ServerAddress = ServerUrl, ApiVersion = ApiVersion, SiteId = siteId, WorkbookId = workbookId };
            handler.LogEventHandler += RedirectLogFromRequestHandlers;

            return handler.GetResponse(authToken);
        }

        public bool HasAccessToSite(string contentUrlToSite, string username, string password)
        {
            try
            {
                var response = TrySignin(username, password, contentUrlToSite).TsResponse;
                return response.IsError;
            }
            catch (Exception)
            {
                return false;
            }
        }

        public Sites TryGetSites(string adminToken)
        {
            var handler = new SitesHandler { ServerAddress = ServerUrl, ApiVersion = ApiVersion };
            handler.LogEventHandler += RedirectLogFromRequestHandlers;

            var result = handler.GetResponse(adminToken);

            if (result.IsError)
                return GetDummySites();
            return result;
        }

        public Sites GetDummySites()
        {
            return new Sites
            {
                ItemList = new List<TsSite>
                    {
                        new TsSite { Name = "MMA Gold", ContentUrl = "MMAGold" },
                        new TsSite { Name = "Takeda UACC", ContentUrl = "TakedaUACC" }
                    }
            };
        }

        public Workbooks TryGetWorkbooks(string siteId, string authToken)
        {
            var handler = new WorkbooksHandler { ServerAddress = ServerUrl, ApiVersion = ApiVersion, SiteId = siteId };
            handler.LogEventHandler += RedirectLogFromRequestHandlers;

            return handler.GetResponse(authToken);
        }

        public WorkbookWrapped TryGetWorkbookWithViews(string workbookId, string siteId, string authToken)
        {
            var handler = new WorkbookWithViewsHandler { ServerAddress = ServerUrl, ApiVersion = ApiVersion, SiteId = siteId, WorkbookId = workbookId };
            handler.LogEventHandler += RedirectLogFromRequestHandlers;

            return handler.GetResponse(authToken);
        }

        public Views TryGetViewsForWorkbook(string siteId, string workbookId, string authToken)
        {
            var handler = new ViewsForWorkbookHandler { ServerAddress = ServerUrl, ApiVersion = ApiVersion, SiteId = siteId, WorkbookId = workbookId };
            handler.LogEventHandler += RedirectLogFromRequestHandlers;

            return handler.GetResponse(authToken);
        }

        public Projects TryGetProjects(string siteId, string authToken)
        {
            var handler = new ProjectsHandler { ServerAddress = ServerUrl, ApiVersion = ApiVersion, SiteId = siteId };
            handler.LogEventHandler += RedirectLogFromRequestHandlers;

            return handler.GetResponse(authToken);
        }

        public Subscriptions TryGetSubscriptions(string siteId, string authToken)
        {
            var handler = new SubscriptionsHandler { ServerAddress = ServerUrl, ApiVersion = ApiVersion, SiteId = siteId };
            handler.LogEventHandler += RedirectLogFromRequestHandlers;

            return handler.GetResponse(authToken);
        }

        public Schedules TryGetSchedules(string authToken)
        {
            var handler = new SchedulesHandler { ServerAddress = ServerUrl, ApiVersion = ApiVersion };
            handler.LogEventHandler += RedirectLogFromRequestHandlers;

            return handler.GetResponse(authToken);
        }

        public void TrySaveSubscription(string siteId, string userId, string contentId, string contentType, string scheduleId, string subject, string authToken)
        {
            var handler = new SaveSubscriptionHandler { ServerAddress = ServerUrl, ApiVersion = ApiVersion, SiteId = siteId };
            handler.LogEventHandler += RedirectLogFromRequestHandlers;
            var reqObj = new SubscriptionRequest
            {
                RequestItem = new Subscription
                {
                    User = new TsUser { Id = userId },
                    Content = new SubscriptionContent { Id = contentId, Type = contentType },
                    Schedule = new TsSchedule { Id = scheduleId },
                    Subject = subject
                }
            };

            var response = handler.GetResponse(reqObj, authToken);
            return;
        }

        public string TryGetTrustedToken(string username, string siteName)
        {
            var handler = new TrustedTokenHandler { ServerAddress = ServerUrl, ApiVersion = ApiVersion, Username = username, SiteName = siteName };
            handler.LogEventHandler += RedirectLogFromRequestHandlers;
            return handler.GetResponse();
        }

        private void RedirectLogFromRequestHandlers(object sender, TableauWrapperServiceLogEventArgs eventArgs)
        {
            LogEventHandler(this, new TableauWrapperServiceLogEventArgs { LogType = eventArgs.LogType, Message = $"from {sender.GetType().Name} - {eventArgs.Message}" });
        }
    }
}
