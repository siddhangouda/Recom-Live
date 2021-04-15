import { AfterViewInit, Component, ElementRef, HostListener, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestApiService } from 'src/app/shared/rest-api.service';

@Component({
  selector: 'app-all-forms',
  templateUrl: './all-forms.component.html',
  styleUrls: ['./all-forms.component.scss']
})
export class AllFormsComponent implements OnInit {

  tab: any = 'tab1';
  tab1: any
  tab2: any
  tab3: any
  Clicked: boolean

  decodedId: any;
  abc = true;

  toggle = true;
  status = 'Enable';

  // set required field 
  partnership: boolean = true;
  conference: boolean = true;
  exhibition: boolean = true;
  visitor: boolean = true;
  vertual: boolean = true;

  //to display form
  partnershipForm: boolean = true;
  conferenceForm: boolean = false;
  exhibitionForm: boolean = false;
  visitorForm: boolean = false;
  vertualForm: boolean = false;



  constructor(private route: Router,
    private activeRoute: ActivatedRoute,
    private restAPI: RestApiService) { }

  ngOnInit(): void {



    // get decoded Id 

    //decoding id(redierectTo) from params
    this.activeRoute.params.subscribe(params => {
      this.decodedId = params.id
      // get decoded Id ends
      this.restAPI.getList('date_filter/upcomingall/').subscribe(res => {
        // this.decodedId = res[0].id
        res = res.upcoming_events_all.filter((r1) => {
          return r1.event_url_id == this.decodedId;

        })
        console.log("id is", this.decodedId = res[0].id);
        //get  reqfield data    
        this.restAPI.getListbyId(this.decodedId, 'required/').subscribe(res => {

          this.conference = res.events_req[0].req_conference
          this.exhibition = res.events_req[0].req_exhibitor
          this.partnership = res.events_req[0].req_partners
          this.vertual = res.events_req[0].req_virtual
          this.visitor = res.events_req[0].req_visitor

        })
      })



    })
  }

  onClick(check) {
    if (check == 1) {
      this.tab = 'tab1';
    } else if (check == 2) {
      this.tab = 'tab2';
    } else if (check == 3) {
      this.tab = 'tab3';
    } else if (check == 4) {
      this.tab = 'tab4';
    } else {
      this.tab = 'tab5';
    }

  }


  selectPartnership() {

    this.partnershipForm = true;
    this.conferenceForm = false;
    this.exhibitionForm = false;
    this.visitorForm = false;
    this.vertualForm = false;
  }


  selectExhibition() {
    this.partnershipForm = false;
    this.conferenceForm = false;
    this.exhibitionForm = true;
    this.visitorForm = false;
    this.vertualForm = false;
  }

  selectCoference() {

    this.partnershipForm = false;
    this.conferenceForm = true;
    this.exhibitionForm = false;
    this.visitorForm = false;
    this.vertualForm = false;
  }

  selectVisitor() {
    this.partnershipForm = false;
    this.conferenceForm = false;
    this.exhibitionForm = false;
    this.visitorForm = true;
    this.vertualForm = false;
  }

  selectVertual() {

    this.partnershipForm = false;
    this.conferenceForm = false;
    this.exhibitionForm = false;
    this.visitorForm = false;
    this.vertualForm = true;
  }

}
