import { Component, Input, OnInit } from '@angular/core';
import { RestApiService } from 'src/app/shared/rest-api.service';

@Component({
  selector: 'app-partnership',
  templateUrl: './partnership.component.html',
  styleUrls: ['./partnership.component.scss']
})
export class PartnershipComponent implements OnInit {


  @Input() id:any

  firstName:any;
  lastName:any;
  companyName:any;
  designation:any;
  email:any;
  phone:any;
  city:any;
  state:any;

  constructor(private restAPI: RestApiService)  { }

  ngOnInit(): void {
  }

  partnershipData(value){
    this.restAPI.postForm('partnership_register/',value).subscribe(res =>{
      alert(res);
    })
  }

}
