import { Component, OnInit } from '@angular/core';
import { RestApiService } from 'src/app/shared/rest-api.service';
import AOS from 'aos'

@Component({
  selector: 'app-govt',
  templateUrl: './govt.component.html',
  styleUrls: ['./govt.component.scss']
})
export class GovtComponent implements OnInit {

  associationData: any ;

  constructor(private restApi: RestApiService) {

  }

  ngOnInit(): void {

    this.restApi.getList('association_list_order/').subscribe(responce => {
      this.associationData = responce.associations;
      console.log(this.associationData);
    })

    AOS.init();

  }

}
