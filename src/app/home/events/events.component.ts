import { Component, OnInit } from '@angular/core';
import { RestApiService } from 'src/app/shared/rest-api.service';
import { forkJoin } from 'rxjs'
import { Router } from '@angular/router';



@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  upcomingAPI: any;
  pastAPI: any;
  upcomingData: any;
  pastData: any;
  encodedId:any;

  constructor(private restApi: RestApiService,
              private router : Router) {

    this.upcomingAPI = this.restApi.getList('date_filter/upcoming3/');
    this.pastAPI = this.restApi.getList('date_filter/past3/');
  }

  ngOnInit(): void {

    forkJoin([this.upcomingAPI, this.pastAPI]).subscribe(responce => {
      this.upcomingData = responce[0];
      this.pastData = responce[1];
      console.log(this.upcomingData = this.upcomingData.upcoming_events)
      console.log(this.pastData = this.pastData.past_events)

    })


  }

  goToEvents(selectedValue){
    this.router.navigate(['/ourevents'], { queryParams: { selected: selectedValue} });
  }

  goToEvent(id){
    this.encodedId = id;
    console.log("encode", btoa(this.encodedId));
    this.router.navigate(['/events'], { queryParams: { id: btoa(this.encodedId) } });
  }


}
