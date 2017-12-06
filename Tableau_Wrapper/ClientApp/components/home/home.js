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
import { MenuDataRepository } from "../../services/menuDataRepository";
import { EventAggregator } from "aurelia-event-aggregator";
var Home = /** @class */ (function () {
    function Home(mdr, ea) {
        this.mdr = mdr;
        this.ea = ea;
        console.log("home.ts constructed");
    }
    Home.prototype.activate = function () {
        var _this = this;
        console.log("home.ts activated");
        var prm = new Promise(function (res, rej) {
            _this.mdr.getData()
                .then(function (data) {
                if (data && data.Categories.length > 0) {
                    _this.menuData = data;
                    _this.addImagePaths(data);
                    _this.selectedCategory = _this.menuData.Categories[0];
                    if (_this.selectedCategory && _this.selectedCategory.Workbooks.length > 0) {
                        _this.selectedWorkbook = _this.selectedCategory.Workbooks[0];
                        if (_this.selectedWorkbook && _this.selectedWorkbook.Views.length > 0) {
                            _this.selectedView = _this.selectedWorkbook.Views[0];
                        }
                    }
                    _this.ea.publish("newViz", _this.selectedView);
                    console.log("menuData populated");
                    res();
                }
                console.log("menuData not populated");
                res();
            })
                .catch(function (err) { rej(err); });
        });
        return prm;
    };
    Home.prototype.addImagePaths = function (data) {
        data.Categories.forEach(function (c) {
            if (c.Workbooks && c.Workbooks.length > 0) {
                c.Workbooks.forEach(function (w) {
                    w.AltPreviewImage = "../../ClientApp/images/previews/site-" + data.SiteId + "/workbook-" + w.Id + ".png";
                });
            }
        });
    };
    /*
        onMenuItemClick(e: Event, c: Category, w?: Workbook, v?: TsView): void {
            e.preventDefault();
            e.stopPropagation();
            console.log(`c.Name: ${c.Name}, w.Id: ${w == null ? "" : w.Id}, v.Id: ${v == null? "" : v.Id}`);
            if (!c) { return; }
            if (!this.selectedCategory || this.selectedCategory.Name !== c.Name) { this.selectedCategory = c; }
            if (!w && c.Workbooks && c.Workbooks.length > 0) {
                this.selectWorkbookAndView(c.Workbooks[0]);
            } else {
                this.selectWorkbookAndView(w, v);
            }
        }

    */
    Home.prototype.onCategoryClick = function (e, c) {
        e.preventDefault();
        e.stopPropagation();
        this.selectCategoryWorkbookAndView(c);
    };
    Home.prototype.onWorkbookClick = function (e, w) {
        e.preventDefault();
        e.stopPropagation();
        this.selectWorkbookAndView(w);
    };
    Home.prototype.onViewClick = function (e, v) {
        e.preventDefault();
        e.stopPropagation();
        this.selectView(v);
    };
    Home.prototype.selectCategoryWorkbookAndView = function (c) {
        if (!c || this.selectedCategory.Name === c.Name) {
            return;
        }
        this.selectedCategory = c;
        if (c.Workbooks && c.Workbooks.length > 0) {
            var w = c.Workbooks[0];
            this.selectWorkbookAndView(w);
        }
    };
    Home.prototype.selectWorkbookAndView = function (w) {
        if (!w || this.selectedWorkbook.Id === w.Id) {
            return;
        }
        this.selectedWorkbook = w;
        if (w.Views && w.Views.length > 0) {
            this.selectView(w.Views[0]);
        }
    };
    Home.prototype.selectView = function (v) {
        if (!v || this.selectedView.Id === v.Id) {
            return;
        }
        this.selectedView = v;
        this.ea.publish("newViz", v);
    };
    Home = __decorate([
        autoinject,
        __metadata("design:paramtypes", [MenuDataRepository, EventAggregator])
    ], Home);
    return Home;
}());
export { Home };
//# sourceMappingURL=home.js.map