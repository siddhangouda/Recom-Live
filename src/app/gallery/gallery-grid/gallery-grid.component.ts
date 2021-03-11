import { Component, Input, OnInit } from '@angular/core';
import AOS from 'aos'

@Component({
  selector: 'app-gallery-grid',
  templateUrl: './gallery-grid.component.html',
  styleUrls: ['./gallery-grid.component.scss']
})
export class GalleryGridComponent implements OnInit {

  @Input('galleryData')  galleryData :any;
  constructor() { }

  ngOnInit(): void {
    AOS.init();
  }

}
