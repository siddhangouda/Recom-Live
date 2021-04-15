import { Component, OnInit, Input } from '@angular/core';
import AOS from 'aos'
@Component({
  selector: 'app-about-event',
  templateUrl: './about-event.component.html',
  styleUrls: ['./about-event.component.scss']
})
export class AboutEventComponent implements OnInit {

  @Input() aboutBg :any;
  @Input('disc') disc :any;

  constructor() { }

  ngOnInit(): void {

    AOS.init();
  }

}
