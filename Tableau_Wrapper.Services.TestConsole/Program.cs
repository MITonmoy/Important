using System;
using System.Collections.Generic;
using System.Configuration;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml;
using System.Xml.Linq;
using System.Xml.Serialization;
using Tableau_Wrapper.Models;
using Tableau_Wrapper.Repositories;
using Tableau_Wrapper.Services;
using Tableau_Wrapper.Services.Models;
using Tableau_Wrapper.Services.Models.TableauServer;

namespace Tableau_Wrapper.Services.TestConsole
{
    class Program
    {
        static TableauSettings settings;
        static TableauService _tService;

        static void Main(string[] args)
        {
            settings = new TableauSettings();
            _tService = new TableauService(settings.ServerUrl, settings.ApiVersion);

            try
            {
                //CallAsync(TestImageExportForWorkbook());
                //TableauServiceTest();
                //GenerateWorkbookPreviewImages();
                TestNewRepository();
            }
            catch (Exception e)
            {
                Console.WriteLine($"Error Occurred.\n{e.ToString()}");
            }

            Console.WriteLine("Press any key to end program.");
            Console.ReadKey();
        }

        private static void TestNewRepository()
        {
            throw new NotImplementedException();
        }

        private static bool GenerateWorkbookPreviewImages()
        {
            var workbookImagesFolderPath = @".\WorkbookImages";
            if (Directory.Exists(workbookImagesFolderPath))
                Directory.Delete(workbookImagesFolderPath, true);

            var workbookImagesFolder = Directory.CreateDirectory(workbookImagesFolderPath);

            var adminResp = _tService.TrySignin(settings.AdminUser, settings.AdminPassword);
            Console.WriteLine($"User Id: {adminResp.TableauUserId}");
            var fullSiteList = _tService.TryGetSites(adminResp.TableauToken);

            foreach (var site in fullSiteList.ItemList)
            {
                var loginResp = _tService.TrySignin(settings.AdminUser, settings.AdminPassword, site.ContentUrl);
                if (loginResp.TsResponse.IsError)
                {
                    Console.WriteLine($"Login failed for site name: {site.Name}, Id: {site.Id}");
                    Console.WriteLine();
                    Console.WriteLine("============================================================");
                    Console.WriteLine();
                    continue;
                }

                var workbooks = _tService.TryGetWorkbooks(site.Id, loginResp.TableauToken);

                if (workbooks == null || workbooks.ItemList == null || workbooks.ItemList.Count < 1)
                {
                    Console.WriteLine($"No workbook list for site name: {site.Name}, Id: {site.Id}");
                    Console.WriteLine();
                    Console.WriteLine("============================================================");
                    Console.WriteLine();
                    continue;
                }

                var siteFolderPath = $"{workbookImagesFolder.FullName}\\site-{site.Id}";

                if (Directory.Exists(siteFolderPath))
                    Directory.Delete(siteFolderPath, true);

                var siteFolder = Directory.CreateDirectory(siteFolderPath);

                Console.WriteLine($"Current Site Name: {site.Name}, Id: {site.Id}\nToken: {loginResp.TableauToken}\nLocation: {siteFolder.FullName}");

                foreach (var workbook in workbooks.ItemList)
                {
                    var workbookPreviewImage = _tService.TryGetPreviewImageForWorkbook(site.Id, workbook.Id, loginResp.TableauToken);

                    using (var writer = File.Open($"{siteFolder.FullName}\\workbook-{workbook.Id}.png", FileMode.Create))
                    {
                        writer.Write(workbookPreviewImage, 0, workbookPreviewImage.Length);
                        var fileName = writer.Name.Split('\\').Last();
                        Console.WriteLine($"Workbook Name: {workbook.Name}, Filename: {fileName}");
                    }
                }

                var resp = _tService.TrySignout(loginResp.TableauToken);

                Console.WriteLine();
                Console.WriteLine("============================================================");
                Console.WriteLine();
            }

            return false;
        }

