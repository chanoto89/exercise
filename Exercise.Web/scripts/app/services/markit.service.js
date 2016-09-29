"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
var MarkitService = (function () {
    function MarkitService(jsonP) {
        this.jsonP = jsonP;
        this.url = 'http://dev.markitondemand.com/Api/v2/Quote/jsonp?callback=JSONP_CALLBACK&symbol=';
    }
    MarkitService.prototype.getMarkitData = function (searchTerm) {
        return this.jsonP.get("" + this.url + searchTerm)
            .toPromise()
            .then(function (response) { return response.json(); });
    };
    MarkitService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Jsonp])
    ], MarkitService);
    return MarkitService;
}());
exports.MarkitService = MarkitService;
//# sourceMappingURL=markit.service.js.map