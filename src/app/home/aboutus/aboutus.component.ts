import { Component, OnInit, ViewChild ,ElementRef, HostListener} from '@angular/core';
import AOS from 'aos'
import { trigger, state, style, animate, transition } from '@angular/animations';


const style1 = style({
  opacity: 1,
  transform: "translateY(0)"
})

const style2 = style({
  opacity: 0,
  transform: "translateY(200%)"
})

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.scss'],
  animations: [
    trigger('foobar', [
      state('show', style1),
      state('hide', style2),
      transition('show => hide', animate('700ms ease-out')),
      transition('hide => show', animate('700ms ease-in'))
    ])
  ]
})
export class AboutusComponent implements OnInit {


  state = 'hide'
  num = 0;

  @ViewChild('target') target :any;
  
  constructor(private el:ElementRef<HTMLElement>) { }

  ngOnInit(): void {

    AOS.init();

  }

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const componentPosition = this.el.nativeElement.offsetTop
    const scrollPosition = window.pageYOffset
    if (scrollPosition >= componentPosition - 250) {
      this.state = 'show'

    } else {
      this.state = 'hide'
    }

  }

}
