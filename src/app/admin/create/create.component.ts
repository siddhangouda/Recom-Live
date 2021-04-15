import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api/messageservice';
import { RestApiService } from 'src/app/shared/rest-api.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  showMaster :boolean = true;
  showChild : boolean = false;
  master_event_name : any;
  master_id :any;
  masterForm1 : NgForm;
  ImageBaseData : any
  
  req_conference : boolean = false;
  req_Virtual : boolean = false;
  req_visitor : boolean = false;
  req_partners : boolean = false;
  req_exhibitor : boolean = false;

  uploadedFiles: any[] = [];
  selectedflooarPlan : File; 
  selectedagenda : File;
  selectedbrochure : File;
  selectedImage :File;
  selectedBanner : File

  constructor(private restAPI : RestApiService,
    private route : Router) { 


  }

  ngOnInit(): void {
    
    
  }

  
  

  masterData(form :NgForm){
    this.masterForm1 = form;
    const value = form.value;

    let formData = new FormData()
    formData.append('value',JSON.stringify(value))
    formData.append('vc_eventBanner_file',this.selectedBanner) 
    formData.append('vc_backgroundImage_file',this.selectedImage)
    formData.append('vc_agenda_link_file',this.selectedagenda)
    formData.append('vc_brochure_link_file',this.selectedbrochure)
    formData.append('vc_floorPlan_link_file',this.selectedflooarPlan)



 
    this.restAPI.uploadForm('add_master_event/', formData ).subscribe(res => {
      this.master_id = res.id;
      if('success' in res){
        this.showMaster = false;
        alert('done');
        this.route.navigate(['admin/createchild'],{queryParams: {"masterId": this.master_id }})
        
        }else{
          alert(res);
        }
    })
  }

  fileUploadBanner(event){
    this.selectedBanner = event.target.files[0];
  }

  fileUploadImage(event){
    this.selectedImage = event.target.files[0];
  }

  fileUploadagenda(event){
    this.selectedagenda = event.target.files[0];
  }
  fileUploadbrochure(event){
    this.selectedbrochure = event.target.files[0];
  }

  fileUploadfloorPlan(event){
    this.selectedflooarPlan = event.target.files[0];
  }

 
  conference(event){
  this.req_conference = event.target.checked;
}
exhibitor(event){
  this.req_exhibitor = event.target.checked;
}
partners(event){
  this.req_partners = event.target.checked;
}
visitor(event){
  this.req_visitor = event.target.checked;
}
Virtual(event){
  this.req_visitor = event.target.checked;
}
}