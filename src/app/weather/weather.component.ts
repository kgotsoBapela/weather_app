import { Component, Injectable, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { WeatherstackService } from '../weatherstack.service';
import exp from 'constants';


@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.css'
})
export class WeatherComponent implements OnInit{
  public weatherSearchForm!: FormGroup;
  public weatherData: any;

  constructor(
    private formBuilder: FormBuilder,
    private weatherstackService: WeatherstackService){}

  ngOnInit(){
    this.weatherSearchForm = this.formBuilder.group({ location: ['']})
  }

  sendToWeatherStack(formValue:any){
    console.log(formValue.location)
    this.weatherstackService
      .getWeather(formValue.location)
      .subscribe(data => console.log(data));

  }

}

