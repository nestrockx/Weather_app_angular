import { HttpClient, HttpParams } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { City } from '../models/city';
import { WeatherForecast } from '../models/weather_forecast';


@Injectable({
  providedIn: 'root'
})
export class WeatherServiceApi {

  constructor(private http: HttpClient) { }

  private key: string = "9d5996236432899fb39bfb94d3978978";
  private url: string = "https://api.openweathermap.org";

  getCity(name: string): Observable<City[]> {
    let city_params = new HttpParams().set('q', name).set('limit', 5).set('appid', this.key)
    return this.http.get<City[]>(this.url + "/geo/1.0/direct", {params: city_params});
  }

  getWeather(lat: number, lon: number): Observable<WeatherForecast> {
    let position_params = new HttpParams().set('lat', lat).set('lon', lon).set('appid', this.key).set('units', 'metric')
    return this.http.get<WeatherForecast>(this.url + "/data/2.5/weather", {params: position_params});
  }

 
}
