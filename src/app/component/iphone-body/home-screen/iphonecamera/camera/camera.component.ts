import { Component, OnInit } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { WebcamImage, WebcamInitError, WebcamUtil } from 'ngx-webcam';
import { SaveImageService } from 'src/app/services/save-image.service';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.css']
})
export class CameraComponent implements OnInit {

  private trigger: Subject<void> = new Subject();
  public webcamImage!: WebcamImage;
  private nextWebcam: Subject<any> = new Subject();

  constructor(public captureImage: SaveImageService) { }

  ngOnInit(): void {
  }

  public triggerSnapshot(): void {
    this.trigger.next();
  }

  public handleImage(webcamImage: WebcamImage): void {
    this.webcamImage = webcamImage;
    this.captureImage.captureImage = webcamImage!.imageAsDataUrl;
    console.info('received webcam image', this.captureImage.captureImage);
    this.captureImage.checkImage = true;
  }



  public get triggerObservable(): Observable<any> {
    return this.trigger.asObservable();
  }



  public get nextWebcamObservable(): Observable<any> {
    return this.nextWebcam.asObservable();
  }

}
