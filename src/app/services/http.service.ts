import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  public hotelsData: any[] = [];

  private rickMortyApi: string = 'https://rickandmortyapi.com/api/character';
  private narutoApi: string = 'https://api.jikan.moe/v4/anime?q=naruto&sfw';
  private hotelCardApi: string = 'http://airbnb-dev.us-east-1.elasticbeanstalk.com/api/Hotel';

  constructor(private http: HttpClient) { }

  getRickMorty(): Observable<any> {
    return this.http.get(this.rickMortyApi);
  }

  getNaruto(): Observable<any> {
    return this.http.get(this.narutoApi);
  }

  getRickMortyById(name: string): Observable<any> {
    return this.http.get(`${this.rickMortyApi}/${name}`)
  }

  getAllHotels(): Observable<any> {
    return this.http.get(this.hotelCardApi)
  }

  getHotelById(id: string): Observable<any> {
    return this.http.get(`${this.hotelCardApi}/${id}`)
  }


}
