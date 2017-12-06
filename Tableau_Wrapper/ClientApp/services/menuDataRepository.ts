import { inject } from "aurelia-framework";
import { HttpClient } from "aurelia-fetch-client";
import { MenuData, Category, Workbook } from "../models/menuData";
import "whatwg-fetch";

@inject(HttpClient)
export class MenuDataRepository {
    private _http: HttpClient;

    public menuData: MenuData | null;

    constructor(httpClient: HttpClient) {
        this._http = httpClient;
    }

    public getData(): Promise<MenuData> {
        let prms: Promise<MenuData> = new Promise<MenuData>((resolve, reject) => {
            if (!this.menuData) {
                this._http.fetch("Home/GetMenuData", { credentials: "same-origin" })
                    .then(respone => respone.json() as Promise<MenuData>)
                    .then(data => {
                        let tempData: MenuData = data;
                        tempData.Categories.forEach((c: Category) => {
                            c.Workbooks.forEach((w: Workbook) => {
                                w.PreviewImage = "Content/Images/WorkbookPreviewImages/site-" + tempData.SiteId +
                                "/workbook-" + w.Id + ".png";
                            });
                        });
                        this.menuData = tempData;
                        resolve(this.menuData);
                    });
            } else {
                resolve(this.menuData);
            }
        });

        return prms;
    }

    public refresh(): void {
        this.menuData = null;
    }
}