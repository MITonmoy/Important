using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Security;
using System.Reflection;
using System.Security.Cryptography.X509Certificates;
using System.Text;
using System.Threading.Tasks;
using System.Xml;
using System.Xml.Serialization;
using Tableau_Wrapper.Services.Models;
using Tableau_Wrapper.Services.Models.TableauServer;

namespace Tableau_Wrapper.Services.RequestHandlers
{
    public abstract class RequestHandlerBase<TReq, TRes> : IRequestHandler<TReq, TRes>
        where TRes : class
    {
        public EventHandler<TableauWrapperServiceLogEventArgs> LogEventHandler;

        public abstract string ApiMethod { get; }

        public abstract string ApiMethodType { get; }

        public string ApiVersion { get; set; }

        public string ServerAddress { get; set; }

        public bool IsRequestTypeTrivial
        {
            get
            {
                var tpInfo = typeof(TReq).GetTypeInfo();
                if (tpInfo.IsValueType)
                    return true;

                if (tpInfo.IsClass)
                {
                    var ctor = tpInfo.GetConstructor(Type.EmptyTypes);
                    return ctor == null;
                }
                return true;
            }
        }

        public bool IsResponseTypeTrivial
        {
            get
            {
                var tpInfo = typeof(TRes).GetTypeInfo();
                var ctor = tpInfo.GetConstructor(Type.EmptyTypes);
                return ctor == null;
            }
        }

        public virtual Func<TReq> GetPreparedRequest { get { return GetDefaultRequestObject; } }

        public virtual string GetRequestUrl(string serverAddress, string apiVersion, string apiMethod)
        {
            return $"{serverAddress.TrimEnd('/')}/api/{apiVersion}/{apiMethod.Trim('/')}";
        }

        public TRes GetResponse(string authToken = "")
        {
            return GetResponse(ServerAddress, ApiVersion, GetPreparedRequest(), authToken);
        }

        public TRes GetResponse(TReq requestObj, string authToken = "")
        {
            return GetResponse(ServerAddress, ApiVersion, requestObj, authToken);
        }

        public virtual TRes GetResponse(string serverAddress, string apiVersion, TReq requestObj, string authToken = "")
        {
            TRes resObj = GetDefaultResponseObject();
            string requestXml = string.Empty;

            var wreq = WebRequest.CreateHttp(GetRequestUrl(serverAddress, apiVersion, ApiMethod));
            wreq.Method = ApiMethodType;
            //wreq.Accept = "application/xml";
            wreq.Proxy = null;

            if (!string.IsNullOrWhiteSpace(authToken))
            {
                wreq.Headers["X-Tableau-Auth"] = authToken;
            }

            if (!IsRequestTypeTrivial && ApiMethodType == ApiMethodTypes.Post)
            {
                var strBuilder = new StringBuilder();
                var ns = new XmlSerializerNamespaces(new[] { XmlQualifiedName.Empty });
                var wrtrSettings = new XmlWriterSettings();
                wrtrSettings.Indent = false;
                wrtrSettings.OmitXmlDeclaration = true;
                using (var wrtr = XmlWriter.Create(strBuilder, wrtrSettings))
                {
                    var srlzr = new XmlSerializer(typeof(TReq));
                    srlzr.Serialize(wrtr, requestObj, ns);
                    requestXml = strBuilder.ToString();
                }

                var requestXmlBufArray = Encoding.UTF8.GetBytes(requestXml);

                wreq.ContentType = "text/xml";
                //var reqStream = await wreq.GetRequestStreamAsync();
                var reqStream = wreq.GetRequestStream();
                reqStream.Write(requestXmlBufArray, 0, requestXmlBufArray.Length);
            }

            try
            {
                //ServicePointManager.ServerCertificateValidationCallback += AcceptAllCertificates;
                BroadcastInfoPreExecute(serverAddress, apiVersion, ApiMethod, authToken);
                using (var wres = wreq.GetResponse())
                {
                    var ctype = wres.ContentType;
                    var clen = wres.ContentLength;

                    if (!IsResponseTypeTrivial)
                    {
                        using (var resStream = wres.GetResponseStream())
                        {
                            var desrlzr = new XmlSerializer(typeof(TRes));
                            resObj = desrlzr.Deserialize(resStream) as TRes;
                        }
                    }
                }
            }
            catch (WebException e)
            {
                if (resObj == default(TRes))
                {
                    BroadcastErrorDetails(serverAddress, apiVersion, ApiMethod, requestXml, authToken, e.ToString());
                    throw;
                }
                else
                {
                    var eObj = resObj as IResponse;
                    if (eObj == null)
                    {
                        BroadcastErrorDetails(serverAddress, apiVersion, ApiMethod, requestXml, authToken, e.ToString());
                        throw;
                    }
                    else
                    {
                        eObj.IsError = true;
                        if (e.Status == WebExceptionStatus.ProtocolError)
                        {
                            var eres = e.Response as HttpWebResponse;
                            using (var strm = new StreamReader(eres.GetResponseStream()))
                            {
                                var errDesrlzr = new XmlSerializer(typeof(ErrorResponse));
                                eObj.ErrorResponse = errDesrlzr.Deserialize(strm) as ErrorResponse;
                            }
                            eObj.ErrorResponse.ErrorDetails.HttpStatusCode = eres.StatusCode;
                            eObj.ErrorResponse.ErrorDetails.HttpStatusDescription = eres.StatusDescription;
                        }
                        if (eObj.ErrorResponse == null) eObj.ErrorResponse = new ErrorResponse();
                        eObj.ErrorResponse.ExceptionDetails = e.ToString();
                        BroadcastErrorDetails(serverAddress, apiVersion, ApiMethod, requestXml, authToken, eObj.ErrorResponse);
                    }
                }
            }
            catch (Exception e)
            {
                if (resObj == default(TRes))
                {
                    BroadcastErrorDetails(serverAddress, apiVersion, ApiMethod, requestXml, authToken, e.ToString());
                    throw;
                }
                else
                {
                    var eObj = resObj as IResponse;
                    if (eObj == null)
                    {
                        BroadcastErrorDetails(serverAddress, apiVersion, ApiMethod, requestXml, authToken, e.ToString());
                        throw;
                    }
                    else
                    {

                        eObj.IsError = true;
                        if (eObj.ErrorResponse == null) eObj.ErrorResponse = new ErrorResponse();
                        eObj.ErrorResponse.ExceptionDetails = e.ToString();
                        BroadcastErrorDetails(serverAddress, apiVersion, ApiMethod, requestXml, authToken, eObj.ErrorResponse);
                    }
                }
            }

            return resObj;
        }

        private void BroadcastInfoPreExecute(string serverAddress, string apiVersion, string apiMethod, string authToken)
        {
            var msg = $"{nameof(serverAddress)}: {serverAddress}" +
                $"{Environment.NewLine}{nameof(apiVersion)}: {apiVersion}" +
                $"{Environment.NewLine}{nameof(apiMethod)}: {apiMethod}" +
                $"{Environment.NewLine}{nameof(authToken)}: {authToken}";
            LogEventHandler(this, new TableauWrapperServiceLogEventArgs { Message = msg, LogType = "info" });
        }

        private void BroadcastErrorDetails(string serverAddress, string apiVersion, string apiMethod, string requestXml, string authToken, ErrorResponse errorResponse)
        {
            var msg = $"{nameof(serverAddress)}: {serverAddress}" +
                $"{Environment.NewLine}{nameof(apiVersion)}: {apiVersion}" +
                $"{Environment.NewLine}{nameof(apiMethod)}: {apiMethod}" +
                $"{Environment.NewLine}{nameof(requestXml)}: {requestXml}" +
                $"{Environment.NewLine}{nameof(authToken)}: {authToken}" +
                $"{Environment.NewLine}{nameof(errorResponse)}: {errorResponse.ToString()}";
            LogEventHandler(this, new TableauWrapperServiceLogEventArgs { Message = msg, LogType = "error"});
        }

        private void BroadcastErrorDetails(string serverAddress, string apiVersion, string apiMethod, string requestXml, string authToken, string excpmsg)
        {
            var msg = $"{nameof(serverAddress)}: {serverAddress}" +
                $"{Environment.NewLine}{nameof(apiVersion)}: {apiVersion}" +
                $"{Environment.NewLine}{nameof(apiMethod)}: {apiMethod}" +
                $"{Environment.NewLine}{nameof(requestXml)}: {requestXml}" +
                $"{Environment.NewLine}{nameof(authToken)}: {authToken}" +
                $"{Environment.NewLine}Exception.ToString(): {excpmsg}";
            LogEventHandler(this, new TableauWrapperServiceLogEventArgs { Message = msg, LogType = "error" });
        }

        private bool AcceptAllCertificates(object sender, X509Certificate certificate, X509Chain chain, SslPolicyErrors sslPolicyErrors)
        {
            return true;
        }

        private TRes GetDefaultResponseObject()
        {
            if (IsResponseTypeTrivial)
                return default(TRes);
            return Activator.CreateInstance<TRes>();
        }

        private TReq GetDefaultRequestObject()
        {
            if (IsRequestTypeTrivial)
                return default(TReq);
            return Activator.CreateInstance<TReq>();
        }
    }
}
