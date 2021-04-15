import { Component, OnInit } from '@angular/core';
import { RestApiService } from 'src/app/shared/rest-api.service';
import AOS from 'aos'
import {UniquePipe} from 'src/app/shared/unique.pipe'
import { Router } from '@angular/router';

@Component({
  selector: 'app-govt',
  templateUrl: './govt.component.html',
  styleUrls: ['./govt.component.scss'], 
  providers: [UniquePipe]
})
export class GovtComponent implements OnInit {

  associationData: any ;

  constructor(private restApi: RestApiService,
              private unique : UniquePipe,
              private router : Router) {

  }

  ngOnInit(): void {

    this.restApi.getList('govt_association/').subscribe(responce => {
      this.associationData=responce.govt_associations

      let count=24-responce.govt_associations.length;
      console.log('count',count)
      
      for(let i=0;i<count;i++){
      this.associationData.push(responce.associations[i])
      }
    })

    AOS.init();

  }

  viewAll(){
    this.router.navigate(['asso-clients-govt']);
    }

}
