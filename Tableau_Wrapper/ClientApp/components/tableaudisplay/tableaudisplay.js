var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { autoinject } from "aurelia-framework";
import { EventAggregator } from "aurelia-event-aggregator";
import { VizTokenRepository } from "../../services/vizTokenRepository";
var TableauDisplay = /** @class */ (function () {
    function TableauDisplay(_ea, _vtRpo) {
        var _this = this;
        this._ea = _ea;
        this._vtRpo = _vtRpo;
        this.mainVizId = "tableauviz";
        console.log("tableaudisplay constructed");
        this._ea.subscribe("newViz", function (v) { return _this.initNewViz(v); });
    }
    TableauDisplay.prototype.activate = function (model) {
        this._ctx = model;
        this.currentVizUrl = this.getVizUrl(this._ctx.ServerUrl, this._ctx.SiteName, model.Categories[0].Workbooks[0].Views[0].ContentUrl);
        console.log("ServerUrl: " + this._ctx.ServerUrl);
    };
    TableauDisplay.prototype.created = function (owningView, myView) {
        console.log("tableaudisplay created");
    };
    TableauDisplay.prototype.attached = function () {
        console.log("tableaudisplay attached");
    };
    TableauDisplay.prototype.initNewViz = function (v) {
        var _this = this;
        this.getVizUrl(this._ctx.ServerUrl, this._ctx.SiteId, this._ctx.SiteName, v.ContentUrl)
            .then(function (url) {
            console.log("Loading new Viz. URL: " + url);
            _this.initializeViz(url);
        }).catch(function (err) { return console.log(JSON.stringify(err)); });
    };
    TableauDisplay.prototype.getVizUrl = function (serverUrl, siteId, siteName, contentUrl) {
        var _this = this;
        var prm = new Promise(function (res, rej) {
            _this._vtRpo.getData(siteId, siteName)
                .then(function (token) { return res(serverUrl + "trusted/" + token + "/t/" + siteName + "/views/" + contentUrl.replace("/sheets/", "/")); })
                .catch(function (err) { return rej(err); });
        });
        return prm;
    };
    TableauDisplay.prototype.initializeViz = function (sContentURL) {
        var _this = this;
        // sContentURL = "http://cdtssql353d:8000/" + "trusted/" + "-1" + "/t/" + "MMAGold" +
        //     "/views/" + "02_MethodOfPaymentComparison_Beta_v1/MethodofPaymentComparison";
        if (!sContentURL) {
            return;
        }
        console.log("sContentURL: " + sContentURL);
        var placeholderDiv = document.getElementById(this.mainVizId);
        var url = sContentURL;
        console.log("placeholderDiv: " + JSON.stringify(placeholderDiv));
        if (placeholderDiv != null && placeholderDiv.parentElement != null) {
            console.log("initializing viz");
            console.log("setting width + 30: " + placeholderDiv.clientWidth);
            console.log("setting width + 5: " + placeholderDiv.clientHeight);
            var options = {
                width: placeholderDiv.clientWidth,
                height: placeholderDiv.clientHeight,
                hideTabs: true,
                hideToolbar: true,
                onFirstInteractive: function () {
                    console.log("inside onFirstInteractive");
                    _this.workbook = _this.mainViz.getWorkbook();
                    _this.activesheet = _this.workbook.getActiveSheet();
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
    };
    TableauDisplay = __decorate([
        autoinject,
        __metadata("design:paramtypes", [EventAggregator, VizTokenRepository])
    ], TableauDisplay);
    return TableauDisplay;
}());
export { TableauDisplay };
//# sourceMappingURL=tableaudisplay.js.map