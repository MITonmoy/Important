using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using Tableau_Wrapper.Models;

namespace Tableau_Wrapper.Helpers.Extensions
{
    public static class SessionExtensions
    {
        public static bool IsTableauTokenAvailable(this HttpSessionStateBase session)
        {
            return session.ContainsKey(AppConstants.TsTokenSessionKey);
        }

        public static bool ContainsKey(this HttpSessionStateBase session, string keyname)
        {
            return session.Keys.Cast<string>().Contains(keyname);
        }
    }
}
