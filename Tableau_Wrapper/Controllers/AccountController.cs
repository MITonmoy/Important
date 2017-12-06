using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using System.Web.Mvc;
using Tableau_Wrapper.Helpers;
using Tableau_Wrapper.Models;
using Tableau_Wrapper.Services;
using Tableau_Wrapper.Services.Models;
using Tableau_Wrapper.Services.Models.TableauServer;
using static Tableau_Wrapper.Models.AppConstants;

namespace Tableau_Wrapper.Controllers
{
    public class AccountController : BaseAppController
    {
        private static Dictionary<string, List<TsSite>> SiteCache = new Dictionary<string, List<TsSite>>();

        private ITableauService _tService;

        public AccountController()
        {
            _tService = new TableauService(TableauSettings.ServerUrl, TableauSettings.ApiVersion);
            _tService.LogEventHandler += HandleLogEvents;
        }

        public ActionResult Signin()
        {
            return View();
        }

        [HttpPost]
        public ActionResult Signin(SigninViewModel model)
        {
            var validator = new AccountValidator();
            validator.LogEventHandler += HandleLogEvents;

            if (!validator.IsValidCredentials(model.Username, model.Password))
            {
                LogError($"Login validation failed for {nameof(model.Username)}: {model.Username} using {nameof(model.Password)}: {model.Password}.");
                return View(new SigninViewModel { IsFailedAuthentication = true });
            }

            LogMessage($"Login validation succeded for {nameof(model.Username)}: {model.Username} using {nameof(model.Password)}: {model.Password}.");
            CurrentLoginData = model;
            TsUserName = model.Username;

            LogMessage($"Redirecting to {Url.Action("SelectSite", "Account")}.");
            return RedirectToAction("SelectSite", "Account");
        }

        public ActionResult SelectSite()
        {
            var redirMsg = $"Redirecting to {Url.Action("Signin", "Account")}.";

            if (!IsLoginDataAvailable)
            {
                LogError($"Login data not available in session or the stored object is null. {redirMsg}");
                return RedirectToAction("Signin", "Account");
            }

            var curLoginData = HttpContext.Session[CurrentLoginDataSessionKey] as SigninViewModel;

            if (curLoginData == null)
            {
                LogError($"Login data object available in session is not SigninViewModel type. {redirMsg}");
                return RedirectToAction("Signin", "Account");
            }

            var siteList = GetSiteList(curLoginData);

            if (siteList.Count == 0)
            {
                LogError($"Login data object available in session is not SigninViewModel type. {redirMsg}");
                return RedirectToAction("Signin", "Account");
            }

            if (siteList.Count == 1)
            {
                var fSite = siteList.First();
                LogMessage($"Only one site found. Site Id: {fSite.Id}, Name: {fSite.Name}, ContentUrl: {fSite.ContentUrl}.");
                return SubmitSite(new SiteSelectionViewModel { SelectedSite = fSite.ContentUrl });
            }

            LogMessage($"Rendering site selection page with {siteList.Count} sites.");
            return View(siteList);
        }

        private List<TsSite> GetSiteList(SigninViewModel curLoginData)
        {
            var siteCacheKey = curLoginData.Username.Split('\\').Last();
            if (SiteCache.ContainsKey(siteCacheKey) && SiteCache[siteCacheKey].Count > 0)
                return SiteCache[siteCacheKey];

            var adminAuthResponse = _tService.TrySignin(TableauSettings.AdminUser, TableauSettings.AdminPassword);
            var adminToken = adminAuthResponse.TableauToken;
            var fullSiteList = _tService.TryGetSites(adminToken);

            var siteList = new List<TsSite>();
            foreach (var site in fullSiteList.ItemList)
            {
                var loginResp = _tService.TrySignin(curLoginData.Username, curLoginData.Password, site.ContentUrl);
                if (!loginResp.TsResponse.IsError)
                    siteList.Add(site);
            }

            if (SiteCache.ContainsKey(siteCacheKey))
            {
                var cachedSiteList = SiteCache[siteCacheKey];
                if (siteList.Count > 0) SiteCache[siteCacheKey] = siteList;
            }
            else
                SiteCache.Add(siteCacheKey, siteList);

            return siteList;
        }

        public ActionResult SubmitSite(SiteSelectionViewModel model)
        {
            var redirMsg = $"Redirecting to {Url.Action("Signin", "Account")}.";
            var selectedSiteIsUnusable = string.IsNullOrWhiteSpace(model.SelectedSite);

            if (!ModelState.IsValid || selectedSiteIsUnusable)
            {
                LogError($"Model state is not valid or submitted site is null or whitespace. {redirMsg}");
                return RedirectToAction("Signin", "Account");
            }

            if (!IsLoginDataAvailable)
            {
                LogError($"Login data not available in session or the stored object is null. {redirMsg}");
                return RedirectToAction("Signin", "Account");
            }

            SigninResponse signinResponse;

            CurrentLoginData.SelectedSite = model.SelectedSite;

            LogMessage($"Signing in to {CurrentLoginData.SelectedSite}");

            if (CurrentLoginData.SelectedSite != TsCurrentSiteName)
            {
                if (TsUserToken != null)
                {
                    LogMessage($"User {TsUserName} was logged in before as user token was found. Going with switch site API method.");
                    signinResponse = _tService.TrySwitchSite(CurrentLoginData.Username, CurrentLoginData.SelectedSite, TsUserToken);
                }
                else
                {
                    LogMessage($"Token not found for user {TsUserName}. Going with sign in API method.");
                    signinResponse = _tService.TrySignin(CurrentLoginData.Username, CurrentLoginData.Password, CurrentLoginData.SelectedSite);
                }
                signinResponse.TrustedToken = _tService.TryGetTrustedToken(CurrentLoginData.Username, CurrentLoginData.SelectedSite);
                SetSessionValues(signinResponse);
            }

            return RedirectToAction("Index", "Home");
        }

        public ActionResult Logout()
        {
            LogMessage($"Signing out from {TsCurrentSiteName}. Setting {nameof(TsUserToken)}, {nameof(TsTrustedToken)}, {nameof(CurrentLoginData)} to null.");
            var logoutResponse = _tService.TrySignout(TsUserToken);
            ClearSessionValues();
            return RedirectToAction("Signin", "Account");
        }

        private void ClearSessionValues()
        {
            TsUserId = null;
            TsUserName = null;
            TsUserToken = null;
            TsTrustedToken = null;
            TsCurrentSiteId = null;
            TsCurrentSiteName = null;
            CurrentLoginData = null;
        }

        private void SetSessionValues(SigninResponse signinResponse)
        {
            LogMessage($"Setting session values.{Environment.NewLine}{signinResponse.ToString()}");
            TsUserId = signinResponse.TableauUserId;
            TsUserName = signinResponse.Username;
            TsUserToken = signinResponse.TableauToken;
            TsTrustedToken = signinResponse.TrustedToken;
            TsCurrentSiteId = signinResponse.TableauSiteId;
            TsCurrentSiteName = signinResponse.TableauSiteName;
        }


    }
}