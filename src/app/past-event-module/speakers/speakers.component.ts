import { Component, OnInit ,Input} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-speakers',
  templateUrl: './speakers.component.html',
  styleUrls: ['./speakers.component.scss']
})
export class SpeakersComponent implements OnInit {

  display: boolean = false;
  name :any;
  img : any;
  discription :any;
  about :any;
  video :any ;
  ppt :any;
  videoStatus : any;
  safeURL: any;

  @Input() speakersData: any;
  

  constructor(private _sanitizer: DomSanitizer) { 
    this.safeURL = this._sanitizer.bypassSecurityTrustUrl(this.video);
  }

  ngOnInit(): void {
  }

  showDialog(i) {
    this.display = true;       
    this.name = this.speakersData[i].vc_speaker_name; 
    this.discription = this.speakersData[i].vc_designation;
    this.img = this.speakersData[i].vc_img_link;
    this.about = this.speakersData[i].vc_about_speaker

    console.log(i)
}

showVideo(i){
  this.videoStatus =true;
  this.video = this.speakersData[i].vidio_url;
  
  this.ppt = this.speakersData[i].presentation; 
}

sanitized(video)
{
  return this._sanitizer.bypassSecurityTrustResourceUrl(video)
}

}
