import { Component, OnInit } from '@angular/core';
import { map, Observable, share, shareReplay, Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-lock-screen',
  templateUrl: './lock-screen.component.html',
  styleUrls: ['./lock-screen.component.css']
})
export class LockScreenComponent implements OnInit {


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
  }

  get time() {
    return this._time$;
  }





}





