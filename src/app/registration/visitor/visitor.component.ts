import { Component, OnInit, Input } from '@angular/core';
import { RestApiService } from 'src/app/shared/rest-api.service';

@Component({
  selector: 'app-visitor',
  templateUrl: './visitor.component.html',
  styleUrls: ['./visitor.component.scss']
})
export class VisitorComponent implements OnInit {

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

  visitorData(value){
    this.restAPI.postForm('visitor_register/',value).subscribe(res =>{
      alert(res);
    })
  }

}
