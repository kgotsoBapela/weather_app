import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface Post {
  City: string;
  weatherCon: string;
  degrees: string;
}

@Injectable({
  providedIn: 'root'
})
export class WeatherstackService {

  constructor(private http: HttpClient) { }

  getWeather(location:string){
    return this.http.get('http://api.weatherstack.com/current?access_key=cb8b93b96478d21e19d57f98d70bba47&query='+location)
    // return this.http.get('https://api.weatherbit.io/v2.0/current?ciry=London&key=12555efe192f4336ab4c86cc7a35057'+location)
  }
}
