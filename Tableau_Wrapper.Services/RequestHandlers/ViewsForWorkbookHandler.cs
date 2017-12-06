using Tableau_Wrapper.Services.Models;
using Tableau_Wrapper.Services.Models.TableauServer;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Tableau_Wrapper.Services.RequestHandlers
{
    public class ViewsForWorkbookHandler : RequestHandlerBase<string, Views>
    {
        public string SiteId { get; set; }
        public string WorkbookId { get; set; }
        public override string ApiMethod { get { return $"sites/{SiteId}/workbooks/{WorkbookId}/views"; } }
        public override string ApiMethodType { get { return ApiMethodTypes.Get; } }
    }
}
