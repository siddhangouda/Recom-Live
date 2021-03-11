import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestApiService } from 'src/app/shared/rest-api.service';

@Component({
  selector: 'app-all-forms',
  templateUrl: './all-forms.component.html',
  styleUrls: ['./all-forms.component.scss']
})
export class AllFormsComponent implements OnInit {

  decodedId : any;


// set required field 
  partnership:boolean=true;
  conference:boolean=true;
  exhibition:boolean=true;
  visitor:boolean=true;
  vertual : boolean=true;
  
  //to display form
  partnershipForm:boolean=true;
  conferenceForm:boolean=false;
  exhibitionForm:boolean=false;
  visitorForm:boolean=false;
  vertualForm:boolean=false;



  constructor(private route : Router,
              private activeRoute : ActivatedRoute,
              private restAPI : RestApiService) { }

  ngOnInit(): void {

    // get decoded Id 
     this.activeRoute.queryParams.subscribe(res =>{
      console.log( this.decodedId = atob(res.redierectTo));
    })
        // get decoded Id ends

    //get  reqfield data    
      this.restAPI.getListbyId(this.decodedId, 'required/').subscribe(res =>{
        this.conference = res.events_req[0].req_conference
        this.exhibition = res.events_req[0].req_exhibitors
        this.partnership = res.events_req[0].req_partners
        this.vertual = res.events_req[0].req_virtual
        this.visitor = res.events_req[0].req_visitors
      })
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
