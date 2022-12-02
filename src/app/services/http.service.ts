import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  rickMortyUrl: string = 'https://rickandmortyapi.com/api/character';
  narutoUrl: string = 'https://api.jikan.moe/v4/anime?q=naruto&sfw';

  constructor(private http: HttpClient) { }

  getRickMorty(): Observable<any> {
    return this.http.get(this.rickMortyUrl);
  }

  getNaruto(): Observable<any> {
    return this.http.get(this.narutoUrl);
  }

  getRickMortyById(name: string): Observable<any> {
    return this.http.get(`${this.rickMortyUrl}/${name}`)
  }


}
