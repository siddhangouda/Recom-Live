import { Component, OnInit } from '@angular/core';
import AOS from 'aos'

@Component({
  selector: 'app-aboutheader',
  templateUrl: './aboutheader.component.html',
  styleUrls: ['./aboutheader.component.scss']
})
export class AboutheaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    AOS.init();
  }

}
