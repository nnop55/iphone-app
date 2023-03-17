import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-hotel-main',
  templateUrl: './hotel-main.component.html',
  styleUrls: ['./hotel-main.component.css']
})
export class HotelMainComponent implements OnInit {

  constructor(public shared: SharedService) { }

  ngOnInit(): void {
  }

}
