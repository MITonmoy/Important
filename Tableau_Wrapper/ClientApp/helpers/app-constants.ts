export class PublishEvents {
    public get VizLoadEvent(): string { return "newViz"; }
    public get DownloadPdfEvent(): string { return "ddlPdf"; }
    public get DownloadPptEvent(): string { return "ddlPpt"; }
    public get DownloadExcelEvent(): string { return "ddlExcel"; }
    public get DownloadImageEvent(): string { return "ddlImage"; }
}