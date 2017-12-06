using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Tableau_Wrapper.Services.Models.Helpers
{
    public static class StringHelpers
    {
        public static string NullValue { get { return ConfigurationManager.AppSettings["NullValueIndicator"] == null ? "/*NULL*/" : ConfigurationManager.AppSettings["NullValueIndicator"]; } }

        public static string ToSafeString(this string input)
        {
            return string.IsNullOrWhiteSpace(input) ? NullValue : input;
        }
    }
}
