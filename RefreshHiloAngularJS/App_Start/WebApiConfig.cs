using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;

namespace RefreshHiloAngularJS
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            config.MapHttpAttributeRoutes();

            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "data/{controller}/{id}",
                defaults: new { id = RouteParameter.Optional }
            );
        }
    }
}
