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
var markit_service_1 = require('./services/markit.service');
var AppComponent = (function () {
    function AppComponent(markitService) {
        this.markitService = markitService;
    }
    AppComponent.prototype.executeSearch = function () {
        var _this = this;
        this.markitService.getMarkitData(this.searchText).then(function (result) {
            if (result.Name) {
                _this.resultModel = result;
            }
            else {
                // TODO: Add proper handling for null results
                alert("Invalid Search.Please enter valid search details");
            }
        }).catch(function (err) {
            console.log(err);
        });
    };
    AppComponent.prototype.convertInteger = function (value) {
        var numberOfDigits = value.toString().length;
        if (numberOfDigits > 9) {
            return (value / 1000000000).toFixed(1) + "B";
        }
        else if (numberOfDigits > 6) {
            return (value / 1000000).toFixed(1) + "M";
        }
        else if (numberOfDigits > 3) {
            return (value / 1000).toFixed(1) + "K";
        }
        else {
            return value.toString();
        }
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: '/scripts/app/app.component.html',
            styleUrls: ['scripts/app/app.component.css']
        }), 
        __metadata('design:paramtypes', [markit_service_1.MarkitService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map