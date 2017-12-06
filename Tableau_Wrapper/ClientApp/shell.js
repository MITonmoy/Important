import { PLATFORM } from 'aurelia-framework';
var Shell = /** @class */ (function () {
    function Shell() {
    }
    Shell.prototype.configureRouter = function (config, router) {
        config.title = 'Aurelia';
        config.map([{
                route: ['', 'home'],
                name: 'home',
                settings: { icon: 'home' },
                moduleId: PLATFORM.moduleName('components/home/home'),
                nav: true,
                title: 'Home'
            }]);
        this.router = router;
    };
    return Shell;
}());
export { Shell };
//# sourceMappingURL=shell.js.map