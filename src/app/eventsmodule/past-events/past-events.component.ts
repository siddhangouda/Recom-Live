import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestApiService } from 'src/app/shared/rest-api.service'

@Component({
  selector: 'app-past-events',
  templateUrl: './past-events.component.html',
  styleUrls: ['./past-events.component.scss']
})
export class PastEventsComponent implements OnInit {

  pastData :any;
  encodedId: any;

  constructor(private restApi : RestApiService,
              private router :Router) { }

  ngOnInit(): void {

    this.restApi.getList('date_filter/pastall/').subscribe(responce =>{
      this.pastData = responce;
      this.pastData = this.pastData.past_events_all;
    })
  }

  goToPastEvent(id){
    this.router.navigate(['/pastEvents',id]);
  }

}
