import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-association-partners',
  templateUrl: './association-partners.component.html',
  styleUrls: ['./association-partners.component.scss']
})
export class AssociationPartnersComponent implements OnInit {

  @Input()associationsData :any;

  constructor() { }

  ngOnInit(): void {

  }

}
