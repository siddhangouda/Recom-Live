import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-media-partners',
  templateUrl: './media-partners.component.html',
  styleUrls: ['./media-partners.component.scss']
})
export class MediaPartnersComponent implements OnInit {
  @Input() mediaData:any;
  responsiveOptions:any;

	constructor() { 
    this.responsiveOptions = [
      {
          breakpoint: '100%',
          numVisible: 3,
          numScroll: 3
      },
      {
          breakpoint: '75%',
          numVisible: 2,
          numScroll: 2
      },
      {
          breakpoint: '25%',
          numVisible: 1,
          numScroll: 1
      }
  ];
	}
  
  ngOnInit(): void {
  }

}
