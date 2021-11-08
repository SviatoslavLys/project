import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class BookmarkService {

  private yourBookmark: any[] = [];

  setImage(image: any): void {
    if(!this.yourBookmark.includes(image)){
      this.yourBookmark.push(image);
    }
    localStorage.setItem('yourBookmark', JSON.stringify(this.yourBookmark));
  }

  getImage():any  {
    if (localStorage.getItem('yourBookmark')){
      this.yourBookmark =  JSON.parse(localStorage.getItem('yourBookmark') || '{}');
      return this.yourBookmark;
    }
    return [];
  }

  removeImage(image: any): void {
    this.yourBookmark = this.yourBookmark.filter(elem => elem.title !== image.title || elem.url !== image.url);
    localStorage.setItem('yourBookmark', JSON.stringify(this.yourBookmark));
  }
  
  constructor() { }
}