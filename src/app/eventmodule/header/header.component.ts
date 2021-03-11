import { AfterViewInit, Component, ElementRef, HostListener, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

// primeng components
import { PrimeNGConfig } from 'primeng/api';
import { RestApiService } from 'src/app/shared/rest-api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],

})
export class HeaderComponent implements OnInit, AfterViewInit {

  //for css styles
  @ViewChild('stickyMenu') stickyMenu :  any;
  sticky: boolean = false;
  menuPosition: any;

  
  // for ts logic
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
  eventType:any = 'multiple';

  payload = {
    associations: [],
    child_events: [],
  }

  // selected_supportedByData:any;
  // selected_speakersData :any;
  // selected_ourPartnersData:any;   
  // selected_associationsData:any;
  // selected_mediaData:any;
    

  constructor(private primengConfig: PrimeNGConfig,
              private restApi:RestApiService,
              private route : ActivatedRoute,
              private router : Router,
   ) { }

  ngOnInit(): void {

    
    this.primengConfig.ripple = true;
    //decoding id(redierectTo) from params
    this.route.queryParams.subscribe(params => {
      this.decodedId = atob(params.redierectTo);
    })

    this.restApi.getListbyId(this.decodedId,'event_data/').subscribe(responce =>{

      if (this.eventType == 'multiple')
      {
        console.log("event ttype is 1")
        this.restApi.getListbyId(1,'child_event_data/').subscribe(responce =>{
          console.log("updated event is" ,responce);
          this.supportedByData = responce.supported_by;
      this.speakersData = responce.speakers;
      this.ourPartnersData = responce.our_partners;
      this.associationsData = responce.associations;
      this.mediaData = responce.media;
        })
      }
      this.eventData = responce.master_events;
      this.supportedByData = responce.supported_by;
      this.speakersData = responce.speakers;
      this.ourPartnersData = responce.our_partners;
      this.associationsData = responce.associations;
      this.mediaData = responce.media;
      
      console.log("data",responce);
    }) 

    
  }

  ngAfterViewInit() {
    // this.menuPosition = this.stickyMenu.
    // forEach( _results =>{
    //   console.log("position2" , _results)
    // })
    this.menuPosition = this.stickyMenu.nativeElement.offsetTop
    console.log("position1" ,this.menuPosition = this.stickyMenu.nativeElement.offsetTop)
    console.log("position2",this.sticky);
    
  }

    showPositionDialog(position: string ,selected)  {
        this.position = position;
        this.displayPosition = true;
        this.selected = selected;
    }

    // download data baased on clicked button

    downloadFile(){
      console.log(this.selected);
      const link = document.createElement('a');
      link.setAttribute('target', '_blank');
      if (this.selected == "Agenda"){
        link.setAttribute('href', this.eventData[0].vc_agenda_link);
      }else if(this.selected == "Brochure"){
        link.setAttribute('href', this.eventData[0].vc_brochure_link);
      }else{
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
      console.log(id);
    }

    @HostListener('window:scroll', ['$event'])
    handleScroll(){
        const windowScroll = window.pageYOffset;
        if(windowScroll >= this.menuPosition){
            this.sticky = true;
        } else {
            this.sticky = false;
        }
    }

}
