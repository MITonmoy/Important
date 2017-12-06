using Tableau_Wrapper.Services.Models;
using Tableau_Wrapper.Services.Models.TableauServer;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Tableau_Wrapper.Services.RequestHandlers
{
    public class SwitchSiteHandler : RequestHandlerBase<SwitchSiteRequest, TsSigninResponse>
    {
        public override string ApiMethod { get { return "auth/switchSite"; } }

        public override string ApiMethodType { get { return ApiMethodTypes.Post; } }

    }
}
