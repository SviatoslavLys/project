import { Component, OnInit } from '@angular/core';
import { BookmarkService } from '../liked-movies.service';

@Component({
  selector: 'app-liked-movies',
  templateUrl: './liked-movies.component.html',
  styleUrls: ['./liked-movies.component.css']
})
export class LikedMoviesComponent implements OnInit {
likedmovies:any=[]
  constructor(private likemovieservice:BookmarkService) { }

  ngOnInit(): void {
    this.likedmovies=this.likemovieservice.getImage()

  }

}
