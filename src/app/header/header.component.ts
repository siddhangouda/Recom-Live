import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { event } from 'jquery';
import { fromEvent } from 'rxjs'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

 
@ViewChild('ttt') cc : Element
  constructor( ) { }

 

  ngOnInit(): void {

  

    
  }

  @HostListener('click', ['$event']) /* note args array */
  onClick(event) {
    event.preventDefault();
  }


  scroll(): void {
  document.getElementById("footer").scrollIntoView({ behavior: "smooth", block: "start" });

}



}