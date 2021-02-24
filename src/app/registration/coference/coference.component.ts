import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-coference',
  templateUrl: './coference.component.html',
  styleUrls: ['./coference.component.scss']
})
export class CoferenceComponent implements OnInit {

  firstName:any;
  lastName:any;
  companyName:any;
  designation:any;
  email:any;
  phone:any;
  city:any;
  state:any;
  for:any=1;
  amount: any =2000;
  GST:any;

  constructor() { }

  ngOnInit(): void {
  }

  conferenceData(value, form :NgForm){
    console.log(JSON.stringify(value));
    console.log(form.controls["amount1"].setValue(20000));
    form.reset();
    
  }

}
