import { Component, OnInit } from '@angular/core';
import { SaveImageService } from 'src/app/services/save-image.service';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {

  constructor(public captureImage: SaveImageService) { }

  ngOnInit(): void {
  }

}
