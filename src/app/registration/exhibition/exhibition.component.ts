import { Component, OnInit } from '@angular/core';
import { RestApiService } from 'src/app/shared/rest-api.service';

@Component({
  selector: 'app-exhibition',
  templateUrl: './exhibition.component.html',
  styleUrls: ['./exhibition.component.scss']
})
export class ExhibitionComponent implements OnInit {

  firstName:any;
  lastName:any;
  companyName:any;
  designation:any;
  email:any;
  phone:any;
  city:any;
  state:any;
  for:any=1;

  constructor(private restAPI: RestApiService)  { }

  ngOnInit(): void {
  }

  exhibitionData(value){
    console.log(JSON.stringify(value));
    this.restAPI.postForm('exhibitor_register/',value).subscribe(res =>{
      alert(res);
    })
  }

}