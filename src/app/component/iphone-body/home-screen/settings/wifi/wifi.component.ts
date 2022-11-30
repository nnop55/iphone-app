import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-wifi',
  templateUrl: './wifi.component.html',
  styleUrls: ['./wifi.component.css']
})
export class WifiComponent implements OnInit {

  wifiToggle: any = false;
  wifiPass: any = new Object();
  toggleText: string = 'on'
  test!: any;

  iconContent: string = 'ri-toggle-line';

  wifiArr: any[] = [];

  constructor(private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.wifiArrFunc();
  }

  toggle() {
    this.wifiToggle = !this.wifiToggle;
    if (this.wifiToggle == true) {
      this.iconContent = 'ri-toggle-fill';
      this.toggleText = 'off';
    } else {
      this.iconContent = 'ri-toggle-line';
      this.toggleText = 'on';
      localStorage.setItem('wifiOn', 'false')
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
          localStorage.setItem('wifiOn', 'true')
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
