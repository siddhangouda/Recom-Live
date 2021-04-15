import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestApiService } from 'src/app/shared/rest-api.service'

@Component({
  selector: 'app-upcoming-events',
  templateUrl: './upcoming-events.component.html',
  styleUrls: ['./upcoming-events.component.scss']
})
export class UpcomingEventsComponent implements OnInit {

  upcomingData :any;
  encodedId :any;
  constructor(private restApi : RestApiService,
              private router :Router) { }

  ngOnInit(): void {

    this.restApi.getList('date_filter/upcomingall/').subscribe(responce =>{
      this.upcomingData = responce;
      this.upcomingData = this.upcomingData.upcoming_events_all;
    })
  }

  goToEvent(id){
    this.router.navigate(['/events',id]);
  }


}
