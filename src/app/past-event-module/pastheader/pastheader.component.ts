import { AfterViewInit, Component, ElementRef, HostListener, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

// primeng components
import { PrimeNGConfig } from 'primeng/api';
import { RestApiService } from 'src/app/shared/rest-api.service';

@Component({
  selector: 'app-pastheader',
  templateUrl: './pastheader.component.html',
  styleUrls: ['./pastheader.component.scss']
})
export class PastheaderComponent implements AfterViewInit ,OnInit {

  @ViewChild('stickyMenu') stickyMenu : any;
  @ViewChild('myDiv') child: HTMLElement;
  sticky: boolean = false;
  menuPosition: any;
  eventData:any;
  decodedId:any;
  displayPosition: boolean;
  position: string;
  selected:string;
  name :any;
  supportedByData:any;
  speakersData :any;
  ourPartnersData:any;
  associationsData:any;
  mediaData:any;
  childEventsData: any;
  selectedChild: any = 0;
    

  constructor(private primengConfig: PrimeNGConfig,
              private restApi:RestApiService,
              private route : ActivatedRoute,
              private router : Router,
   ) { }

   
  ngAfterViewInit() {
    this.menuPosition = this.stickyMenu.nativeElement.offsetTop

  }


  ngOnInit(): void {
    this.primengConfig.ripple = true;
    this.route.params.subscribe(params => {
      this.decodedId = params.id

      this.restApi.getList('date_filter/pastall/').subscribe(res => {
        res = res.past_events_all.filter((r1)=> {
        return  r1.event_url_id == this.decodedId;
          
        })
       this.decodedId = res[0].id;

       this.restApi.getListbyId(this.decodedId, 'event_data/').subscribe(responce => {      
        this.eventData = responce  
        // child event
        this.childEventsData = responce[0].child_events;

        this.supportedByData = responce[0].child_events[this.selectedChild].supporters;
        this.speakersData = responce[0].child_events[this.selectedChild].speakers;
        this.ourPartnersData = responce[0].child_events[this.selectedChild].partners;
        this.associationsData = responce[0].child_events[this.selectedChild].associates;
        this.mediaData = responce[0].child_events[this.selectedChild].media_partners;
      
    })
        })

       

    })

   

  }

    showPositionDialog(position: string ,selected)  {
        this.position = position;
        this.displayPosition = true;
        this.selected = selected;
    }

    // download data baased on clicked button

    downloadFile( data){
      this.restApi.postForm('contact_register/', data).subscribe(res => {
      })

      const link = document.createElement('a');
      link.setAttribute('target', '_blank');
      if (this.selected == "Agenda"){
        link.setAttribute('href', this.eventData[0].vc_agenda_link);
      }else if(this.selected == "Brochure"){
        link.setAttribute('href', this.eventData[0].vc_brochure_link);
      }
    else if(this.selected == "postshow"){
      link.setAttribute('href', this.eventData[0].post_show_report);
    }
      else{
        link.setAttribute('href', this.eventData[0].vc_floorPlan_link);   
      }     
      document.body.appendChild(link);
      link.click();
      link.remove();
      //hide pop-up window
      this.displayPosition =false;
    }

    goToRegister(id){

      this.router.navigate(['/register'],{ queryParams: { redierectTo: btoa(id) } });
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
