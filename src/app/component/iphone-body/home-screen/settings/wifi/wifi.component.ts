import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { WifiService } from 'src/app/services/wifi.service';

@Component({
  selector: 'app-wifi',
  templateUrl: './wifi.component.html',
  styleUrls: ['./wifi.component.css']
})
export class WifiComponent implements OnInit {

  wifiToggle: any = false;
  wifiPass: any = new Object();
  toggleText: string = 'on'

  iconContent: string = 'ri-toggle-line';

  wifiArr: any[] = [];

  constructor(private _snackBar: MatSnackBar, private wifiService: WifiService) { }

  ngOnInit(): void {
    this.wifiArrFunc();

    if (this.wifiService.wifiOn == true) {
      this.iconContent = 'ri-toggle-fill';
      this.toggleText = 'off';
      this.wifiToggle = true;
    } else {
      this.iconContent = 'ri-toggle-line';
      this.toggleText = 'on';
      this.wifiToggle = false;
    }
  }

  toggle() {
    this.wifiToggle = !this.wifiToggle;
    if (this.wifiToggle == true) {
      this.iconContent = 'ri-toggle-fill';
      this.toggleText = 'off';
    } else {
      this.iconContent = 'ri-toggle-line';
      this.toggleText = 'on';
      this.wifiService.turnOffWifi();
    }
  }

  wifiArrFunc() {
    this.wifiArr = [
      { name: 'SILK', pass: 'silk123', selectedWifi: false, passValue: null },
      { name: "MAGTICOM", pass: 'magti123', selectedWifi: false, passValue: null }
    ]
  }

  connectToWifi() {
    this.wifiArr.forEach((o: any) => {
      if (o.selectedWifi == true) {
        if (o.passValue == o.pass) {
          this.openSnackBar('Succesfully connected', 'OK')
          o.passValue = '';
          this.wifiService.turnOnWifi();
        } else {
          this.openSnackBar('Incorrect password', 'OK')
        }
      }

    })
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

}
