import { Component, OnInit } from '@angular/core';
import { RestApiService } from 'src/app/shared/rest-api.service';

@Component({
  selector: 'app-partnership',
  templateUrl: './partnership.component.html',
  styleUrls: ['./partnership.component.scss']
})
export class PartnershipComponent implements OnInit {

  firstName:any;
  lastName:any;
  companyName:any;
  designation:any;
  email:any;
  phone:any;
  city:any;
  state:any;
  for:any=1

  constructor(private restAPI: RestApiService)  { }

  ngOnInit(): void {
  }

  partnershipData(value){
    console.log(JSON.stringify(value));
    this.restAPI.postForm('partnership_register/',value).subscribe(res =>{
      alert(res);
    })
  }

}
