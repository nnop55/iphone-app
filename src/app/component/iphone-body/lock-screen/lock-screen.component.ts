import { Component, OnInit } from '@angular/core';
import { map, Observable, share, shareReplay, Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-lock-screen',
  templateUrl: './lock-screen.component.html',
  styleUrls: ['./lock-screen.component.css']
})
export class LockScreenComponent implements OnInit {

  battery: string = 'ri-battery-fill';
  batteryNum: number = 100;
  interval: any;
  interval2: any;

  clicked: boolean = false;

  private _time$: Observable<Date> = timer(0, 1000).pipe(
    map(tick => new Date()),
    shareReplay(1)
  );

  rxTime = new Date();
  subscription!: Subscription;

  constructor() { }

  ngOnInit() {
    this.subscription = timer(0, 1000)
      .pipe(
        map(() => new Date()),
        share()
      )
      .subscribe((time: any) => {
        this.rxTime = time;
      });

    this.phoneBattery();

  }

  get time() {
    return this._time$;
  }

  chargePhone() {
    this.clicked = !this.clicked;
    if (this.clicked = true) {
      clearInterval(this.interval)
      this.interval2 = setInterval(() => {
        this.batteryNum += 1
        this.battery = 'ri-battery-charge-line'
        if (this.batteryNum == 100) {
          clearInterval(this.interval2);
          this.battery = 'ri-battery-fill';
          this.phoneBattery();
        }
      }, 2500)
    }
  }

  phoneBattery() {
    this.interval = setInterval(() => {
      this.batteryNum -= 1;
      if (this.batteryNum == 0) {
        clearInterval(this.interval)
      }
      if (this.batteryNum < 30) {
        this.battery = 'ri-battery-low-line'
      } else {
        this.battery = 'ri-battery-fill'
      }
    }, 3000)
  }

  batterySaver() { }


}





