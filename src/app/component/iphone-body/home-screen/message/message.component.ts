import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  textMessage: string = '';
  mobileNum: string = '';

  sentMessage: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  sent() {
    if (this.textMessage != '') {
      if (this.mobileNum == '') {
        alert('Enter mobile number')
      } else {
        this.sentMessage = true;
      }
    }
  }

}
