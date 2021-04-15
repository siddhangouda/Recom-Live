import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RestApiService } from 'src/app/shared/rest-api.service';

@Component({
  selector: 'app-createchild',
  templateUrl: './createchild.component.html',
  styleUrls: ['./createchild.component.scss']
})
export class CreatechildComponent implements OnInit , AfterViewInit{

//forms 
  masterForm : FormGroup;
  associationForm : FormGroup;
  speakerForm : FormGroup;
  partnerForm :FormGroup;
  supportedbyForm :FormGroup;
  mediaForm : FormGroup;

// show models
  showChild : boolean  = true;
  showAsso : boolean = false;
  showSpeaker : boolean = false;
  showPartner : boolean = false;
  showSupport : boolean = false;
  showMedia : boolean = false;

// child lists
  listData :any;
  speakerList : any; 
  partnerList : any;
  supportList :any ;
  mediaList : any ;

  // file
  assofile: File;
  speakerFile : File;
  presentationFile : File;
  partnerFile : File ;
  supportFile : File;
  mediaFile : File;
  //fileList
  assoFileList: any = [];
  speakerFileList : any = [];
  presentationFileList : any =[];
  partnerFileList : any = [];
  supportFIleList :any = [];
  mediaFileList : any = [];

  child_Id :number ;
  @Input('masterName') masterName :any ;
  @Input ('master_id') master_id :number;
  

  constructor(private restAPI : RestApiService,
             private fb : FormBuilder,
             private route : ActivatedRoute) { 

              
              this.masterForm = this.fb.group({
                vc_event_title : ['', ],
                db_registrationTotal_physical : [''],
                db_registrationTotal_virtual : [''],
                vc_description : [''],
                master_event_id :[this.master_id],
                dt_event_end_date :[],

              })

              this.listData = [];
              this.associationForm = this.fb.group({
                ch_name : ['', ],
                vc_img_url : [],
                vc_link : [''],
                event_id : [this.child_Id],
                file : [''],            
              })

             
              
              this.speakerList = [];
              this.speakerForm = this.fb.group({
                vc_speaker_name : ['', ],
                vc_img_link :[],
                file1 : [''],
                vc_designation : [''],
                vc_about_speaker : [''],
                vc_linkedin_link : [''],
                vidio_url : [''],
                presentation : [],
                file2 :[''],
                event_id : [this.child_Id],

              })

              this.partnerList = [];
              this.partnerForm = this.fb.group({
                vc_partner_name :['',],
                vc_partner_logo_link : ['', ],
                vc_partner_website_url : [''],
                vc_partner_type : [''],
                event_id : [this.child_Id],

              })

              this.supportList = [];
              this.supportedbyForm = this.fb.group({
                vc_comapany_name :['',],
                vc_logo_link : [],
                vc_company_url : [''],
                event_id : [this.child_Id],

              })

              this.mediaList = [];
              this.mediaForm = this.fb.group({
                vc_comapany_name :['',],
                vc_logo_link : ['', ],
                vc_company_url : [''],
                event_id : [this.child_Id],
              })
             }
            //  private init_data(): FormGroup{
            //   return this.fb.group({

            //     ch_name:[],
            //     file:[],
            //     vc_link:[],
            //     vc_img_url:[],
            //     event_id:[],

            //   });
            // }



  ngOnInit(): void {
      this.route.queryParams.subscribe(res => {
       
       if('childId' in res){
         alert(res.childId)
         this.child_Id = res.childId;
         this.showChild = false;
       }else if('masterId' in res){
       this.master_id = res.masterId
       }
      })

     
  }

  ngAfterViewInit(){
    
    this.masterForm.controls.master_event_id.setValue(this.master_id)
  }

  

  sendChildData(){

    this.restAPI.postForm('add_child_event/', [this.masterForm.value]).subscribe(res => {
      if('success' in res){
        alert('done');
        this.child_Id = res.id[0];
        this.showChild = false;
        }else{
          alert(res);
        }
    })
  }
 

  showAssociation(){
    this.showAsso = true;
    this.showSpeaker = false;
    this.showSpeaker = false;
    this.showSupport = false;
    this.showMedia = false;
  }

  showSpeakers(){
    this.showSpeaker = true;
    this.showAsso = false;
    this.showPartner = false; 
    this.showSupport = false;
    this.showMedia = false;
  }

  showPartners(){
    this.showPartner = true;
    this.showSpeaker = false;
    this.showAsso = false;
    this.showSupport = false; 
    this.showMedia = false;
  }

  showSupported(){
    this.showSupport = true;
    this.showSpeaker = false;
    this.showAsso = false;
    this.showPartner = false; 
    this.showMedia = false;
  }

