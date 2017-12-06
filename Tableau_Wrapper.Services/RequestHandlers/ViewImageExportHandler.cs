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
    public class ViewImageExportHandler : RequestHandlerBase<string, byte[]>
    {
        public string SiteName { get; set; }
        public string ContentUrl { get; set; }
        public override string ApiMethod { get { return $"views/{ContentUrl.Replace("/sheets/", "/")}"; } }
        public override string ApiMethodType { get { return ApiMethodTypes.Get; } }

        public override string GetRequestUrl(string serverAddress, string apiVersion, string apiMethod)
        {
            return $"{serverAddress.TrimEnd('/')}/t/{SiteName}/{apiMethod}.png";
            //return "http://cdtssql353d:8000/t/MMAGold/views/MMAGOLD-v3/Claim-2.png";
        }

        public override byte[] GetResponse(string serverAddress, string apiVersion, string requestObj, string authToken = "")
        {
            var wreq = WebRequest.CreateHttp(GetRequestUrl(serverAddress, apiVersion, ApiMethod));
            wreq.Method = ApiMethodType;
            wreq.Proxy = null;

            const int bufferSize = 4096;
            var resObj = new List<byte>();

            if (!string.IsNullOrWhiteSpace(authToken))
            {
                wreq.Headers["X-Tableau-Auth"] = authToken;
            }

            try
            {
                using (var wres = wreq.GetResponse())
                {
                    using (var reader = new BinaryReader(wres.GetResponseStream()))
                    {
                        while (true)
                        {
                            var readBytes = reader.ReadBytes(bufferSize);
                            if (readBytes.Length < 1) break;
                            resObj.AddRange(readBytes);
                        }
                    }
                }
            }
            catch (WebException e)
            {
                throw e;
            }
            catch (Exception e)
            {
                throw e;
            }

            return resObj.ToArray();
        }
    }
}
