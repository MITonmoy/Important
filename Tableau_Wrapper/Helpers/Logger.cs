using log4net;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Tableau_Wrapper.Helpers
{
    public static class Logger
    {
        private static ILog _log = null;

        private static ILog GetInstance()
        {
            if (_log == null)
            {
                _log = LogManager.GetLogger(System.Reflection.MethodBase.GetCurrentMethod().DeclaringType);
                log4net.Config.XmlConfigurator.Configure();
            }

            return _log;
        }

        public static void Error(object message)
        {
            GetInstance().Error(message);
        }
        public static void Error(object message, Exception exception)
        {
            GetInstance().Error(message, exception);
        }
        public static void Info(object message)
        {
            GetInstance().Info(message);
        }
        public static void Info(object message, Exception exception)
        {
            GetInstance().Info(message, exception);
        }
        public static void Warn(object message)
        {
            GetInstance().Warn(message);
        }
        public static void Warn(object message, Exception exception)
        {
            GetInstance().Warn(message, exception);
        }
        public static void Fatal(object message)
        {
            GetInstance().Fatal(message);
        }
        public static void Fatal(object message, Exception exception)
        {
            GetInstance().Fatal(message, exception);

        }
        public static void Debug(object message)
        {
            GetInstance().Debug(message);
        }
        public static void Debug(object message, Exception exception)
        {
            GetInstance().Debug(message, exception);
        }
        public static bool IsDebugEnabled()
        {
            return GetInstance().IsDebugEnabled;
        }
        public static bool IsErrorEnabled()
        {
            return GetInstance().IsErrorEnabled;
        }
        public static bool IsFatalEnabled()
        {
            return GetInstance().IsFatalEnabled;
        }
        public static bool IsInfoEnabled()
        {
            return GetInstance().IsInfoEnabled;
        }
        public static bool IsWarnEnabled()
        {
            return GetInstance().IsWarnEnabled;
        }
    }
}