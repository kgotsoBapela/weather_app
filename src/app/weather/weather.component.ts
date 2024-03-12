import { Component, Injectable, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import exp from 'constants';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.css'
})
export class WeatherComponent implements OnInit{
  public weatherSearchForm!: FormGroup;

  constructor(private formBuilder: FormBuilder){}

  ngOnInit(){
    this.weatherSearchForm = this.formBuilder.group({ location: ['']})
  }

  sendToAPIXU(formValue:any){
    console.log(formValue.location)
  }

  onSubmit(formValue:any){
    // console.log(formValue.location)
  }
}



