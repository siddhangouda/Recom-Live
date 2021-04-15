import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../shared/rest-api.service';

@Component({
selector: 'app-footer',
templateUrl: './footer.component.html',
styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

constructor(private restAPI : RestApiService) { }

ngOnInit(): void {
}

getInTouchData(formData){

this.restAPI.postForm("get_in_touch/", formData).subscribe(res => {
alert(res);
})
}

}