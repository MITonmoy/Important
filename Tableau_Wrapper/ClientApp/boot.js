import "isomorphic-fetch";
import { PLATFORM } from "aurelia-framework";
import { HttpClient } from "aurelia-fetch-client";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "bootstrap";
export function configure(aurelia) {
    aurelia.use.standardConfiguration();
    if (IS_DEV_BUILD) {
        aurelia.use.developmentLogging();
    }
    new HttpClient().configure(function (config) {
        var baseUrl = document.getElementsByTagName("base")[0].href;
        config.withBaseUrl(baseUrl);
    });
    aurelia.start().then(function () { return aurelia.setRoot(PLATFORM.moduleName("shell")); });
}
//# sourceMappingURL=boot.js.map