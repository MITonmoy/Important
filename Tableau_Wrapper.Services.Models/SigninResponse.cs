using System;
using Tableau_Wrapper.Services.Models.Helpers;
using Tableau_Wrapper.Services.Models.TableauServer;

namespace Tableau_Wrapper.Services.Models
{
    public class SigninResponse
    {
        public string Username { get; set; }
        public string TableauUserId { get; set; }
        public string TableauToken { get; set; }
        public string TableauSiteId { get; set; }
        public string TableauSiteName { get; set; }
        public TsSigninResponse TsResponse { get; set; }
        public string TrustedToken { get; set; }

        public SigninResponse() { }
        public SigninResponse(TsSigninResponse resObj, string username)
        {
            Username = username;
            TableauToken = resObj.Credentials?.Token;
            TableauSiteId = resObj.Credentials?.Site?.Id;
            TableauSiteName = resObj.Credentials?.Site?.ContentUrl;
            TableauUserId = resObj.Credentials?.User?.Id;
            TsResponse = resObj;
        }

        public override string ToString()
        {
            string result = $"{nameof(Username)}: {Username.ToSafeString()}" +
                $"{Environment.NewLine}{nameof(TableauUserId)}: {TableauUserId.ToSafeString()}" +
                $"{Environment.NewLine}{nameof(TableauToken)}: {TableauToken.ToSafeString()}" +
                $"{Environment.NewLine}{nameof(TableauSiteId)}: {TableauSiteId.ToSafeString()}" +
                $"{Environment.NewLine}{nameof(TableauSiteName)}: {TableauSiteName.ToSafeString()}" +
                $"{Environment.NewLine}{nameof(TrustedToken)}: {TrustedToken.ToSafeString()}";

            if (TsResponse.ErrorResponse != null)
                result += $"{Environment.NewLine}Error - {Environment.NewLine}\t{TsResponse.ErrorResponse.ToString()}";

            return result;
        }
    }
}