import { Component, OnInit } from '@angular/core';
import { RestApiService } from 'src/app/shared/rest-api.service'

@Component({
  selector: 'app-upcoming-events',
  templateUrl: './upcoming-events.component.html',
  styleUrls: ['./upcoming-events.component.scss']
})
export class UpcomingEventsComponent implements OnInit {

  upcomingData :any;

  constructor(private restApi : RestApiService) { }

  ngOnInit(): void {

    this.restApi.getList('date_filter/upcomingall/').subscribe(responce =>{
      this.upcomingData = responce;
      console.log(this.upcomingData = this.upcomingData.upcoming_events);
    })
  }

}
