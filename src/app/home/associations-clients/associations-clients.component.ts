import { Component, OnInit } from '@angular/core';
import { RestApiService } from 'src/app/shared/rest-api.service';
import AOS from 'aos'


@Component({
selector: 'app-associations-clients',
templateUrl: './associations-clients.component.html',
styleUrls: ['./associations-clients.component.scss']
})
export class AssociationsClientsComponent implements OnInit {

associationData: any ;
govt: any;
clients: any;

constructor(private restApi: RestApiService) {

}
ngOnInit(): void {

this.restApi.getList('govt_association/').subscribe(responce => {
this.govt=responce.govt_associations;
this.associationData=responce.associations;
this.clients=responce.clients


// .reduce((acc, val) => {
// if (!acc.find(el => el.vc_img_url === val.vc_img_url)) {
// acc.push(val);
// }
// return acc;
// }, []);
})

AOS.init();

}

}