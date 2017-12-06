using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Tableau_Wrapper.Services.Models;
using Tableau_Wrapper.Services.Models.TableauServer;

namespace Tableau_Wrapper.Services.RequestHandlers
{
    public class SaveSubscriptionHandler : RequestHandlerBase<SubscriptionRequest, string>
    {
        public string SiteId { get; internal set; }
        public override string ApiMethod { get { return $"sites/{SiteId}/subscriptions"; } }
        public override string ApiMethodType { get { return ApiMethodTypes.Post; } }
    }
}