        /*
        private static string ImageToBase64(Image image, System.Drawing.Imaging.ImageFormat format)
        {
           using (MemoryStream ms = new MemoryStream())
           {
               // Convert Image to byte[]
               image.Save(ms, format);
               byte[] imageBytes = ms.ToArray();

               // Convert byte[] to Base64 String
               string base64String = Convert.ToBase64String(imageBytes);
               return base64String;
           }
        }
        */
        private static bool TestImageExportForView()
        {
            var loginResp = GetLoginResponse("MIbnoon", "TonM@08765oy");
            var viewContentUrl = GetViewName();
            var viewName = viewContentUrl.Split('/').Last();
            var result = _tService.TryGetImageExportForView(loginResp.TableauSiteName, viewContentUrl, loginResp.TableauToken);

            using (var writer = File.Open($"{viewName}.png", FileMode.Create))
            {
                writer.Write(result, 0, result.Length);
            }

            var base64String = Convert.ToBase64String(result);

            var pptDoc = new XmlDocument();
            pptDoc.Load(@"C:\Personal\Projects\MMA\RnD\PortalMvc_6\Tableau_Wrapper\Tableau_Wrapper\Resources\Templates\PPT\PresentationTemplate.xml");
            var docRoot = pptDoc.DocumentElement;

            var nsmgr = new XmlNamespaceManager(pptDoc.NameTable);
            nsmgr.AddNamespace("pkg", docRoot.NamespaceURI);
            var nodes = docRoot.SelectNodes(@"/pkg:package/pkg:part[not(contains(@pkg:name, 'thumbnail'))]/pkg:binaryData", nsmgr);

            if (nodes.Count < 1) return false;

            var imageNode = nodes[0];

            imageNode.InnerText = base64String;

            pptDoc.Save($"C:\\Personal\\Projects\\MMA\\RnD\\PortalMvc_6\\Tableau_Wrapper\\Tableau_Wrapper\\Resources\\Templates\\PPT\\Output\\{viewName}.xml");

            return false;
        }

        private static string GetViewName()
        {
            Console.WriteLine($"Enter view name (default is \"MMAGOLD-v3/sheets/Claim-2\"):");
            var name = Console.ReadLine();

            return string.IsNullOrWhiteSpace(name) ? "MMAGOLD-v3/sheets/Claim-2" : name;
        }

        private static bool TestIndexViewModelRepository()
        {
            /*var loginResp = GetLoginResponse("MIbnoon", "TonM@08765oy");

            IIndexViewModelRepository repo = new IndexViewModelRepository
                (
                cacheProvider: new XmlFileCacheProvider<IndexViewModel>()
                    //userId: loginResp.TableauUserId,
                    //userName: loginResp.Username,
                    //userToken: loginResp.TableauToken,
                    //siteId: "d02af942-a153-43aa-8f1c-d7b3346e527f",
                    //siteName: "MMAGold",
                    //cacheFolderLocation: @"C:\Personal\Projects\MMA\RnD\PortalMvc_6\Tableau_Wrapper\Tableau_Wrapper\Resources\IndexViewModels",
                    //categoriesCacheFolderLocation: @"C:\Personal\Projects\MMA\RnD\PortalMvc_6\Tableau_Wrapper\Tableau_Wrapper\Resources\Categories",
                    //favouritesCacheFolderLocation: @"C:\Personal\Projects\MMA\RnD\PortalMvc_6\Tableau_Wrapper\Tableau_Wrapper\Resources\UserFavLists"
                );

            //repo.SiteId = loginResp.TableauSiteId;
            //repo.SiteName = loginResp.TableauSiteName;

            var watch = new Stopwatch();

            while (true)
            {
                watch.Start();
                var result = repo.Get();
                Console.WriteLine($"Run Time = {watch.Elapsed.Milliseconds / 1000.0} seconds");
                watch.Reset();
                Console.Write("Run again (y/n) ? ");
                var ip = Console.ReadLine();

                if (ip.ToLowerInvariant() == "n")
                    break;
            }*/
            return false;
        }

