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
import { HttpClient } from "aurelia-fetch-client";
import "whatwg-fetch";
var BaseDataRepository = /** @class */ (function () {
    function BaseDataRepository(http) {
        this.http = http;
    }
    BaseDataRepository = __decorate([
        autoinject,
        __metadata("design:paramtypes", [HttpClient])
    ], BaseDataRepository);
    return BaseDataRepository;
}());
export { BaseDataRepository };
//# sourceMappingURL=baseRepository.js.map