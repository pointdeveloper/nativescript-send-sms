import { Component } from "@angular/core";
import * as permissions from "nativescript-permissions";
import * as TNSPhone from 'nativescript-phone';

declare var android;

@Component({
    selector: "my-app",
    templateUrl: "app.component.html",
})

export class AppComponent {
    public enteredNumber: number;
    public enteredMessage: string;

    public sendSMS() {
        let numbersArray = new Array();
        numbersArray.push(String(this.enteredNumber));

        permissions.requestPermission(android.Manifest.permission.SEND_SMS, "Permission Needed To Send SMS")
            .then(() => {
                TNSPhone.sms(numbersArray, this.enteredMessage)
                    .then((args: any) => {
                        console.log(JSON.stringify(args));
                    }, (err) => {
                        console.log('Error: ' + err);
                    });
            })
            .catch(() => {
                console.log("Permission Denied !");
            });
    }

}
