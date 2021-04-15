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
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3
    },
    {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2
    },
    {
        breakpoint: '660px',
        numVisible: 1,
        numScroll: 1
    }
  ];
	}
  
  ngOnInit(): void {
  }

}
