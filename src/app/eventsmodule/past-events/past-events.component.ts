import { Component, OnInit } from '@angular/core';
import { RestApiService } from 'src/app/shared/rest-api.service'

@Component({
  selector: 'app-past-events',
  templateUrl: './past-events.component.html',
  styleUrls: ['./past-events.component.scss']
})
export class PastEventsComponent implements OnInit {

  pastData :any;

  constructor(private restApi : RestApiService) { }

  ngOnInit(): void {

    this.restApi.getList('date_filter/pastall/').subscribe(responce =>{
      this.pastData = responce;
      console.log(this.pastData = this.pastData.past_events);
    })
  }

}
