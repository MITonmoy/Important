using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Tableau_Wrapper.Services.Models
{
    public class TableauWrapperServiceLogEventArgs : EventArgs
    {
        public string Message { get; set; }
        public string LogType { get; set; }
    }
}
