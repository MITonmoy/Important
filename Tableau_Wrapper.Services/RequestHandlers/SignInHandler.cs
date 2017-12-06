using Tableau_Wrapper.Services.Models;
using Tableau_Wrapper.Services.Models.TableauServer;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Tableau_Wrapper.Services.RequestHandlers
{
    public class SignInHandler : RequestHandlerBase<SigninRequest, TsSigninResponse>
    {
        public override string ApiMethod { get { return "auth/signin"; } }

        public override string ApiMethodType { get { return ApiMethodTypes.Post; } }

        public string SiteName { get; internal set; }
        public string Password { get; internal set; }
        public string Username { get; internal set; }

        public SigninRequest PrepareRequest()
        {
            var site = new TsSite { ContentUrl = SiteName };
            var cred = new RqCredentials { Username = Username, Password = Password, Site = site };
            return new SigninRequest { Credentials = cred };
        }

        public override Func<SigninRequest> GetPreparedRequest { get { return PrepareRequest; } }

    }
}
