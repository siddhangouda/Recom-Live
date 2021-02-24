import { Component, OnInit ,Input } from '@angular/core';

@Component({
  selector: 'app-our-partners',
  templateUrl: './our-partners.component.html',
  styleUrls: ['./our-partners.component.scss']
})
export class OurPartnersComponent implements OnInit {

  @Input() ourPartnersData :any;
  constructor() { }

  ngOnInit(): void {
  }

}
