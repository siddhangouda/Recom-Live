import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-speakers',
  templateUrl: './speakers.component.html',
  styleUrls: ['./speakers.component.scss']
})
export class SpeakersComponent implements OnInit {

  @Input() speakersData: any;
  display: boolean = false;
  name :any;
  img : any;
  discription :any;
  about :any;

  constructor() { }

  ngOnInit(): void {
    console.log(this.speakersData);
  }

    showDialog(i) {
        this.display = true;       
        this.name = this.speakersData[i].vc_speaker_name; 
        this.discription = this.speakersData[i].vc_designation;
        this.img = this.speakersData[i].vc_img_link;
        this.about = this.speakersData[i].vc_about_speaker

        console.log(i)
    }

}
