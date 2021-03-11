import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-associations',
  templateUrl: './associations.component.html',
  styleUrls: ['./associations.component.scss']
})
export class AssociationsComponent implements OnInit {

  @Input()associationsData :any;

  constructor() { }

  ngOnInit(): void {
  }

}
