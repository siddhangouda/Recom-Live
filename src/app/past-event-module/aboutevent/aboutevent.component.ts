import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-aboutevent',
  templateUrl: './aboutevent.component.html',
  styleUrls: ['./aboutevent.component.scss']
})
export class AbouteventComponent implements OnInit {


  @Input() aboutBg :any;
  constructor() { }

  ngOnInit(): void {
  }

}
