import { autoinject, DOM } from "aurelia-framework";
import { EventAggregator } from "aurelia-event-aggregator";
import { PublishEvents } from "../../helpers/app-constants";
import * as $ from "jquery";
import "bootstrap";

@autoinject
export class FullNav {
    constructor(private _ea: EventAggregator, private _pev: PublishEvents) { }

    public ddlPdf() { this._ea.publish(this._pev.DownloadPdfEvent, {}); }
    public ddlPpt() { this._ea.publish(this._pev.DownloadPptEvent, {}); }
    public ddlExcel() { this._ea.publish(this._pev.DownloadExcelEvent, {}); }
    public ddlImg() { this._ea.publish(this._pev.DownloadImageEvent, {}); }

    attached(): void {
        /*
        console.log("Fullnav attached");
        let title = $('[ref*="popoverMenu"] .p-title').clone();
        let pcnt = $('[ref*="popoverMenu"] .p-content').clone();
        console.log(title.html());
        console.log(pcnt.html());
        let opt: PopoverOptions = {
            content: pcnt.html(),
            html: true,
            title: title.html(),
            trigger: "click",
            placement: "bottom"
        };
        $('#popoverMenu').popover(opt);
        //*/
    }

}