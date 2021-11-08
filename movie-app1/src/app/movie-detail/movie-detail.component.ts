import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { map, switchMap } from "rxjs/operators";
import { Observable } from "rxjs";

import { MovieService } from "../movies.service";
import { MovieDetail, Movie } from "../movie.model";

@Component({
  selector: "app-movie-detail",
  templateUrl: "./movie-detail.component.html",
  styleUrls: ["./movie-detail.component.css"]
})
export class MovieDetailComponent implements OnInit {
  movieDetails$!: Observable<MovieDetail>;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly movieService: MovieService
    
  ) {}

  ngOnInit() { 
    this.movieDetails$ = this.route.queryParams.pipe( 
      map(queryParams => queryParams["movieId"]), 
      switchMap(imdbId => this.movieService.getMovieDetails(imdbId)), 
      switchMap((movie: MovieDetail) => 
        this.movieService.searchMovie(movie.Title).pipe( 
          map((similarMovies: Array<Movie>) => 
            similarMovies.filter( 
              (similarMovie: Movie) => similarMovie.Title !== movie.Title 
            ) 
          ), 
          map((similarMovies: Array<Movie>) => ({ 
            ...movie, 
            similarMovies 
          })) 
        ) 
      ) 
    ); 
  }
} 