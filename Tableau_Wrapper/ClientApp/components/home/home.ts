import { inject, autoinject } from "aurelia-framework";
import { MenuDataRepository } from "../../services/menuDataRepository";
import { MenuData, Workbook, Category, TsView } from "../../models/menuData";
import { EventAggregator } from "aurelia-event-aggregator";

@autoinject
export class Home {

    public menuData: MenuData;
    public selectedCategory: Category;
    public selectedWorkbook: Workbook;
    public selectedView: TsView;

    constructor(private mdr: MenuDataRepository, private ea: EventAggregator) {
        console.log("home.ts constructed");
    }

    activate(): Promise<void> {
        console.log("home.ts activated");
        let prm = new Promise<void>((res, rej) => {
            this.mdr.getData()
                .then(data => {
                    if (data && data.Categories.length > 0) {
                        this.menuData = data;
                        //this.addImagePaths(data);
                        this.selectedCategory = this.menuData.Categories[0];
                        if (this.selectedCategory && this.selectedCategory.Workbooks.length > 0) {
                            this.selectedWorkbook = this.selectedCategory.Workbooks[0];
                            if (this.selectedWorkbook && this.selectedWorkbook.Views.length > 0) {
                                this.selectedView = this.selectedWorkbook.Views[0];
                            }
                        }
                        this.ea.publish("newViz", this.selectedView);
                        console.log("menuData populated");
                        res();
                    }
                    console.log("menuData not populated");
                    res();
                })
                .catch(err => { rej(err); });
        });
        return prm;
    }

    addImagePaths(data: MenuData): void {
        data.Categories.forEach(c => {
            if (c.Workbooks && c.Workbooks.length > 0) {
                c.Workbooks.forEach(w => {
                    w.AltPreviewImage = `../../ClientApp/images/previews/site-${data.SiteId}/workbook-${w.Id}.png`;
                });
            }
        });
    }
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
    onCategoryClick(e: Event, c: Category): void {
        e.preventDefault();
        e.stopPropagation();
        this.selectCategoryWorkbookAndView(c);
    }

    onWorkbookClick(e: Event, w: Workbook): void {
        e.preventDefault();
        e.stopPropagation();
        this.selectWorkbookAndView(w);
    }

    onViewClick(e: Event, v: TsView): void {
        e.preventDefault();
        e.stopPropagation();
        this.selectView(v);
    }

    selectCategoryWorkbookAndView(c: Category): void {
        if (!c || this.selectedCategory.Name === c.Name) { return; }
        this.selectedCategory = c;
        if (c.Workbooks && c.Workbooks.length > 0) {
            var w: Workbook = c.Workbooks[0];
            this.selectWorkbookAndView(w);
        }
    }

    selectWorkbookAndView(w: Workbook): void {
        if (!w || this.selectedWorkbook.Id === w.Id) { return; }
        this.selectedWorkbook = w;

        if (w.Views && w.Views.length > 0) {
            this.selectView(w.Views[0]);
        }
    }

    selectView(v: TsView): void {
        if (!v || this.selectedView.Id === v.Id) { return; }
        this.selectedView = v;
        this.ea.publish("newViz", v);
    }
}
