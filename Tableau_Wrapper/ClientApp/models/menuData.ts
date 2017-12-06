import { SiteStateInfo } from './siteStateInfo';

export class MenuData extends SiteStateInfo {
    public IsTopLevelMenu: boolean;
    public Categories: Category[];
}

export class Category {
    public Name: string;
    public Workbooks: Workbook[];
}

export class Workbook {
    public Id: string;
    public Name: string;
    public ContentUrl: string;
    public AltPreviewImage: string;
    public PreviewImage: string;
    public Views: TsView[];
}

export class TsView {
    public Id: string;
    public Name: string;
    public ContentUrl: string;
}