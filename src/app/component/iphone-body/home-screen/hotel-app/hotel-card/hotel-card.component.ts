import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { from } from 'rxjs';
import { filter } from 'rxjs/operators';
import { HttpService } from 'src/app/services/http.service';
import { LoadingService } from 'src/app/services/loading.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-hotel-card',
  templateUrl: './hotel-card.component.html',
  styleUrls: ['./hotel-card.component.css']
})
export class HotelCardComponent implements OnInit {

  loadingStatus: boolean = true;
  self: HotelCardComponent = this;

  constructor(public http: HttpService,
    private loader: LoadingService,
    public shared: SharedService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.loader.loadingEmitter.subscribe((response: any) => {
      this.loadingStatus = response;
    })
    this.getHotelsData();
  }

  filterHotels(res: any[]) {                                  //Get router params for change data
    this.activatedRoute.queryParams.subscribe((params: any) => {
      this.shared.routeParam.propertyType = params["propertyType"];
      this.shared.routeParam.typeOfPlace = params["typeOfPlace"];
      this.shared.routeParam.country = params["country"];
      this.shared.routeParam.priceFrom = params["priceFrom"];
      this.shared.routeParam.priceTo = params["priceTo"];

      let tmp: any = res.filter((hotel: any) => {
        // return hotel.propertyType === this.shared.routeParam["propertyType"] ||
        //   hotel.typeOfPlace === this.shared.routeParam["typeOfPlace"] ||
        //   hotel.country === this.shared.routeParam["country"] 
        if (hotel.typeOfPlace === this.shared.routeParam["typeOfPlace"]) {
          console.log('sworia')
        } else {
          console.log('ara')
        }
        // hotel.rooms.filter((room: any) => {
        //   if (room.price >= this.shared.routeParam.priceFrom &&
        //     room.price <= this.shared.routeParam.priceTo) {
        //     return room
        //   } else {
        //     console.log('ar udris')
        //   }
        // })

      });

      console.log(tmp)

      if (tmp.length == 0) {
        this.http.hotelsData = res;
      } else {
        this.http.hotelsData = tmp;
      }

    })


  }

  getHotelsData() {
    this.http.getAllHotels().subscribe((res: any) => {
      this.loadingStatus = false;
      this.filterHotels(res)

      console.log(this.http.hotelsData)
    })
  }
}
