import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SaveImageService {

  captureImage = '';

  checkImage: boolean = false;

  constructor() { }
}
