import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

// primeng components
import { PrimeNGConfig } from 'primeng/api';
import { RestApiService } from 'src/app/shared/rest-api.service';

@Component({
  selector: 'app-pastheader',
  templateUrl: './pastheader.component.html',
  styleUrls: ['./pastheader.component.scss']
})
export class PastheaderComponent implements OnInit {

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
    

  constructor(private primengConfig: PrimeNGConfig,
              private restApi:RestApiService,
              private route : ActivatedRoute,
              private router : Router,
   ) { }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
    // decoding id(redierectTo) from params
    this.route.queryParams.subscribe(params => {
      this.decodedId = atob(params.redierectTo);
    })

    this.restApi.getListbyId(this.decodedId,'event_data/').subscribe(responce =>{
      this.eventData = responce.events;
      this.supportedByData = responce.supported_by;
      this.speakersData = responce.speakers;
      this.ourPartnersData = responce.our_partners;
      this.associationsData = responce.associations;
      this.mediaData = responce.media;
      
      console.log("data",responce);
    }) 
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

}
