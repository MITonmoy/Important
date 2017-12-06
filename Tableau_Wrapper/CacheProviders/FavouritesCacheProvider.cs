using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Tableau_Wrapper.Models;

namespace Tableau_Wrapper.CacheProviders
{
    public class FavouritesCacheProvider : XmlFileCacheProvider<UserFavLists>
    {
        public FavouritesCacheProvider()
        {
            FilePrefix = "FavList";
        }
    }
}