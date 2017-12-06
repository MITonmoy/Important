import { RouteConfig, NavigationInstruction } from "aurelia-router";
import { View, inject, autoinject } from "aurelia-framework";
import { MenuData, TsView } from "../../models/menuData";
import { SiteStateInfo } from "../../models/siteStateInfo";
import { EventAggregator } from "aurelia-event-aggregator";
import { VizTokenRepository } from "../../services/vizTokenRepository";
import { AppLogger } from "../../helpers/app-logger";
import { PublishEvents } from "../../helpers/app-constants";

declare var tableauSoftware: any;

@autoinject
export class TableauDisplay {
    private _ctx: SiteStateInfo;

    public mainViz: any;
    public mainVizId: string = "tableauviz";
    public workbook: any;
    public activesheet: any;
    public tabSoft: any;
    public currentVizUrl: string;

    constructor(private _ea: EventAggregator, private _vtRpo: VizTokenRepository,
        private _lg: AppLogger, private _pev: PublishEvents) {
        this._lg.log("tableaudisplay constructed");
        this.subscribeEvents();
    }

    private subscribeEvents() {
        this._ea.subscribe(this._pev.VizLoadEvent, (v: TsView) => this.initNewViz(v));
        this._ea.subscribe(this._pev.DownloadPdfEvent, (l: any) => this.downloadPdf());
        this._ea.subscribe(this._pev.DownloadPptEvent, (l: any) => this.downloadPpt());
        this._ea.subscribe(this._pev.DownloadExcelEvent, (l: any) => this.downloadExcel());
        this._ea.subscribe(this._pev.DownloadImageEvent, (l: any) => this.downloadImage());
    }

    activate(model: MenuData): void {
        this._ctx = <SiteStateInfo>model;
        var v: TsView = model.Categories[0].Workbooks[0].Views[0];
        this.initNewViz(v);
        this._lg.log(`ServerUrl: ${this._ctx.ServerUrl}`);
    }

    created(owningView: View, myView: View): void {
        this._lg.log("tableaudisplay created");
    }

    attached(): void {
        this._lg.log("tableaudisplay attached");
    }

    initNewViz(v: TsView): void {
        this.getVizUrl(this._ctx.ServerUrl, this._ctx.UserName, this._ctx.SiteName, v.ContentUrl)
            .then(url => {
                this._lg.log(`Loading new Viz. URL: ${url}`);
                this.currentVizUrl = url;
                this.initializeViz(url);
            }).catch(err => this._lg.log(`Error from initNewViz: ${JSON.stringify(err)}`));
    }

    getVizUrl(serverUrl: string, userName: string, siteName: string, contentUrl: string): Promise<string> {
        let prm: Promise<string> = new Promise<string>((res, rej) => {
            this._vtRpo.getData(userName, siteName)
                .then(token => res(`${serverUrl}trusted/${token}/t/${siteName}/views/${contentUrl.replace("/sheets/", "/")}`))
                .catch(err => rej(err));
        });
        return prm;
    }

    initializeViz(sContentURL: string): void {
        if (!sContentURL) { return; }
        this._lg.log(`sContentURL: ${sContentURL}`);
        var placeholderDiv: HTMLElement | null = document.getElementById(this.mainVizId);
        var url: string = sContentURL;

        this._lg.log(`placeholderDiv: ${JSON.stringify(placeholderDiv)}`);

        if (placeholderDiv != null && placeholderDiv.parentElement != null) {
            this._lg.log("initializing viz");
            this._lg.log(`setting width + 30: ${placeholderDiv.clientWidth}`);
            this._lg.log(`setting width + 5: ${placeholderDiv.clientHeight}`);
            var options: any = {
                width: placeholderDiv.clientWidth - 30,
                height: placeholderDiv.clientHeight - 5,
                hideTabs: true,
                hideToolbar: true,
                onFirstInteractive: () => {
                    this._lg.log("inside onFirstInteractive");
                    this.workbook = this.mainViz.getWorkbook();
                    this.activesheet = this.workbook.getActiveSheet();
                    // logToServer("Visualization has become interactive.");
                    // dlAnimation(false);
                    /*
                    loadFilters();
                    showDownloadOptions();
                    */
                    // logToServer("Finished onFirstInteractive.");
                }
            };
            /*
                $.each(filterStates, function (idx, item) {
                    if (item.values.length < 1) { return; }
                    if (item.values.length == 1) {
                        options[item.name] = item.values[0]
                    } else {
                        options[item.name] = item.values
                    }
                })
            */
            if (this.mainViz !== undefined) {
                this.mainViz.dispose();
            }

            placeholderDiv.innerHTML = "";
            // dlAnimation(true);
            // setTimeout(function () {
            //     dlAnimation(false)
            // }, 1000);
            this.mainViz = new tableauSoftware.Viz(placeholderDiv, url, options);
            // mainViz.addEventListener(tableauSoftware.TableauEventName.FILTER_CHANGE, onVizFilterChange);
        }
    }

    downloadPdf(): void {
        if (!this.mainViz) { return; }
        this._lg.log("downloadPdf invoked.");
        this.mainViz.showExportPDFDialog();
    }

    downloadPpt(): void {
        if (!this.mainViz) { return; }
        this._lg.log("downloadPpt invoked.");
        let contentUrl = this.activesheet._impl.$url.split('/').reverse().slice(0, 2).reverse().join('/');
        this._vtRpo.getPptDlguid(contentUrl)
            .then(guid => {
                this._lg.log("initiating PPT download.");
                window.location.assign(`Home/GetPptCreatedFile?dlguid=${guid}`);
            })
            .catch(err => { this._lg.log(err.message) });
    }

    downloadExcel(): void {
        if (!this.mainViz) { return; }
        this._lg.log("downloadExcel invoked.");
        this.mainViz.showExportCrossTabDialog();
    }

    downloadImage(): void {
        if (!this.mainViz) { return; }
        this._lg.log("downloadImage invoked.");
        this.mainViz.showExportImageDialog();
    }
}