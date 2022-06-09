import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WeatherServiceApi } from '../service/weather_service_api';

@Component({
  selector: 'app-city-form',
  templateUrl: './city-form.component.html',
  styleUrls: ['./city-form.component.css']
})
export class CityFormComponent implements OnInit {

  city_name: string = ""
  temperature: string = ""
  feel_like: string = ""
  cloudiness: string = ""
  humidity: string = ""
  pressure: string = ""
  rain: string = ""
  image_name: string = ""

  cityForm: FormGroup;
  
  constructor(private formBuilder:FormBuilder, private weatherService: WeatherServiceApi ) { 
    this.cityForm = this.formBuilder.group({
      city: ['', [Validators.required, Validators.minLength(3)]]
    })
  }

  ngOnInit(): void {
    
  }

  submit() {
    this.weatherService.getCity(this.cityForm.value.city).subscribe(data => {
      console.log(data)
      if(data[0] !== undefined) {
        this.acquireWeather(data[0].lat, data[0].lon)
        this.city_name = data[0].name + " "
      }
      else {
        alert("proszę wpisać poprawną nazwę miasta")
      }
    })
  }

  acquireWeather(lat: number, lon: number) {
    this.weatherService.getWeather(lat, lon).subscribe(data => {
      if (data.name !== undefined) {
        this.city_name += data.name
      }
      else {
        this.city_name = ""
      }
      if (data.main.temp !== undefined) {
        this.temperature = "Temperatura " + data.main.temp + 'C'
      }
      else {
        this.temperature = ""
      }
      if (data.main.feels_like !== undefined) {
        this.feel_like = "Odczuwalna " + data.main.feels_like + 'C'
      }
      else {
        this.feel_like = ""
      }
      if (data.clouds.all !== undefined) {
        this.cloudiness = "Zachmurzenie " + data.clouds.all + '%'
        if (data.clouds.all >= 50) {
          this.image_name = "/assets/images/Cloudy.svg"
        }
        else {
          this.image_name = "/assets/images/Sunny.svg"
        }
      }
      else {
        this.cloudiness = ""
      }
      if (data.main.humidity !== undefined) {
        this.humidity = "Wilgotność " + data.main.humidity + '%'
      }
      else {
        this.humidity = ""
      }
      if (data.main.pressure !== undefined) {
        this.pressure = "Ciśnienie " + data.main.pressure + 'hPa'
      }
      else {
        this.pressure = ""
      }
      if (data.rain !== undefined) {
        if (data.rain._1h !== undefined) {
          this.rain = "Opady deszczu " + data.rain._1h + ' mm3'
        }
        else if (data.rain._3h !== undefined) {
          this.rain = "Opady deszczu " + data.rain._3h + ' mm3'
        }
      }
      else {
        this.rain = ""
      }
      

      console.log(data)
      console.log(this.temperature)
    })
  }

  get city() {
    return this.cityForm.get('city');
  }

}
