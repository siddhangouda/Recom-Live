import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-media-partners',
  templateUrl: './media-partners.component.html',
  styleUrls: ['./media-partners.component.scss']
})
export class MediaPartnersComponent implements OnInit {

  @Input() mediaData :any;

  constructor() { }

  ngOnInit(): void {
  }

}
