import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-about-event',
  templateUrl: './about-event.component.html',
  styleUrls: ['./about-event.component.scss']
})
export class AboutEventComponent implements OnInit {

  @Input() aboutBg :any;

  constructor() { }

  ngOnInit(): void {
    console.log(this.aboutBg);
  }

}
