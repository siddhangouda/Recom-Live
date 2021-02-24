import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-supported-by',
  templateUrl: './supported-by.component.html',
  styleUrls: ['./supported-by.component.scss']
})
export class SupportedByComponent implements OnInit {

  @Input() supportedByData : any;
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

  ngOnInit() {
      console.log("supportedby", this.supportedByData)
    }
}