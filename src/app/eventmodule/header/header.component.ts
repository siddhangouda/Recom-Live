import { AfterViewInit, Component, ElementRef, HostListener, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

// primeng components
import { PrimeNGConfig } from 'primeng/api';
import { RestApiService } from 'src/app/shared/rest-api.service';

import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, AfterViewInit {

  //for css styles
  @ViewChild('stickyMenu') stickyMenu: any;
  sticky: boolean = false;
  menuPosition: any;


  // for ts logic
  eventData: any;
  decodedId: any;
  displayPosition: boolean;
  position: string;
  selected: string;
  name: any;
  supportedByData: any;
  speakersData: any;
  ourPartnersData: any;
  associationsData: any;
  mediaData: any;
  eventType: any = 'multiple';


  // for child Event
  selectedChild: any = 0;
  childEventsData : any ;

  

  constructor(private primengConfig: PrimeNGConfig,
    private restApi: RestApiService,
    private route: ActivatedRoute,
    private router: Router,
  ) { 

  }

  ngOnInit(): void {


    this.primengConfig.ripple = true;
    //decoding id(redierectTo) from params
    this.route.queryParams.subscribe(params => {
      this.decodedId = atob(params.redierectTo);
    })

    this.restApi.getListbyId(this.decodedId, 'event_data/').subscribe(responce => {      
        this.eventData = responce  
        console.log("responce" ,responce)
        console.log("partners" ,responce[0].child_events[this.selectedChild].partners)
        // child event
        this.childEventsData = responce[0].child_events;
        
      console.log(this.selectedChild)

        this.supportedByData = responce[0].child_events[this.selectedChild].supporters;
        this.speakersData = responce[0].child_events[this.selectedChild].speakers;
        this.ourPartnersData = responce[0].child_events[this.selectedChild].partners;
        this.associationsData = responce[0].child_events[this.selectedChild].associates;
        this.mediaData = responce[0].child_events[this.selectedChild].media_partners;

        console.log("parent responce", this.eventData.child_events);
      
    })


  }

  ngAfterViewInit() {
    // this.menuPosition = this.stickyMenu.
    // forEach( _results =>{
    //   console.log("position2" , _results)
    // })
    this.menuPosition = this.stickyMenu.nativeElement.offsetTop
    console.log("position1", this.menuPosition = this.stickyMenu.nativeElement.offsetTop)
    console.log("position2", this.sticky);

  }

  showPositionDialog(position: string, selected) {
    this.position = position;
    this.displayPosition = true;
    this.selected = selected;
  }

  // download data baased on clicked button

  downloadFile() {
    console.log(this.selected);
    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    if (this.selected == "Agenda") {
      link.setAttribute('href', this.eventData[0].vc_agenda_link);
    } else if (this.selected == "Brochure") {
      link.setAttribute('href', this.eventData[0].vc_brochure_link);
    } else {
      link.setAttribute('href', this.eventData[0].vc_floorPlan_link);
    }
    document.body.appendChild(link);
    link.click();
    link.remove();
    //hide pop-up window
    this.displayPosition = false;
  }

  goToRegister(id) {

    this.router.navigate(['/register'], { queryParams: { redierectTo: btoa(id) } });
    console.log(id);
  }

  selectEvent(i) {

    this.selectedChild = i;
    this.supportedByData = this.eventData[0].child_events[i].supporters;
    this.speakersData = this.eventData[0].child_events[this.selectedChild].speakers;
    this.ourPartnersData = this.eventData[0].child_events[this.selectedChild].partners;
    this.associationsData = this.eventData[0].child_events[this.selectedChild].associates;
    this.mediaData = this.eventData[0].child_events[this.selectedChild].media_partners;
  }

  @HostListener('window:scroll', ['$event'])
  handleScroll() {
    const windowScroll = window.pageYOffset;
    if (windowScroll >= this.menuPosition) {
      this.sticky = true;
    } else {
      this.sticky = false;
    }
  }

}
