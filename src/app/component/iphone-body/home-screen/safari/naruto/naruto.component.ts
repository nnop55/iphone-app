import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-naruto',
  templateUrl: './naruto.component.html',
  styleUrls: ['./naruto.component.css']
})
export class NarutoComponent implements OnInit {

  narutoList: any[] = [];

  constructor(private http: HttpService) { }

  ngOnInit(): void {
    this.getNarutos();
  }

  getNarutos() {
    this.http.getNaruto().subscribe(res => {
      this.narutoList = res.data;
      console.log(this.narutoList)
    })
  }

}
