import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BatteryModalComponent } from './battery-modal/battery-modal.component';

@Component({
  selector: 'app-iphone-body',
  templateUrl: './iphone-body.component.html',
  styleUrls: ['./iphone-body.component.css']
})
export class IphoneBodyComponent implements OnInit {


  battery: string = 'ri-battery-fill';
  batteryNum: number = 100;
  interval: any;
  interval2: any;

  clicked: boolean = false;
  disableChargeButton: boolean = false;

  checkPowerMode: any = localStorage.getItem('powermode')

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    this.phoneBattery();
    localStorage.clear();
  }

  chargePhone() {
    this.clicked = true;
    if (this.clicked = true) {
      this.disableChargeButton = false;
      clearInterval(this.interval)
      this.interval2 = setInterval(() => {
        this.batteryNum += 1
        this.battery = 'ri-battery-charge-line'
        if (this.batteryNum == 100) {
          clearInterval(this.interval2);
          this.battery = 'ri-battery-fill';
          this.phoneBattery();
        }
        if (this.batteryNum > 30) {
          localStorage.clear()
        }
      }, 3000)
    }
  }

  phoneBattery() {
    this.interval = setInterval(() => {
      this.batteryNum -= 1;
      if (this.batteryNum == 0) {
        clearInterval(this.interval)
      }
      if (this.batteryNum == 30) {
        this.openDialog();
      }
      if (this.batteryNum < 30) {
        this.disableChargeButton = true;
        this.lowPowerMode();
      } else {
        this.battery = 'ri-battery-fill'
        this.disableChargeButton = false;
      }
    }, 3000)
  }

  lowPowerMode() {
    if (localStorage.getItem('powermode') != 'true') {
      this.battery = 'ri-battery-low-line'
    } else {
      this.battery = 'ri-battery-line';
    }

  }

  openDialog(): void {
    this.dialog.open(BatteryModalComponent, { panelClass: 'custom-dialog-container' });
  }


}




