using System.Web;
using System.Web.Optimization;

namespace Tableau_Wrapper
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js",
                        "~/Scripts/jquery.unobtrusive-ajax.js",
                        "~/Scripts/jquery.ui.position.js",
                        "~/Scripts/jquery.contextMenu.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                        "~/Scripts/jquery.validate*",
                        "~/Scripts/jquery.validate.unobtrusive.js"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at http://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/iecompats").Include(
                      "~/Scripts/polyfill.js",
                      "~/Scripts/html5shiv.js",
                      "~/Scripts/html5shiv-printshiv.js",
                      "~/Scripts/respond.js",
                      "~/Scripts/respond.matchmedia.addListener.js"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Scripts/bootstrap.js",
                      "~/Scripts/bootstrap-multiselect.js"));

            bundles.Add(new ScriptBundle("~/bundles/html5shiv").Include("~/Scripts/html5shiv*"));

            bundles.Add(new ScriptBundle("~/bundles/respondjs").Include("~/Scripts/respond*"));
            
            bundles.Add(new ScriptBundle("~/bundles/app").Include(
                      "~/Scripts/tableau-2.1.1.js",
                      "~/Scripts/tableau-2.js",
                      "~/Scripts/jquery.ui.position.js",
                      "~/Scripts/jquery.contextMenu.js",
                      "~/Scripts/tableau-viz-manipulator.js",
                      "~/Scripts/app.js",
                      "~/Scripts/home-index.js"));

            bundles.Add(new StyleBundle("~/Content/lib").Include(
                      "~/Content/bootstrap.css",
                      "~/Content/bootstrap-multiselect.css",
                      "~/Content/font-awesome.css",
                      "~/Content/jquery.contextMenu.css"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/home-index.css",
                      "~/Content/signin.css",
                      "~/Content/layout.css",
                      "~/Content/site.css"));
        }
    }
}
