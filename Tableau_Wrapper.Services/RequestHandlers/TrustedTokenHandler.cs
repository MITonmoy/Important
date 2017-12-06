using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;
using Tableau_Wrapper.Services.Models;

namespace Tableau_Wrapper.Services.RequestHandlers
{
    public class TrustedTokenHandler : RequestHandlerBase<string, string>
    {
        public string Username { get; set; }
        public string SiteName { get; set; }
        public override string ApiMethod { get { return $"username={Username}&target_site={SiteName}"; } }

        public override string ApiMethodType { get { return ApiMethodTypes.Post; } }

        public override string GetRequestUrl(string serverAddress, string apiVersion, string apiMethod)
        {
            return $"{serverAddress}/trusted?{ApiMethod}";
        }

        public override string GetResponse(string serverAddress, string apiVersion, string requestObj, string authToken = "")
        {
            string resObj = string.Empty;
            var wreq = WebRequest.CreateHttp(GetRequestUrl(serverAddress, apiVersion, ApiMethod));
            wreq.Method = ApiMethodType;
            //wreq.Accept = "application/xml";
            wreq.Proxy = null;

            try
            {
                //ServicePointManager.ServerCertificateValidationCallback += AcceptAllCertificates;
                using (var wres = wreq.GetResponse())
                {
                    using (var reader = new StreamReader(wres.GetResponseStream()))
                    {
                        resObj = reader.ReadToEnd();
                    }
                }
            }
            catch (WebException e)
            {
            }
            catch (Exception e)
            {
            }

            return resObj;
        }
    }
}
