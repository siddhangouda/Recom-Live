import { Component, OnInit } from '@angular/core';
import { RestApiService } from 'src/app/shared/rest-api.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  galleryData:any;
  mainBg: any;

  constructor(private restAPI : RestApiService) { }

  ngOnInit(): void {

    this.restAPI.getList('gallery/').subscribe(res => {
      this.galleryData = res.gallary;
      this.mainBg = res.gallary[18].images;
    })

  }

}
