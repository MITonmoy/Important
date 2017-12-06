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
var MenuDataRepository = /** @class */ (function () {
    function MenuDataRepository(httpClient) {
        this._http = httpClient;
    }
    MenuDataRepository.prototype.getData = function () {
        var _this = this;
        var prms = new Promise(function (resolve, reject) {
            if (!_this.menuData) {
                _this._http.fetch("Home/GetMenuData", { credentials: "same-origin" })
                    .then(function (respone) { return respone.json(); })
                    .then(function (data) {
                    var tempData = data;
                    tempData.Categories.forEach(function (c) {
                        c.Workbooks.forEach(function (w) {
                            w.PreviewImage = "Content/Images/WorkbookPreviewImages/site-" + tempData.SiteId +
                                "/workbook-" + w.Id + ".png";
                        });
                    });
                    _this.menuData = tempData;
                    resolve(_this.menuData);
                });
            }
            else {
                resolve(_this.menuData);
            }
        });
        return prms;
    };
    MenuDataRepository.prototype.refresh = function () {
        this.menuData = null;
    };
    MenuDataRepository = __decorate([
        inject(HttpClient),
        __metadata("design:paramtypes", [HttpClient])
    ], MenuDataRepository);
    return MenuDataRepository;
}());
export { MenuDataRepository };
//# sourceMappingURL=menuDataRepository.js.map