"use strict";
var core_1 = require("@angular/core");
var permissions = require("nativescript-permissions");
var TNSPhone = require('nativescript-phone');
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent.prototype.sendSMS = function () {
        var _this = this;
        var numbersArray = new Array();
        numbersArray.push(String(this.enteredNumber));
        permissions.requestPermission(android.Manifest.permission.SEND_SMS, "Permission Needed To Send SMS")
            .then(function () {
            TNSPhone.sms(numbersArray, _this.enteredMessage)
                .then(function (args) {
                console.log(JSON.stringify(args));
            }, function (err) {
                console.log('Error: ' + err);
            });
        })
            .catch(function () {
            console.log("Permission Denied !");
        });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: "my-app",
            templateUrl: "app.component.html",
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map