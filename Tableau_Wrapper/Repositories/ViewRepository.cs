using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using Tableau_Wrapper.Services.Models.TableauServer;

namespace Tableau_Wrapper.Repositories
{
    public class ViewRepository:BaseRepository<Views>, IViewRepository
    {
        protected override Views GetAllFromSource()
        {
            return base.GetAllFromSource();
        }
    }

    public interface IViewRepository : IRepository<Views>
    {
    }
}