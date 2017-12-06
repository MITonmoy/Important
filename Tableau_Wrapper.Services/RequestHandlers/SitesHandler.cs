using Tableau_Wrapper.Services.Models;
using Tableau_Wrapper.Services.Models.TableauServer;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Tableau_Wrapper.Services.RequestHandlers
{
    public class SitesHandler : RequestHandlerBase<string, Sites>
    {
        public override string ApiMethod { get { return "sites"; } }

        public override string ApiMethodType { get { return ApiMethodTypes.Get; } }
    }
}
