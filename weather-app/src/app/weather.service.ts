import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, pipe } from 'rxjs';
import {map, switchMap} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http:HttpClient) { }

  getWeatherForecast(){
    return new Observable((observer)=>{
      navigator.geolocation.getCurrentPosition(
        (position)=>{
          observer.next(position)
        },
        (error)=>{
          observer.next(error)
        }
      )
    }).pipe(
      map((value:any)=>{
        return new HttpParams ()
          .set('lon', value.coords.longitude)
          .set('lat', value.coords.latitude)
          .set('units', 'imperial')
          .set('appid', '5c03910e95082accf7f9533c3d68b83d')
        
      }),
      switchMap((values)=>{
        return this.http.get('api.openweathermap.org/data/2.5/forecast', {params: values })
      })
    )
  }
}
