import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { WifiService } from 'src/app/services/wifi.service';
import { TurnWifiAlertComponent } from './turn-wifi-alert/turn-wifi-alert.component';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.css']
})
export class HomeScreenComponent implements OnInit {

  bottomMenu: any[] = [];
  topMenu: any[] = [];

  constructor(public dialog: MatDialog, private wifiService: WifiService, private router: Router) { }

  ngOnInit(): void {
    this.bottomMenuFunc();
    this.topMenuFunc();
  }

  bottomMenuFunc() {
    this.bottomMenu = [
      {
        icon: 'https://i.pinimg.com/originals/84/4e/8c/844e8cd4ab26c82286238471f0e5a901.png',
        text: 'Call',
        router: '/call',
        function: null
      },
      {
        icon: 'https://i.pinimg.com/originals/98/14/6e/98146ec63f05240c321a82f8b35a31c0.png',
        text: 'Safari',
        router: null,
        function: () => {
          if (this.wifiService.wifiOn == true) {
            this.router.navigate(['safari'])
          } else {
            this.openDialog();
          }
        }
      },
      {
        icon: 'https://i.pinimg.com/originals/7b/7b/c6/7b7bc658d3fce83780679e84dc62f2fa.png',
        text: 'Messages',
        router: null,
        function: null
      },
      {
        icon: 'https://i.pinimg.com/originals/ae/2e/56/ae2e5651b74a00d5d31b8c6453fa3ebb.png',
        text: 'Musics',
        router: null,
        function: null
      }
    ]
  }

  topMenuFunc() {
    this.topMenu = [
      {
        icon: 'https://i.pinimg.com/originals/f3/51/98/f35198a7414715799acad8b568c5a08e.png',
        text: 'Maps',
        router: null
      },
      {
        icon: 'https://i.pinimg.com/originals/de/e7/22/dee722e5e0bdd6950d754f74a8a49065.png',
        text: 'Photos',
        router: null
      },
      {
        icon: 'https://i.pinimg.com/originals/e2/bc/2b/e2bc2b005d593253f62a4727d3da5d4f.png',
        text: 'Camera',
        router: null
      },
      {
        icon: 'https://i.pinimg.com/originals/60/c3/9d/60c39d7f1cc24db55f677b7510ea7038.png',
        text: 'Settings',
        router: '/settings'
      }
    ]
  }

  openDialog(): void {
    this.dialog.open(TurnWifiAlertComponent, { panelClass: 'custom-dialog-container' });
  }


}
