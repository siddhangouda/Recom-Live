import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { RestApiService } from 'src/app/shared/rest-api.service';

@Component({
selector: 'app-executive-team',
templateUrl: './executive-team.component.html',
styleUrls: ['./executive-team.component.scss']
})
export class ExecutiveTeamComponent implements OnInit, AfterViewInit {

@ViewChild('ss') ss :ElementRef


constructor(private restApi:RestApiService) { }
details:any;
ngOnInit(): void {

this.restApi.getList('our_team/').subscribe(res =>{
this.details=res;
})
}

ngAfterViewInit(){
//this.ss.nativeElement.style.background='red'
}


}