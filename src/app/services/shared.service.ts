import { Injectable } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class SharedService {

  isOpened: boolean = false;

  routeParam: any = new Object();

  constructor() { }


}
