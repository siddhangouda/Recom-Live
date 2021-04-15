import { NgStyle } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RestApiService } from 'src/app/shared/rest-api.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
selector: 'app-viewleads',
templateUrl: './viewleads.component.html',
styleUrls: ['./viewleads.component.scss']
})
export class ViewleadsComponent implements OnInit {

events:any;
myform: FormGroup;
url:any;
exhibitors: any;
exhibitors_:any;
partnerships: any;
virtual: any;
virtual_:any
visitor: any;
visitor_:any
tabIndex=1;


constructor(private restApi:RestApiService) {

}
speakers:any;
partnerships_:any;
conference_:any;
conference :any;
ngOnInit(): void {
this.exhibitors_=true;
this.partnerships_=true;
this.conference_=false;
this.visitor_=true;
this.virtual_=true;
this.url=this.restApi.apiURL
this.restApi.getList('registered_data/').subscribe(res =>{

this.conference=res.conference;
this.exhibitors = res.exhibitors;
this.partnerships = res.partnerships;
this.virtual = res.virtual;
this.visitor =res.visitor;

$(function () {
$('#user-table').DataTable({
scrollX:true

});
});
$(function () {
$('#user-table1').DataTable({
scrollX:true
});
});
$(function () {
$('#user-table2').DataTable({
scrollX:true
});
});

$(function () {
$('#user-table3').DataTable({
scrollX:true
});
});
$(function () {
$('#user-table4').DataTable({
scrollX:true
});
});

})


}

enable(data){
this.exhibitors_=true;
this.partnerships_=true;
this.conference_=true;
this.visitor_=true;
this.virtual_=true;
this.tabIndex = data

if(data==1){
this.conference_=false;
}else if(data==2){
this.exhibitors_=false;
}else if(data==3){

this.partnerships_=false;
}else if(data==4){
this.visitor_=false;
}else if(data==5){
this.virtual_=false;
}
}








}