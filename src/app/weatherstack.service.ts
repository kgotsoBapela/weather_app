import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherstackService {

  constructor(private http: HttpClient) { }

  getWeather(location:string){
    return this.http.get('http://api.weatherstack.com/current?access_key=cb8b93b96478d21e19d57f98d70bba47&query='+location)
  }
}