        private static SigninResponse GetLoginResponse(string username = "", string password = "", string siteName = "MMAGold")
        {

            if (string.IsNullOrWhiteSpace(username) || string.IsNullOrWhiteSpace(password))
            {
                Console.WriteLine("Enter Username: ");
                username = Console.ReadLine();
                Console.WriteLine("Enter Password: ");
                password = Console.ReadLine();
            }

            Console.WriteLine("Begin execution.");
            //var loginResp = CallAsync(_tService.TrySignin(username, password, siteName));
            var loginResp = _tService.TrySignin(username, password, siteName);
            var eObj = loginResp.TsResponse as IResponse;

            if (eObj.IsError)
                throw new Exception(eObj.ErrorResponse.ExceptionDetails);

            return loginResp;
        }

        private static void TestXmlOverridenSerialization()
        {
            foreach (var filepath in Directory.EnumerateFiles(ConfigurationManager.AppSettings["ConvertedFiles"]))
            {
                UserCategories2 cats = null;

                Console.WriteLine($"Reading File: {filepath}");
                using (var reader = File.Open(filepath, FileMode.Open, FileAccess.Read))
                {
                    var dsrlzr = new XmlSerializer(typeof(UserCategories2));
                    cats = dsrlzr.Deserialize(reader) as UserCategories2;
                }

                var srType = typeof(Workbook2);
                var xOver = new XmlAttributeOverrides();
                var ignoreAttrs = new XmlAttributes();
                ignoreAttrs.XmlIgnore = true;

                //xOver.Add(srType, $"{nameof(UserCategories2.SiteFavsList)}", ignoreAttrs);
                xOver.Add(srType, $"{nameof(Workbook2.ShowTabs)}", ignoreAttrs);
                xOver.Add(srType, $"{nameof(Workbook2.Size)}", ignoreAttrs);
                xOver.Add(srType, $"{nameof(Workbook2.Size)}", ignoreAttrs);
                xOver.Add(srType, $"{nameof(Workbook2.Tags)}", ignoreAttrs);
                //xOver.Add(srType, $"{nameof(UserCategories2.SiteFavsList)}.{nameof(SiteCategories.Categories)}.{nameof(Category2.Workbooks)}.{nameof(Workbook2.Project)}", ignoreAttrs);
                //xOver.Add(srType, $"{nameof(UserCategories2.SiteFavsList)}.{nameof(SiteCategories.Categories)}.{nameof(Category2.Workbooks)}.{nameof(Workbook2.Owner)}", ignoreAttrs);

                var convertedFilepath = ConfigurationManager.AppSettings["ConversionFolder"] + "\\Testfiles\\" + filepath.Split('\\').Last();
                Console.WriteLine($"Writing to file: {convertedFilepath}");
                using (var writer = File.Open(convertedFilepath, FileMode.OpenOrCreate, FileAccess.Write))
                {
                    var srlzr = new XmlSerializer(typeof(UserCategories2), xOver);
                    srlzr.Serialize(writer, cats);
                }
            }
        }

