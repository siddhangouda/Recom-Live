import { Component, OnInit,Input, OnChanges } from '@angular/core';
import { RestApiService } from 'src/app/shared/rest-api.service';

@Component({
selector: 'app-who-can-visit',
templateUrl: './who-can-visit.component.html',
styleUrls: ['./who-can-visit.component.scss'],
styles:[`

.even {
background-color: white;
}

.odd {
background-color: #faf9f9;
}

`]
})
export class WhoCanVisitComponent implements OnInit , OnChanges
{

@Input('PointsData') PointsData:any;

heading :any;
constructor(private restApi: RestApiService,) { }

ngOnInit(): void {

this.heading= this.PointsData;


}

ngOnChanges(){
    this.heading= this.PointsData;
}

}