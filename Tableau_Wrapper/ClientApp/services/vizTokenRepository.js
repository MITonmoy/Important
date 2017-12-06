var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { inject } from "aurelia-framework";
import { HttpClient } from "aurelia-fetch-client";
import "whatwg-fetch";
var VizTokenRepository = /** @class */ (function () {
    function VizTokenRepository(httpClient) {
        this._http = httpClient;
    }
    VizTokenRepository.prototype.getData = function (siteId, siteName) {
        var _this = this;
        // this.siteId = siteId;
        // this.siteName = siteName;
        var opt = {
            credentials: "same-origin",
            body: JSON.stringify({ siteName: siteName })
        };
        var prms = new Promise(function (res, rej) {
            if (!_this.vizToken || _this.siteId !== siteId) {
                _this._http.fetch("Home/GetVizTokenForCurrentUser", opt)
                    .then(function (respone) { return respone.json(); })
                    .then(function (data) {
                    _this.vizToken = data;
                    res(_this.vizToken);
                })
                    .catch(function (err) { return rej(err); });
            }
            else {
                res(_this.vizToken);
            }
        });
        return prms;
    };
    VizTokenRepository.prototype.reset = function () {
        this.vizToken = null;
        this.siteId = null;
        this.siteName = null;
    };
    VizTokenRepository = __decorate([
        inject(HttpClient),
        __metadata("design:paramtypes", [HttpClient])
    ], VizTokenRepository);
    return VizTokenRepository;
}());
export { VizTokenRepository };
//# sourceMappingURL=vizTokenRepository.js.map