import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-rick-morty',
  templateUrl: './rick-morty.component.html',
  styleUrls: ['./rick-morty.component.css']
})
export class RickMortyComponent implements OnInit {

  rickMortyList: any[] = [];
  loadingStatus: boolean = false;

  constructor(private http: HttpService, private loader: LoadingService) { }

  ngOnInit(): void {
    this.loader.loadingEmitter.subscribe(response => {
      console.log(response);
      this.loadingStatus = response;
    })
    this.getRickMorty();
  }

  getRickMorty() {
    this.http.getRickMorty().subscribe(res => {
      this.rickMortyList = res.results;
      console.log(this.rickMortyList);
      this.loadingStatus = false;
    })
  }

}
