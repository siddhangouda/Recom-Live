import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidationErrors, ValidatorFn } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RestApiService } from 'src/app/shared/rest-api.service';


@Component({
selector: 'app-speaker',
templateUrl: './speaker.component.html',
styleUrls: ['./speaker.component.scss']
})
export class SpeakerComponent implements OnInit {

imageSrc: string;
emailRegEx = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';
profileForm = new FormGroup({
vc_speaker_name: new FormControl('',[Validators.required,Validators.pattern('^[a-zA-Z ]*$')]),
vc_speaker_organization : new FormControl('',Validators.required),
vc_speaker_city : new FormControl('',Validators.required),
vc_speaker_state : new FormControl('',Validators.required),
vc_speaker_contact : new FormControl('',[Validators.required,Validators.minLength(4)]),
vc_speaker_industry : new FormControl('',Validators.required),
vc_speaker_designation : new FormControl('',Validators.required),
vc_email : new FormControl('',[Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]),
vc_linkedin_link : new FormControl('',Validators.required),
vc_presentation_topic : new FormControl('',Validators.required),
vc_about_speaker : new FormControl('',Validators.required),
filepath : new FormControl('',Validators.required),
check1 : new FormControl(false,Validators.requiredTrue),
check2 : new FormControl(false,Validators.requiredTrue),
event_name: new FormControl('')


});



image: any;
fname: any;

constructor(private restApi:RestApiService,private route: ActivatedRoute) {

}

ngOnInit(): void {

this.route.params.subscribe(params => {
this.profileForm.controls['event_name'].setValue(params.id);

})
}

onFileChange(event){

this.imageSrc='';
const reader = new FileReader();

this.fname=event.target.files[0].name;

const [file]=event.target.files
reader.readAsDataURL(file);




reader.onload = () => {

this.imageSrc = reader.result as string;



};

this.image = event.target.files[0]

}

onSubmit() {
// TODO: Use EventEmitter with form value
// if (this.profileForm.dirty && this.profileForm.valid) {
// alert(
// ''
// );

const formData = new FormData();

formData.append('value',JSON.stringify(this.profileForm.value))
formData.append('file',this.image)



this.restApi.uploadForm('add_registered_speakers/',formData).subscribe(res =>{
if(res.success){
alert('successfully submitted')
}

})

// }

}

get vc_speaker_name() { return this.profileForm.get('vc_speaker_name'); }
get vc_speaker_organization(){ return this.profileForm.get('vc_speaker_organization'); }
get vc_speaker_city(){ return this.profileForm.get('vc_speaker_city'); }
get vc_speaker_state(){ return this.profileForm.get('vc_speaker_state'); }
get vc_speaker_contact() { return this.profileForm.get('vc_speaker_contact'); }
get vc_speaker_industry() { return this.profileForm.get('vc_speaker_industry'); }
get vc_speaker_designation() { return this.profileForm.get('vc_speaker_designation'); }
get vc_email() { return this.profileForm.get('vc_email'); }
get vc_linkedin_link() { return this.profileForm.get('vc_linkedin_link'); }
get vc_presentation_topic() { return this.profileForm.get('vc_presentation_topic'); }
get vc_about_speaker() { return this.profileForm.get('vc_about_speaker'); }
}