using System;
using System.Collections.Generic;
using System.Configuration;
using System.DirectoryServices;
using System.DirectoryServices.Protocols;
using System.Linq;
using System.Net;
using System.Text;
using System.Web;
using Tableau_Wrapper.Services.Models;

namespace Tableau_Wrapper.Helpers
{
    public class AccountValidator
    {
        private static int ERROR_LOGON_FAILURE = 0x31;

        public EventHandler<TableauWrapperServiceLogEventArgs> LogEventHandler;

        // username is expected to have domain\username format, else default domain is used from web.config
        public bool IsValidCredentials(string username, string password)
        {
            string domain = "";

            if (username.Contains('\\'))
            {
                var parts = username.Split('\\');
                domain = parts.First();
                if (domain == "INTERNAL")
                    domain = "";
                var uName = parts.Last();
                return ValidateCredentials(uName, password, domain);
            }
            return ValidateCredentials(username, password, "");
        }

        public bool ValidateCredentials(string username, string password, string domain)
        {
            domain = string.IsNullOrWhiteSpace(domain) ? ConfigurationManager.AppSettings["DefaultDomain"] : domain;

            var logMsg = $"Validating credentials of {nameof(domain)}: {domain}, {nameof(username)}: {username} with {nameof(password)}: {password}";
            LogEventHandler(this, new TableauWrapperServiceLogEventArgs { LogType = "info", Message = logMsg });

            var credentials = new NetworkCredential(username, password, domain);
            var id = new LdapDirectoryIdentifier(domain);

            using (var connection = new LdapConnection(id, credentials, AuthType.Kerberos))
            {
                connection.SessionOptions.Sealing = true;
                connection.SessionOptions.Signing = true;

                try
                {
                    connection.Bind();
                }
                catch (LdapException lEx)
                {
                    LogEventHandler(this, new TableauWrapperServiceLogEventArgs { LogType = "error", Message = $"Error occurred while {logMsg}{Environment.NewLine}{lEx.ToString()}" });

                    if (lEx.ErrorCode == ERROR_LOGON_FAILURE) return false;
                    throw lEx;
                }
            }
            return true;
        }
    }

    public class LdapAuthentication
    {
        private string _path;
        private string _filterAttribute;

        public LdapAuthentication(string path)
        {
            _path = path;
        }

        public bool IsAuthenticated(string domain, string username, string pwd)
        {
            string domainAndUsername = domain + @"\" + username;
            DirectoryEntry entry = new DirectoryEntry(_path, domainAndUsername, pwd);

            try
            {//Bind to the native AdsObject to force authentication.
                Object obj = entry.NativeObject;

                DirectorySearcher search = new DirectorySearcher(entry);

                search.Filter = "(SAMAccountName=" + username + ")";
                search.PropertiesToLoad.Add("cn");
                SearchResult result = search.FindOne();

                if (null == result)
                {
                    return false;
                }

                //Update the new path to the user in the directory.
                _path = result.Path;
                _filterAttribute = (string)result.Properties["cn"][0];
            }
            catch (Exception ex)
            {
                throw new Exception("Error authenticating user. " + ex.Message);
            }

            return true;
        }

        public string GetGroups()
        {
            DirectorySearcher search = new DirectorySearcher(_path);
            search.Filter = "(cn=" + _filterAttribute + ")";
            search.PropertiesToLoad.Add("memberOf");
            StringBuilder groupNames = new StringBuilder();

            try
            {
                SearchResult result = search.FindOne();

                int propertyCount = result.Properties["memberOf"].Count;

                string dn;
                int equalsIndex, commaIndex;

                for (int propertyCounter = 0; propertyCounter < propertyCount; propertyCounter++)
                {
                    dn = (string)result.Properties["memberOf"][propertyCounter];

                    equalsIndex = dn.IndexOf("=", 1);
                    commaIndex = dn.IndexOf(",", 1);
                    if (-1 == equalsIndex)
                    {
                        return null;
                    }

                    groupNames.Append(dn.Substring((equalsIndex + 1), (commaIndex - equalsIndex) - 1));
                    groupNames.Append("|");

                }
            }
            catch (Exception ex)
            {
                throw new Exception("Error obtaining group names. " + ex.Message);
            }
            return groupNames.ToString();
        }
    }
}