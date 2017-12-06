using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Tableau_Wrapper.Models
{
    public static class AppConstants
    {
        public static string TsServerUrlKey { get { return "ServerUrl"; } }
        public static string TsSiteIdSessionKey { get { return "siteid"; } }
        public static string TsSiteNameSessionKey { get { return "sitename"; } }
        public static string TsTokenSessionKey { get { return "token"; } }
        public static string TsTrustedTokenSessionKey { get { return "trustedtoken"; } }
        public static string TsTokenCookieKey { get { return "workgroup_session_id"; } }
        public static string TsUserIdSessionKey { get { return "userid"; } }
        public static string TsUsernameSessionKey { get { return "username"; } }
        public static string CurrentLoginDataSessionKey { get { return "_curLoginData"; } }
        public static string FavoriteCategoryName { get { return "Favourites"; } }
        public static string UncategorizedCategoryName { get { return "Uncategorized"; } }
        public static string PptTemplateLocation { get { return @"~/Resources/Templates/PPT/PresentationTemplate.xml"; } }
        public static string PptExportOutputLocation { get { return @"~/Resources/ExportOutput/PPT"; } }

        public static string RecreateCacheManifestKey { get { return @"RecreateCacheManifest"; } }
        public static string TopLevelMenuSettingsKey { get { return @"TopLevelMenu"; } }
        public static string TreeViewMenuSettingsKey { get { return @"TreeViewMenu"; } }

        public static ResourceLocationConstants Resources = new ResourceLocationConstants();
    }

    public class ResourceLocationConstants
    {
        public string IndexViewModelsLocation { get { return "~/Resources/IndexViewModels"; } }
    }
}
