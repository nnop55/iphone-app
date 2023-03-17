import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-naruto',
  templateUrl: './naruto.component.html',
  styleUrls: ['./naruto.component.css']
})
export class NarutoComponent implements OnInit {

  narutoList: any[] = [];
  loadingStatus: boolean = false;

  constructor(private http: HttpService, private loader: LoadingService) { }

  ngOnInit(): void {
    this.loader.loadingEmitter.subscribe((response: any) => {
      console.log(response);
      this.loadingStatus = response;
    })
    this.getNarutos();
  }

  getNarutos() {
    this.http.getNaruto().subscribe((res: any) => {
      this.narutoList = res.data;
      console.log(this.narutoList);
      this.loadingStatus = false;
    })
  }

}
