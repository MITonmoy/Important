using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Tableau_Wrapper.Services.Models;
using Tableau_Wrapper.Services.Models.TableauServer;

namespace Tableau_Wrapper.Services.RequestHandlers
{
    public class SchedulesHandler : RequestHandlerBase<string, Schedules>
    {
        public override string ApiMethod { get { return "schedules"; } }

        public override string ApiMethodType { get { return ApiMethodTypes.Get; } }
    }
}
