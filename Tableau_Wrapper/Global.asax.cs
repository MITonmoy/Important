using System;
using System.Collections.Generic;
using System.Configuration;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Security.Cryptography;
using System.Web;
using System.Web.Mvc;
using System.Web.Optimization;
using System.Web.Routing;
using Tableau_Wrapper.Helpers;

namespace Tableau_Wrapper
{
    public class MvcApplication : HttpApplication
    {
        protected void Application_Start()
        {
            AreaRegistration.RegisterAllAreas();
            FilterConfig.RegisterGlobalFilters(GlobalFilters.Filters);
            RouteConfig.RegisterRoutes(RouteTable.Routes);
            BundleConfig.RegisterBundles(BundleTable.Bundles);
            log4net.Config.XmlConfigurator.Configure();
        }

        protected virtual void Application_Error(object sender, EventArgs e)
        {
            var context = HttpContext.Current;
            var ex = context.Server.GetLastError().GetBaseException();
            Logger.Error($"Unhandled exception caught on {MethodBase.GetCurrentMethod().Name}. URL: {Request.Url.AbsoluteUri}", ex);
        }
        /*
        protected virtual void Application_EndRequest(object sender, EventArgs e)
        {
            MaintainCacheManifest();
        }

        private void MaintainCacheManifest()
        {
            int recreateCache;
            int.TryParse(ConfigurationManager.AppSettings[AppConstants.RecreateCacheManifestKey], out recreateCache);

            if (recreateCache == 0) return;

            HttpContextBase ctxBase = new HttpContextWrapper(HttpContext.Current);
            UrlHelper url = new UrlHelper(HttpContext.Current.Request.RequestContext);
            var manifestFilePath = HttpContext.Current.Server.MapPath("~/Content/manifest.appcache");

            string oldChecksum = GetCurrentChecksum(manifestFilePath);

            string newChecksum;
            string manifestFile = GetManifestFile(url, out newChecksum);

            if(newChecksum != oldChecksum)
                File.WriteAllText(manifestFilePath, manifestFile);
        }

        private string GetCurrentChecksum(string manifestFilePath)
        {
            string checksumValue = string.Empty;
            using (var reader = new StreamReader(manifestFilePath))
            {
                var line = reader.ReadLine();
                while (line != null)
                {
                    if (!line.StartsWith("#")) continue;

                    var parts = line.Split(',');
                    var checksumPart = parts.FirstOrDefault(p => p.ToLowerInvariant().Contains("checksum"));

                    if (checksumPart == null) break;

                    checksumValue = checksumPart.Split(':').Last();

                    return checksumValue;
                }
            }

            return checksumValue;
        }

        private string GetManifestFile(UrlHelper url, out string newChecksum)
        {
            string leadComment = $"App Version: {GetType().Assembly.GetName().Version}", cachePart = "", networkPart = "*", fallbackPart = "";

            leadComment = $"{leadComment}, Timestamp: {DateTime.Now.ToString("MMMM dd, yyyy H:mm:ss")}";

            var imgFolder = new DirectoryInfo(Server.MapPath("~/Content/Images"));

            var imgNames = GetFileNames(imgFolder);

            cachePart = string.Join("\n", imgNames.Select(img => url.Content($"~/Content/Images/{img}")));

            //cachePart = $"{cachePart}\n" + "http://cdtssql353d:8000/t/Horizon/views/CopaycardSuite_NIAD/2_CopaysandCostImpact?&isdebug=true";

            var manifestContent = $"CACHE:\n{cachePart}\n\nNETWORK:\n{networkPart}\n\nFALLBACK:\n{fallbackPart}";
            var checksum = ChecksumHelper.GetMD5Checksum(manifestContent);
            newChecksum = checksum;

            var manifestFile = $"CACHE MANIFEST\n# {leadComment}, Checksum: {ChecksumHelper.GetMD5Checksum(manifestContent)}\n\n{manifestContent}";

            return manifestFile;
        }

        private string[] GetFileNames(DirectoryInfo rootFolder)
        {
            var result = new List<string>();
            result.AddRange(rootFolder.GetFiles().Select(f => f.Name));

            var dirs = rootFolder.GetDirectories();

            if (dirs.Length > 0)
            {
                result.AddRange(dirs.SelectMany(d => GetFileNames(d).Select(f => $"{d.Name}/{f}")));
            }

            return result.ToArray();
        }
        */
    }
}
