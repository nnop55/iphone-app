import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.css']
})
export class GoogleMapComponent implements OnInit {
  @Input() hotelName!: number;

  @Input() lat!: number;
  @Input() long!: number;

  zoom = 13;

  constructor() { }

  ngOnInit(): void {
  }

}
