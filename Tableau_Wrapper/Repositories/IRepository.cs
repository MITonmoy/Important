using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;

namespace Tableau_Wrapper.Repositories
{
    public interface IRepository<T> : IDisposable
    {
        string AppPhysicalRoot { get; set; }
        string UserId { get; set; }
        string UserName { get; set; }
        string UserToken { get; set; }
        T Get();
        //Task<T> Get();
        bool Save();
    }
}