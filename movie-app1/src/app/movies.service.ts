import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { Movie, MovieDetail } from './movie.model';

@Injectable()
export class MovieService {
  getMovieDetail(): any {
    throw new Error("Method not implemented.");
  }

  private readonly API_KEY = `93ce35fe`;

  constructor(private http: HttpClient) { }

  searchMovie(searchQuery: string): Observable<Array<Movie>> {
    return this.http.get(`https://omdbapi.com/?apikey=${this.API_KEY}&s=${searchQuery}`)
      .pipe(
        map((response: any) => response.Search)
      );
  }

  getMovieDetails(imdbId: string): Observable<any> {
    return this.http.get(`https://www.omdbapi.com/?apikey=${this.API_KEY}&i=${imdbId}&plot=full`);
  }

}
