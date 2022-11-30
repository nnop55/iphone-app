import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-caller-inner',
  templateUrl: './caller-inner.component.html',
  styleUrls: ['./caller-inner.component.css']
})
export class CallerInnerComponent implements OnInit {

  callingNum = localStorage.getItem('call');

  sec: number = 0;
  interval: any;

  min: number = 0;


  constructor() { }

  ngOnInit(): void {
    this.startTimer();
  }



  startTimer() {
    this.interval = setInterval(() => {
      this.sec += 1;
      if (this.sec == 60) {
        this.min += 1;
        this.sec = 0;
        this.sec += 1;
      }
    }, 1000)
  }


}
