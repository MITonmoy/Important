import { autoinject } from "aurelia-framework";
import { HttpClient } from "aurelia-fetch-client";
import "whatwg-fetch";

@autoinject
export class BaseDataRepository<T> {
    constructor(protected http: HttpClient) { }

}