import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-forms',
  templateUrl: './all-forms.component.html',
  styleUrls: ['./all-forms.component.scss']
})
export class AllFormsComponent implements OnInit {

  partnership:boolean=true;
  conference:boolean=true;
  exhibition:boolean=true;
  visitor:boolean=true;
  vertual : boolean=true;
  
  partnershipForm:boolean=true;
  conferenceForm:boolean=false;
  exhibitionForm:boolean=false;
  visitorForm:boolean=false;
  vertualForm:boolean=false;



  constructor() { }

  ngOnInit(): void {
  }

  selectPartnership(){
    this.partnershipForm=true;
    this.conferenceForm=false;
    this.exhibitionForm=false;
    this.visitorForm=false;
    this.vertualForm = false;
  }

  selectExhibition(){
    this.partnershipForm=false;
    this.conferenceForm=false;
    this.exhibitionForm=true;
    this.visitorForm=false;
    this.vertualForm = false;
  }

  selectCoference(){
    this.partnershipForm=false;
    this.conferenceForm=true;
    this.exhibitionForm=false;
    this.visitorForm=false;
    this.vertualForm = false;
  }

  selectVisitor(){
    this.partnershipForm=false;
    this.conferenceForm=false;
    this.exhibitionForm=false;
    this.visitorForm=true;
    this.vertualForm = false;
  }

  selectVertual(){
    this.partnershipForm=false;
    this.conferenceForm=false;
    this.exhibitionForm=false;
    this.visitorForm=false;
    this.vertualForm = true;
  }
  

}
