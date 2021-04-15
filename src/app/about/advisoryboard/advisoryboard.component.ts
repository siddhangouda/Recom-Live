import { Component, OnInit } from '@angular/core';
import { RestApiService } from 'src/app/shared/rest-api.service';

@Component({
selector: 'app-advisoryboard',
templateUrl: './advisoryboard.component.html',
styleUrls: ['./advisoryboard.component.scss'],
styles:[`

.even {
background-color: white;
}

.odd {
background-color: #faf9f9;
}

`]
})
export class AdvisoryboardComponent implements OnInit {

constructor( private restApi:RestApiService) { }

details:any;

ngOnInit(): void {

this.restApi.getList('advisory_board/').subscribe(res =>{
this.details=res;
})
}




}