import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  api_key = 'f1aca93e54807386df3f6972a5c33b50';
  constructor(private _HttpClient: HttpClient) {}

  getMovies(): Observable<any> {
    return this._HttpClient.get(
      `https://api.themoviedb.org/3/trending/movie/week?api_key=${this.api_key}`
    );
  }
  getTV(): Observable<any> {
    return this._HttpClient.get(
      `https://api.themoviedb.org/3/trending/tv/week?api_key=${this.api_key}`
    );
  }

  getTrending(mediaType: string): Observable<any> {
    return this._HttpClient.get(
      `https://api.themoviedb.org/3/trending/${mediaType}/week?api_key=${this.api_key}`
    );
  }

  getDetails(id: string, type: any): Observable<any> {
    return this._HttpClient.get(
      `https://api.themoviedb.org/3/${type}/${id}?api_key=${this.api_key}&language=en-US`
    );
  }

  search(value: string) {
    return this._HttpClient.get(
      `https://api.themoviedb.org/3/search/multi?api_key=${this.api_key}&query=${value}&language=en-US&page=1&include_adult=false`
    );
  }
}
