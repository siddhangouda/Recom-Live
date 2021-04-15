import { NgStyle } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RestApiService } from 'src/app/shared/rest-api.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
selector: 'app-speakersregistered',
templateUrl: './speakersregistered.component.html',
styleUrls: ['./speakersregistered.component.scss']
})
export class SpeakersregisteredComponent implements OnInit {

events:any;
myform: FormGroup;
url:any;


constructor(private restApi:RestApiService) {

}
speakers:any;


ngOnInit(): void {

this.url=this.restApi.apiURL
this.restApi.getList('list_registered_speakers/').subscribe(res =>{
this.speakers=res;

$(function () {
$('#user-table').DataTable({
scrollX:true
});
});



})


}










}