  showMedias(){
    this.showMedia = true;
    this.showSupport = false;
    this.showSpeaker = false;
    this.showAsso = false;
    this.showPartner = false; 
  }



// association files

uploadAssociationFile(event) {
  this.assofile = event.target.files[0];
}

addData(){
  this.associationForm.controls.event_id.setValue(this.child_Id);
  this.associationForm.controls.vc_img_url.setValue(this.assofile);
  this.listData.push(this.associationForm.value);
  this.assoFileList.push(this.assofile);  
  // this.associationForm.reset();
}

deleteItem(i){
  alert(i)
  this.listData.splice(i);
  this.assoFileList.splice(i)
}

sendAssociation(){ 
  this.masterForm.controls.master_event_id.setValue(this.master_id)
  let formData = new FormData() ;
  formData.append('value',JSON.stringify(this.listData))

  for(let i=0; i<this.assoFileList.length; i++){

  
  formData.append('file' , this.assoFileList[i])
}
  // console.log(this.assoFileList)

  this.restAPI.uploadForm('add_association/', formData).subscribe(res => {
    if('success' in res){
      alert("done")
      this.listData =[];
      this.assoFileList = [];
    }
    else {
      alert(res)
    }
  })
}

//Speaker functions

uploadSpeakerFile(event){
  this.speakerFile = event.target.files[0];
}

uploadPresentationFile(event){
  this.presentationFile =event.target.files[0];
}


addSpeaker(){

  this.speakerFileList.push(this.speakerFile);
  this.speakerForm.controls.event_id.setValue(this.child_Id);
  this.presentationFileList.push(this.presentationFile);
  this.speakerList.push(this.speakerForm.value);
  this.speakerForm.reset();
}

deleteSpeaker(i){
  alert(i)
  this.speakerList.splice(i);
}

sendSpeaker(){
  var formData = new FormData();
  formData.append('value' , JSON.stringify(this.speakerList))
  for(let i=0; i<this.speakerFileList.length; i++){
  formData.append('Speaker_Image',this.speakerFileList[i]);
}
for(let i=0; i<this.presentationFileList.length; i++){
  formData.append('Presentation_File', this.presentationFileList[i])
}
  
  this.restAPI.uploadForm('add_speakers/', formData).subscribe(res => {
    if('success' in res){
      alert("done")
      this.speakerList =[];
      this.presentationFileList = [];
      this.speakerFileList = [];
    }
    else {
      alert(res)
    }
  })
}


//partner 

uploadPartnerFile(event){
  this.partnerFile = event.target.files[0];
}

addPartner(){
  this.partnerForm.controls.event_id.setValue(this.child_Id)
  this.partnerList.push(this.partnerForm.value);
  this.partnerFileList.push(this.partnerFile)
  this.partnerForm.reset();
}

deletePartner(i){
  alert(i)
  this.partnerList.splice(i);
  this.partnerFileList.splice(i);
}

sendPartner() {
  let formdata = new FormData;
  formdata.append('value' , JSON.stringify(this.partnerList));
  for(let i=0;i <this.partnerList.length; i++){
  formdata.append('file' , this.partnerFileList[i]);
  }
this.restAPI.uploadForm('add_partners/', formdata).subscribe(res => {
    if('success' in res){
      alert("done")
      this.partnerList =[];
      this.partnerFileList = [];
    }
    else {
      alert(res)
    }
  })
}

//SupportedBY

uploadSupporter(event){
  this.supportFile = event.target.files[0];
}

addSupporter(){
  this.supportedbyForm.controls.event_id.setValue(this.child_Id)
  this.supportList.push(this.supportedbyForm.value);
  this.supportFIleList.push(this.supportFile);
  this.supportedbyForm.reset();
}

deleteSupport(i){
  alert(i)
  this.supportList.splice(i);
  this.supportFIleList.splice(i);
}

sendSupport() {
  let formdata = new FormData;
  formdata.append('value', JSON.stringify(this.supportList))
  for(let i=0; i<this.supportList.length; i++)
  {
    formdata.append('file', this.supportFIleList[i]);
  }
  
  this.restAPI.uploadForm('add_supporters/', formdata).subscribe(res => {
    if('success' in res){
      alert("done")
      this.supportList =[];
      this.supportFIleList = [];
    }
    else {
      alert(res)
    }
  })
}

uploadMedia(event){
  this.mediaFile = event.target.files[0];
}

addMedia(){
  this.mediaForm.controls.event_id.setValue(this.child_Id)
  this.mediaList.push(this.mediaForm.value);
  this.mediaFileList.push(this.mediaFile);
  this.mediaForm.reset();
}


deleteMedia(i){
  alert(i)
  this.mediaList.splice(i);
  this.mediaFileList.splice(i);
}

sendMedia(){
  let formdata = new FormData;
  formdata.append('value', JSON.stringify(this.mediaList))
  for(let i=0; i<this.mediaFileList.length;i++){
    formdata.append('file', this.mediaFileList[i])
  }
  
  this.restAPI.uploadForm('add_media_partners/', formdata).subscribe(res => {
    if('success' in res){
      alert("done")
      this.mediaList =[];
      this.mediaFileList = [];
    }
    else {
      alert(res)
    }
  })

}




}