import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';
import { SharedService } from 'src/app/services/shared.service';
import { HotelCardComponent } from '../hotel-card.component';

@Component({
  selector: 'app-filter-drawer',
  templateUrl: './filter-drawer.component.html',
  styleUrls: ['./filter-drawer.component.css']
})
export class FilterDrawerComponent implements OnInit {
  @Input() hotelCard!: HotelCardComponent;

  propertyType: any[] = [
    { title: 'Home' },
    { title: 'Villa' },
  ];

  country: any[] = [
    { title: 'Italy ' },
    { title: 'Croatia ' },
    { title: 'India ' },
    { title: 'Montenegro ' },
    { title: 'Georgia ' },
  ];

  typeOfPlace: any[] = [
    { title: 'Entire place' },
    { title: 'Shared room' },
    { title: 'Private room' }
  ]
  constructor(public shared: SharedService,
    public http: HttpService,
    private activatedRoute: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit(): void {
  }

  searchBtn() {
    this.updateRouteParameters();
    this.hotelCard.getHotelsData();
    this.shared.isOpened = false;
  }


  updateRouteParameters() {               //Updating router params while data changed
    const params = {
      typeOfPlace: this.shared.routeParam["typeOfPlace"],
      propertyType: this.shared.routeParam["propertyType"],
      country: this.shared.routeParam["country"],
      priceFrom: this.shared.routeParam["priceFrom"],
      priceTo: this.shared.routeParam["priceTo"],
    };

    this.router.navigate(["/hotel-app"], {
      relativeTo: this.activatedRoute,
      queryParams: params,
      queryParamsHandling: 'merge',
      skipLocationChange: false
    });

  }



}
