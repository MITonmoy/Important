using System;
using System.Collections.Generic;
using System.Configuration;
using System.Web.Mvc;
using Tableau_Wrapper.Helpers;
using Tableau_Wrapper.Helpers.Extensions;
using Tableau_Wrapper.Models;
using Tableau_Wrapper.Services.Models;
using static Tableau_Wrapper.Models.AppConstants;

namespace Tableau_Wrapper.Controllers
{
    public class BaseAppController : Controller
    {
        protected static IDictionary<string, IDictionary<string, UserCookie>> CookieRepo = new Dictionary<string, IDictionary<string, UserCookie>>();

        public string ServerUrl { get { return ConfigurationManager.AppSettings[TsServerUrlKey]; } }

        public string TsUserId
        {
            get { return HttpContext.Session[TsUserIdSessionKey] as string; }
            set { HttpContext.Session[TsUserIdSessionKey] = value; }
        }
        public string TsUserName
        {
            get { return HttpContext.Session[TsUsernameSessionKey] as string; }
            set { HttpContext.Session[TsUsernameSessionKey] = value; }
        }
        public string TsUserToken
        {
            get { return HttpContext.Session[TsTokenSessionKey] as string; }
            set { HttpContext.Session[TsTokenSessionKey] = value; }
        }
        public string TsTrustedToken
        {
            get { return HttpContext.Session[TsTrustedTokenSessionKey] as string; }
            set { HttpContext.Session[TsTrustedTokenSessionKey] = value; }
        }
        public string TsCurrentSiteId
        {
            get { return HttpContext.Session[TsSiteIdSessionKey] as string; }
            set { HttpContext.Session[TsSiteIdSessionKey] = value; }
        }
        public string TsCurrentSiteName
        {
            get { return HttpContext.Session[TsSiteNameSessionKey] as string; }
            set { HttpContext.Session[TsSiteNameSessionKey] = value; }
        }
        public SigninViewModel CurrentLoginData
        {
            get { return HttpContext.Session[CurrentLoginDataSessionKey] as SigninViewModel; }
            set { HttpContext.Session[CurrentLoginDataSessionKey] = value; }
        }

        public bool IsTableauTokenAvailable { get { return HttpContext.Session.ContainsKey(TsTokenSessionKey) && HttpContext.Session[TsTokenSessionKey] != null; } }
        public bool IsLoginDataAvailable { get { return HttpContext.Session.ContainsKey(CurrentLoginDataSessionKey) && HttpContext.Session[CurrentLoginDataSessionKey] != null; } }

        public TableauSettings TableauSettings { get; private set; }

        public BaseAppController()
        {
            TableauSettings = new TableauSettings();
        }

        [HttpPost]
        public void LogMessages(string[] msgs)
        {
            var msgList = string.Join(Environment.NewLine, msgs) + Environment.NewLine;
            Logger.Info(msgList);
        }

        [HttpPost]
        public void LogMessage(string msg)
        {
            Logger.Info($"{Request.RequestContext.RouteData.Values["controller"].ToString()}Controller - {msg}{Environment.NewLine}");
        }

        [HttpPost]
        public void LogError(string errMsg)
        {
            Logger.Error($"{Request.RequestContext.RouteData.Values["controller"].ToString()}Controller (ERROR) - {errMsg}{Environment.NewLine}");
        }


        protected virtual void HandleLogEvents(object sender, TableauWrapperServiceLogEventArgs eventArgs)
        {
            if (string.IsNullOrWhiteSpace(eventArgs.LogType) || eventArgs.LogType.ToLowerInvariant() == "info")
            {
                LogMessage($"from {sender.GetType().Name} - {eventArgs.Message}");
                return;
            }

            if (eventArgs.LogType.ToLowerInvariant() == "error")
            {
                LogError($"from {sender.GetType().Name} - {eventArgs.Message}");
                return;
            }
        }

        protected override void OnException(ExceptionContext excpCtx)
        {
            var url = excpCtx.RequestContext.HttpContext.Request.Url.AbsoluteUri;
            var ctrlr = excpCtx.RequestContext.RouteData.GetControllerName();

            if (string.IsNullOrWhiteSpace(url)) url = "---";
            if (string.IsNullOrWhiteSpace(ctrlr)) ctrlr = "---";

            Logger.Error($"Unhandled exception on {url} at {ctrlr} controller.", excpCtx.Exception);
            base.OnException(excpCtx);
        }
    }
}