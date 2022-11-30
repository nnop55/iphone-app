import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  // userName = localStorage.getItem('username');

  constructor() {

  }

  ngOnInit(): void {
  }


  // icloudName() {
  //   let nameAlert: any = prompt('Enter your name');
  //   localStorage.setItem('username', nameAlert);
  // }

}
