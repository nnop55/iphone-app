import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WifiService {

  wifiOn: boolean = false;

  constructor() { }

  turnOnWifi() {
    this.wifiOn = true;
  }

  turnOffWifi() {
    this.wifiOn = false;
  }
}
