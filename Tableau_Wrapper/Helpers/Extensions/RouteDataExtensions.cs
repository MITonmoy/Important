using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Routing;

namespace Tableau_Wrapper.Helpers.Extensions
{
    public static class RouteDataExtensions
    {
        public static string GetControllerName(this RouteData routeData)
        {
            var key = "controller";
            if (!routeData.Values.ContainsKey(key))
                return string.Empty;
            return routeData.GetRequiredString(key);
        }

        public static string GetActionName(this RouteData routeData)
        {
            var key = "action";
            if (!routeData.Values.ContainsKey(key))
                return string.Empty;
            return routeData.GetRequiredString(key);
        }
    }
}