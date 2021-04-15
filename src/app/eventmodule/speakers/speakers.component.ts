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

  constructor() { }

  ngOnInit(): void {
  }

    showDialog(i) {
        this.display = true;       
        this.name = this.speakersData[i].vc_speaker_name; 
        this.discription = this.speakersData[i].vc_designation;
        this.img = this.speakersData[i].vc_img_link;
        
    }
}
