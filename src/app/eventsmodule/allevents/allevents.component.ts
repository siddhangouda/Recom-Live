import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-allevents',
  templateUrl: './allevents.component.html',
  styleUrls: ['./allevents.component.scss']
})
export class AlleventsComponent implements OnInit {

  upComing: boolean = true;
  past: boolean = true;

  constructor(private activeRoute: ActivatedRoute,
    private route: Router) { }

  ngOnInit(): void {
    this.activeRoute.queryParams.subscribe(param => {
      
      if (param.selected == "past") {
        this.upComing = false;
        this.past = true;
      } else if (param.selected == "upcoming"){
        this.past = false;
        this.upComing = true;
      } else {
        this.past = true;
        this.upComing = true;
      }
    });


  }

  showAll() {
    this.upComing = true;
    this.past = true;
  }

}
