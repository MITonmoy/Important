using System;
using Tableau_Wrapper.Services.Models;

namespace Tableau_Wrapper.Services.RequestHandlers
{
    public class SignoutHandler : RequestHandlerBase<string, string>
    {
        public override string ApiMethod { get { return "auth/signout"; } }

        public override string ApiMethodType { get { return ApiMethodTypes.Post; } }
    }
}