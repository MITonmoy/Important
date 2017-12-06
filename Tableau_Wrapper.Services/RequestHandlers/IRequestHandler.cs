using System.Threading.Tasks;

namespace Tableau_Wrapper.Services.RequestHandlers
{
    public interface IRequestHandler<TReq, TRes>
    {
        string ServerAddress { get; set; }
        string ApiVersion { get; set; }
        string ApiMethod { get; }
        string ApiMethodType { get; }
        TRes GetResponse(string authToken);
        TRes GetResponse(TReq requestObj, string authToken);
        TRes GetResponse(string serverAddress, string apiVersion, TReq requestObj, string authToken);
    }
}
