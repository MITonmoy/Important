using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Tableau_Wrapper.Services.Models.TableauServer
{
    public interface IResponse
    {
        bool IsError { get; set; }
        ErrorResponse ErrorResponse { get; set; }
    }
}
