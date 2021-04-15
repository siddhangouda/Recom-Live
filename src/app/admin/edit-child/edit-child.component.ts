import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RestApiService } from 'src/app/shared/rest-api.service';

@Component({
  selector: 'app-edit-child',
  templateUrl: './edit-child.component.html',
  styleUrls: ['./edit-child.component.scss']
})
export class EditChildComponent implements OnInit {

  childId :any;
  selected: any = 'asso';

  //association Data
  asso:any = 'asso';
  associationForm : FormGroup;
  associationList : any=[];
  assoFile : File;

  //speaker Data
  speaker:any = "speaker";
  speakerForm : FormGroup;
  speakerList : any;
  speakerFile : File;
  presentationFile : File;

  //partner Data
  partner:any ='partner';
  partnerForm : FormGroup;
  partnerList : any;
  partnerFile : File;

  //supported By
  support:any = 'support' ;
  supportForm : FormGroup;
  supportList : any;
  supportFile : File;

  //media
  media : any = "media";
  mediaForm : FormGroup;
  mediaList : any; 
  mediaFile : File

  constructor(private restAPI : RestApiService,
              private fb : FormBuilder,
              private route : ActivatedRoute,
              private router : Router) { 

                this.associationForm = this.fb.group({
                  row : this.fb.array([])
                })

                this.speakerForm = this.fb.group({
                  row : this.fb.array([])
                })

                this.partnerForm = this.fb.group({
                  row : this.fb.array([])
                })

                this.supportForm = this.fb.group({
                  row : this.fb.array([])
                })

                this.mediaForm = this.fb.group({
                  row : this.fb.array([])
                })
              }

              

  ngOnInit(): void {

    this.route.params.subscribe(res => {
      console.log(res.queryParams)
      this.childId = res.queryParams;
    })

    this.restAPI.getListbyId(this.childId ,'child_event_related/').subscribe(res => {
      console.log(res);
      this.associationList = res[0].associates;
      this.speakerList = res[0].speakers;
      this.partnerList = res[0].partners;
      this.supportList = res[0].supporters;
      this.mediaList = res[0].media_partners;
      console.log(this.associationList);
      this.showAsso(this.associationList);
      this.showSpeaker(this.speakerList);
      this.showPartner(this.partnerList);
      this.showSupport(this.supportList);
      this.showMedia(this.mediaList);
      console.log()
    })
    
    
  }

  switch(text){
    this.selected = text
  }

  // association
  showAsso(associationList){
    console.log(associationList)
    this.associationForm = this.fb.group({
      row : this.fb.array(associationList.map(data => this.fb.group({
        id : [data.id],
        ch_name : [data.ch_name],
        vc_link : [data.vc_img_url],
      })))
    })
  }

  assoFileChange(event){
    alert("changed")
    this.assoFile = event.target.files[0] ;
  }

  updateAssociation(i){
    alert(i);
    let value :any;
    console.log(this.associationForm.controls.row.value[i])
    value= this.associationForm.controls.row.value[i]
    console.log(value) 
    let formdata = new FormData
    formdata.append("file", this.assoFile),
    formdata.append("value" , JSON.stringify(value))
    this.restAPI.uploadForm('update_association/', formdata).subscribe(res=> {
      console.log(res)
    })
  }

  deleteAssociation(id){
    this.restAPI.postForm('delete_association/', {"id" : id}).subscribe(res=>{
      console.log(res)
    })
  }


  //Speaker

  showSpeaker(speakerList){
    this.speakerForm = this.fb.group({
      row: this.fb.array(speakerList.map(data => this.fb.group({
        id : [data.id],
        presentation: [data.presentation],
        vc_about_speaker: [data.vc_about_speaker],
        vc_designation: [data.vc_designation],
        vc_linkedin_link: [data.vc_linkedin_link],
        vc_speaker_name: [data.vc_speaker_name],
        vc_twitter_link: [data.vc_twitter_link],
        vidio_url:  [data.vidio_url]
      })
       
      ))
    })
  }

  updateSpeakerImage(event){
    this.speakerFile = event.target.files[0];
  }

  updatePresentation(event){
    this.presentationFile = event.target.files[0];
  }

  updateSpeaker(i){
    let value = this.speakerForm.controls.row.value[i]
    let formData = new FormData
    formData.append("value" ,JSON.stringify(value)),
    formData.append("speaker_Image", this.speakerFile),
    formData.append("presentationFile", this.presentationFile)
    this.restAPI.uploadForm('update_speakers/', formData).subscribe(res=>{
      console.log(res);
    })
  }

  deleteSpeaker(id){
    this.restAPI.postForm('delete_speakers/',{"id": id}).subscribe(res => {
      console.log(res)
    })
    location.reload();
  }

  //Partner
showPartner(partnerList){
this.partnerForm = this.fb.group({
  row : this.fb.array(partnerList.map(data => this.fb.group({
    id : [data.id],
    vc_partner_name : [data.vc_partner_name],
    vc_partner_website_url :[data.vc_partner_website_url],
    vc_partner_type : [data.vc_partner_type]
  })))
})

console.log("partner",this.partnerForm)
}

uploadPartner(event){
  this.partnerFile = event.target.files[0];
}

updatePartner(i){
  let value = this.partnerForm.controls.row.value[i];
  let formData = new FormData;
  formData.append('value', JSON.stringify(value));
  formData.append('file', this.partnerFile);
  this.restAPI.uploadForm('update_partners/',formData).subscribe(res => {
    console.log(res);
  })
  // location.reload();
}

deletePartner(id){
  this.restAPI.postForm('delete_partners/', {"id": id}).subscribe(res=> {
    console.log(res);
  })
  location.reload();
}

showSupport(supportList){
  this.supportForm = this.fb.group({
    row : this.fb.array(supportList.map(data => this.fb.group({
      id: [data.id],
      vc_comapany_name : [data.vc_comapany_name],
      vc_company_url : [data.vc_company_url],
    })))
  })
  console.log("suppotForm", this.supportForm)
}

uploadSupporter(event){
  this.supportFile = event.target.files[0];
}

updateSupporter(i){
  let value = this.supportForm.controls.row.value[i];
  let formData = new FormData;
  formData.append('value', JSON.stringify(value));
  formData.append('file', this.supportFile);
  this.restAPI.uploadForm('update_supporters/', formData).subscribe(res => {
    console.log(res);
  })
}

deleteSupporter(id){
  this.restAPI.postForm('delete_supporters/',{"id": id}).subscribe(res =>{
    console.log(res);
  })
  location.reload();
}


//media

showMedia(mediaList){
  this.mediaForm = this.fb.group({
    row: this.fb.array(mediaList.map(data => this.fb.group({
      id :[data.id],
      vc_comapany_name : [data.vc_comapany_name],
      vc_company_url : [data.vc_company_url],
    })))
  })
}

uploadMedia(event){
  this.mediaFile = event.target.files[0];
}

updateMedia(i){
  let value = this.mediaForm.controls.row.value[i];
  let formData = new FormData;
  formData.append('value', JSON.stringify(value));
  formData.append('file', this.mediaFile);
  this.restAPI.uploadForm('update_media_partners/',formData).subscribe(res=>{
    console.log(res);
  })
}
deleteMedia(id){
  this.restAPI.postForm('delete_media_partners/',{"id": id}).subscribe(res=> 
    {
      console.log(res)
    })
    location.reload()
}

addNew(childId){
  alert(childId)
  this.router.navigate(['admin/createchild'],{queryParams :{ "childId" :childId}})
}
}


