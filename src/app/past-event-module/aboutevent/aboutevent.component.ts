import { Component, OnInit ,Input} from '@angular/core';
import AOS from 'aos'

@Component({
  selector: 'app-aboutevent',
  templateUrl: './aboutevent.component.html',
  styleUrls: ['./aboutevent.component.scss']
})
export class AbouteventComponent implements OnInit {


  @Input() aboutBg :any;
  @Input('disc') disc :any;

  constructor() { }

  ngOnInit(): void {
    AOS.init()
  }

}
