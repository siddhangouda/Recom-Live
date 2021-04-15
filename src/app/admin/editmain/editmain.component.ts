import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RestApiService } from 'src/app/shared/rest-api.service';

@Component({
  selector: 'app-editmain',
  templateUrl: './editmain.component.html',
  styleUrls: ['./editmain.component.scss']
})
export class EditmainComponent implements OnInit {
  
  id: number ;
  vc_main_title:any;
  vc_event_location:any;
  vc_city
  vc_state
  country
  db_registrationTotal
  old_url
  event_date
  event_url_id
  vc_status
  vc_eventType
  news
  dt_event_start_date
  dt_event_end_date
  vc_description
  req_conference
  req_exhibitor
  req_partners
  req_visitor
  req_virtual
  vc_eventBanner
  vc_backgroundImage
  vc_agenda_link
  vc_brochure_link
  vc_floorPlan_link
//files
  vc_eventBanner_file: File 
  vc_backgroundImage_file : File
  vc_agenda_link_file : File
  vc_brochure_link_file : File
  vc_floorPlan_link_file : File

  constructor(private restAPI : RestApiService,
              private route : ActivatedRoute) { }

  ngOnInit(): void {

    this.route.params.subscribe(res =>{
      this.id = res.queryParams
    })

    this.restAPI.postForm("list_master_event/", {"id": this.id}).subscribe(res=>{
      let masterData = res[0];     
  this.vc_main_title = masterData.vc_main_title
  this.vc_event_location = masterData.vc_event_location
  this.vc_city  = masterData.vc_city
  this.vc_state = masterData.vc_state
  this.country = masterData.country
  this.db_registrationTotal = masterData.db_registrationTotal
  this.old_url = masterData.old_url
  this.event_date = masterData.event_date
  this.event_url_id = masterData.event_url_id
  this.vc_status = masterData.vc_status
  this.vc_eventType = masterData.vc_eventType
  this.news = masterData.news
  this.dt_event_start_date = masterData.dt_event_start_date
  this.dt_event_end_date = masterData.dt_event_end_date
  this.vc_description = masterData.vc_description
  this.req_conference = masterData.req_conference
  this.req_exhibitor = masterData.req_exhibitor
  this.req_partners = masterData.req_partners
  this.req_visitor = masterData.req_visitor
  this.req_virtual = masterData.req_virtual
  this.vc_eventBanner = masterData.vc_eventBanner
  this.vc_backgroundImage = masterData.vc_backgroundImage
  this.vc_agenda_link = masterData.vc_agenda_link
  this.vc_brochure_link = masterData.vc_brochure_link
  this.vc_floorPlan_link = masterData.vc_floorPlan_link
  
    })
  }


  fileUploadBanner(e){
    this.vc_eventBanner_file = e.target.files[0]
    
    
  }

  fileUploadImage(e){
    this.vc_backgroundImage_file = e.target.files[0]
   

  }

  fileUploadagenda(e){
    this.vc_agenda_link_file = e.target.files[0]
    
  }

  fileUploadbrochure(e){
    this.vc_brochure_link_file = e.target.files[0]
    
  }

  fileUploadfloorPlan(e){
    this.vc_floorPlan_link_file = e.target.files[0]
  }

  
  masterData(form : NgForm){
    let formData = new FormData;
    formData.append('value', JSON.stringify(form.value));
    formData.append('vc_floorPlan_link_file', this.vc_floorPlan_link_file)
    formData.append('vc_brochure_link_file', this.vc_brochure_link_file)
    formData.append('vc_agenda_link_file', this.vc_agenda_link_file)
    formData.append('vc_backgroundImage_file',this.vc_backgroundImage_file)
    formData.append('vc_eventBanner_file', this.vc_eventBanner_file)
    this.restAPI.uploadForm('update_master_event/', formData).subscribe(res => {
    })
  }
}
