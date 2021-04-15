import { Component, OnInit } from '@angular/core';
import { RestApiService } from 'src/app/shared/rest-api.service';

@Component({
selector: 'app-advisory-executive',
templateUrl: './advisory-executive.component.html',
styleUrls: ['./advisory-executive.component.scss']
})
export class AdvisoryExecutiveComponent implements OnInit {

constructor(private restApi:RestApiService) { }
details:any
discription:any;
designation:any;
Advisory_status:any;
directors_status:any;
details_director:any;
tabIndex = 0;
ngOnInit(): void {

this.directors_status=false;
this.Advisory_status=true;


this.restApi.getList('advisory_board/').subscribe(res =>{
this.details=res;
})

this.restApi.getList('our_team/').subscribe(res =>{
this.details_director=res;
})
}
display: boolean = false;
name:any;

showDialog(a,b,c) {

this.discription=a;
this.designation=b;
this.name=c;
this.display = true;
}
advisory(index){
this.tabIndex = index
this.directors_status=true;
this.Advisory_status=false;
}
directors(index){
this.tabIndex = index
this.Advisory_status=true;
this.directors_status=false;
}

}