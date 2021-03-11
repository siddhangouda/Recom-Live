import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-supportedby',
  templateUrl: './supportedby.component.html',
  styleUrls: ['./supportedby.component.scss']
})
export class SupportedbyComponent implements OnInit {

  @Input() supportedByData : any;

  constructor() { }

  ngOnInit(): void {
  }

}
