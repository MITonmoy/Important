import { inject } from "aurelia-framework";
import { HttpClient } from "aurelia-fetch-client";
import { BaseDataRepository } from "./baseRepository";
import "whatwg-fetch";

@inject(HttpClient)
export class VizTokenRepository {
    private _http: HttpClient;

    public vizToken: string;

    constructor(httpClient: HttpClient) {
        this._http = httpClient;
    }

    public getData(userName: string, siteName: string): Promise<string> {
        // this.siteId = siteId;
        // this.siteName = siteName;
        let opt: RequestInit = {
            credentials: "same-origin"
        };

        let prms: Promise<string> = new Promise<string>((res, rej) => {
            this._http.fetch(this.getUrl(userName, siteName), opt)
                .then(rsp => {
                    if (!rsp.ok) { throw new Error(`Status: ${rsp.status}, Details: ${rsp.statusText}`); }
                    return rsp.text();
                })
                .then(data => {
                    this.vizToken = data;
                    res(this.vizToken);
                })
                .catch(err => {
                    console.log(`(error) from vizTokenRepo.getData: ${JSON.stringify(err)}`);
                    rej(err);
                });
        });

        return prms;
    }

    public getPptDlguid(contentUrl: string): Promise<string> {
        let url: string = `Home/GetPpt?viewContentUrl=${contentUrl}`;
        let opt: RequestInit = { credentials: "same-origin" };

        let prms: Promise<string> = new Promise((res, rej) => {
            this._http.fetch(url, opt)
                .then(rsp => {
                    if (!rsp.ok) { throw new Error(`Status: ${rsp.status}, Details: ${rsp.statusText}`); }
                    res(rsp.text());
                })
                .catch(err => rej(err));
        });

        return prms;
    }

    public reset(): void {
        this.vizToken = null;
    }

    private getUrl(userName: string, siteName: string): string {
        return `Home/GetVizToken?userName=${encodeURIComponent(userName)}&siteName=${encodeURIComponent(siteName)}`;
    }

}