        private static void ConvertXml()
        {
            foreach (var filepath in Directory.EnumerateFiles(ConfigurationManager.AppSettings["ConversionFolder"]))
            {
                UserCategories cats = null;
                UserCategories2 newcats = null;

                Console.WriteLine($"Reading File: {filepath}");
                using (var reader = File.Open(filepath, FileMode.Open, FileAccess.Read))
                {
                    var dsrlzr = new XmlSerializer(typeof(UserCategories));
                    cats = dsrlzr.Deserialize(reader) as UserCategories;
                }

                newcats = new UserCategories2
                {
                    UserId = cats.UserId,
                    UserName = cats.UserName,
                    SiteFavsList = cats.SiteCategoriesList
                        .Select(x => new SiteCategories
                        {
                            SiteId = x.SiteId,
                            SiteName = x.SiteName,
                            Categories = x.Categories
                                .Select(y => new Category2
                                {
                                    Name = y.Name,
                                    IncludeAllFavs = y.IncludeAllFavs,
                                    IncludeAllWorkbooks = y.IncludeAllWorkbooks,
                                    Workbooks = y.Workbooks.Select(z => new Workbook2
                                    {
                                        ContentUrl = z.ContentUrl,
                                        CreatedAt = z.CreatedAt,
                                        Id = z.Id,
                                        IsFavourite = z.IsFavourite,
                                        Name = z.Name,
                                        Owner = z.Owner,
                                        Project = z.Project,
                                        ShowTabs = z.ShowTabs,
                                        Size = z.Size,
                                        Tags = z.Tags,
                                        UpdatedAt = z.UpdatedAt
                                    }).ToList()
                                }).ToList()
                        }
                        ).ToList()
                };

                var convertedFilepath = ConfigurationManager.AppSettings["ConvertedFiles"] + "\\" + filepath.Split('\\').Last();
                Console.WriteLine($"Writing to file: {convertedFilepath}");
                using (var writer = File.Open(convertedFilepath, FileMode.OpenOrCreate, FileAccess.Write))
                {
                    var srlzr = new XmlSerializer(typeof(UserCategories2));
                    srlzr.Serialize(writer, newcats);
                }
            }
        }

        private static void TableauServiceTest()
        {
            try
            {
                while (true)
                {
                    RunTest(settings, _tService);
                    Console.Write("Run again (y/n) ? ");
                    var ip = Console.ReadLine();

                    if (ip.ToLowerInvariant() == "n")
                        break;
                }
            }
            catch (Exception e)
            {
                Console.WriteLine(e.ToString());
            }
        }

        private static void RunTest(TableauSettings settings, TableauService _tService)
        {
            string username, password;

            Console.Write("Enter Username: ");
            username = Console.ReadLine();
            Console.Write("Enter Password: ");
            password = Console.ReadLine();

            //var adminResp = CallAsync(_tService.TrySignin(settings.AdminUser, settings.AdminPassword, "MMAGold"));
            //var adminResp = CallAsync(_tService.TrySignin(settings.AdminUser, settings.AdminPassword));
            var adminResp = _tService.TrySignin(settings.AdminUser, settings.AdminPassword);
            Console.WriteLine($"Returned Admin User Id: {adminResp.TableauUserId}");

            if (adminResp.TableauToken == null || string.IsNullOrWhiteSpace(adminResp.TableauToken))
            {
                Console.WriteLine($"Invalid Admin token returned. Program cannot continue.");
                if (adminResp.TsResponse.IsError)
                    Console.WriteLine(adminResp.TsResponse.ErrorResponse.ExceptionDetails);
                return;
            }

            //var fullSiteList = CallAsync(_tService.TryGetSites(adminResp.TableauToken));
            var fullSiteList = _tService.TryGetSites(adminResp.TableauToken);
            Console.WriteLine("Site list found -");
            foreach (var site in fullSiteList.ItemList)
            {
                Console.WriteLine("======================================================");
                Console.WriteLine($"Checking for site: {site.Name}, ContentUrl: {site.ContentUrl}\n Id: {site.Id}");
                //var loginResp = CallAsync(_tService.TrySignin(username, password, site.ContentUrl));
                var loginResp = _tService.TrySignin(username, password, site.ContentUrl);
                var eObj = loginResp.TsResponse as IResponse;
                if (eObj.IsError)
                {
                    Console.WriteLine($"Failed. Http: {eObj.ErrorResponse.ErrorDetails.HttpStatusCode}, Code: {eObj.ErrorResponse.ErrorDetails.Code}");
                    Console.WriteLine($"Summary: {eObj.ErrorResponse.ErrorDetails.Summary}");
                    Console.WriteLine($"Details: {eObj.ErrorResponse.ErrorDetails.Details}");
                }
                else
                {
                    Console.WriteLine($"Success. User Id: {loginResp.TableauUserId}");
                    Console.WriteLine($"Token: {loginResp.TableauToken}");
                }
            }
        }

        static T CallAsync<T>(Task<T> asyncTask)
        {
            asyncTask.Wait();
            return asyncTask.Result;
        }
    }
}
