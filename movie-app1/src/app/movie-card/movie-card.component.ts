import { Component, Input } from '@angular/core';
import { BookmarkService } from '../liked-movies.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent {
  public get likemovieservice(): BookmarkService {
    return this._likemovieservice;
  }
  public set likemovieservice(value: BookmarkService) {
    this._likemovieservice = value;
  }
  @Input() movie:any;
  constructor(private _likemovieservice: BookmarkService){}
 
  onLikeMovie(movie:any){ 
   this.likemovieservice.setImage(movie) 
  } 
}