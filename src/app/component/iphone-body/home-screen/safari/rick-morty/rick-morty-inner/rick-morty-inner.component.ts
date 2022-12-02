import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-rick-morty-inner',
  templateUrl: './rick-morty-inner.component.html',
  styleUrls: ['./rick-morty-inner.component.css']
})
export class RickMortyInnerComponent implements OnInit {

  currentPerson: any;

  constructor(private activatedRoute: ActivatedRoute,
    private http: HttpService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      var name = params['name'];
      this.http.getRickMortyById(name).subscribe(res => {
        this.currentPerson = res.results;
        console.log(this.currentPerson)
      })
    })
  }

}
