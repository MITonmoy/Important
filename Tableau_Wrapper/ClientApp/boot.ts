import "isomorphic-fetch";
import { Aurelia, PLATFORM, ModuleNameOptions } from "aurelia-framework";
import { HttpClient } from "aurelia-fetch-client";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "bootstrap";

declare const IS_DEV_BUILD: boolean; // the value is supplied by Webpack during the build

export function configure(aurelia: Aurelia): void {

    aurelia.use.standardConfiguration();
    aurelia.use.plugin(PLATFORM.moduleName("aurelia-bootstrap"), (config: any) =>{
        config.options.popoverPosition = 'bottom';
        config.options.popoverTrigger = 'outsideClick';
    });

    if (IS_DEV_BUILD) {
        aurelia.use.developmentLogging();
    }

    new HttpClient().configure(config => {
        const baseUrl: string = document.getElementsByTagName("base")[0].href;
        config.withBaseUrl(baseUrl);
    });

    aurelia.start().then(() => aurelia.setRoot(PLATFORM.moduleName("shell")));
}
