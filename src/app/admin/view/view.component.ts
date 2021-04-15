import { Component, OnInit } from '@angular/core';
import { RestApiService } from 'src/app/shared/rest-api.service';
import { forkJoin } from 'rxjs'
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { query } from '@angular/animations';
import {ConfirmationService} from 'primeng/api';
// import { timeStamp } from 'console';


@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss'],
  providers :[ConfirmationService]
})
export class ViewComponent implements OnInit {

  upcomingAPI: any;
  pastAPI: any;
  upcomingData: any;
  pastData: any;
  encodedId:any;

  constructor(private restApi: RestApiService,
    private router : Router,
    private confirmationService : ConfirmationService
    ) { 

      this.upcomingAPI = this.restApi.getList('date_filter/upcomingall/');
    this.pastAPI = this.restApi.getList('date_filter/pastall/');
    }

  ngOnInit(): void {

    forkJoin([this.upcomingAPI, this.pastAPI]).subscribe(responce => {
      this.upcomingData = responce[0];
      this.pastData = responce[1];
      this.upcomingData = this.upcomingData.upcoming_events_all
      this.pastData = this.pastData.past_events_all

    })

  }

  editEvent(id){
    this.router.navigate(['admin/edit', { queryParams: id}]);
  }

  createEvent(){
    this.router.navigate(['admin/create'])
  }

  deleteEvent(id){
    alert("called")
  }

  confirm(id) {
    this.confirmationService.confirm({
        message: 'Are you sure that you want to perform this action?',
        accept: () => {
            //Actual logic to perform a confirmation
            this.restApi.postForm('delete_master_event/',{"id": id}).subscribe(res=> {
              alert(res)
            })
         location.reload();
        }
    });
}

listSpeakers(){
  this.router.navigate(['admin/listSpeakers'])
  
}

viewleads(){
  this.router.navigate(['admin/viewleads'])
  
}

coupon(){
  this.router.navigate(['admin/coupon'])
}

}
