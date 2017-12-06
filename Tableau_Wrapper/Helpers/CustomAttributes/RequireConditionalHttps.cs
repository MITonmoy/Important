using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Tableau_Wrapper.Helpers.CustomAttributes
{
    public class RequireConditionalHttps : RequireHttpsAttribute
    {
        public override void OnAuthorization(AuthorizationContext filterContext)
        {
            if (filterContext == null)
                throw new ArgumentNullException(nameof(filterContext));

            if (filterContext.HttpContext != null && !filterContext.HttpContext.Request.IsSecureConnection) return;

            base.OnAuthorization(filterContext);
        }
    }
}