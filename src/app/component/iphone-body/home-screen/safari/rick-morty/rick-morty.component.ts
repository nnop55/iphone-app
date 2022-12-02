import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-rick-morty',
  templateUrl: './rick-morty.component.html',
  styleUrls: ['./rick-morty.component.css']
})
export class RickMortyComponent implements OnInit {

  rickMortyList: any[] = [];

  constructor(private http: HttpService) { }

  ngOnInit(): void {
    this.getRickMorty();
  }

  getRickMorty() {
    this.http.getRickMorty().subscribe(res => {
      this.rickMortyList = res.results;
      console.log(this.rickMortyList)
    })
  }

}
