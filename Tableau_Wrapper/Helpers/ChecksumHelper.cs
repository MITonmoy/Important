using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Web;

namespace Tableau_Wrapper.Helpers
{
    public static class ChecksumHelper
    {
        private static MD5 _md5 = MD5.Create();

        public static string GetMD5Checksum(string input)
        {
            var byteArray = _md5.ComputeHash(Encoding.UTF8.GetBytes(input));

            return BitConverter.ToString(byteArray).Replace("-", string.Empty).ToLowerInvariant();
        }
    }
}