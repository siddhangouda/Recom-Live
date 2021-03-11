import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-ourpartners',
  templateUrl: './ourpartners.component.html',
  styleUrls: ['./ourpartners.component.scss']
})
export class OurpartnersComponent implements OnInit {

  @Input() public ourPartnersData :any;

  constructor() { }

  ngOnInit(): void {
  }

}
