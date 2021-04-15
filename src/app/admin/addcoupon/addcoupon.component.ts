import { NgStyle } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RestApiService } from 'src/app/shared/rest-api.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

interface City {
name: string,
code: string
}
@Component({
selector: 'app-addcoupon',
templateUrl: './addcoupon.component.html',
styleUrls: ['./addcoupon.component.scss']
})
export class AddcouponComponent implements OnInit {

events:any;
myform: FormGroup;


constructor(private restApi:RestApiService) {

}
coupons:any;
ngOnInit(): void {
this.restApi.getList('list_master_event/').subscribe(res =>{
this.events=res;
})

this.myform = new FormGroup({
master_event : new FormControl('', Validators.required),
event_type : new FormControl('', Validators.required),
coupon_code : new FormControl('', Validators.required),
discount_percentage : new FormControl('', Validators.required),

});

this.get_couponData();

}
get_couponData() {
this.restApi.getList('list_coupons/').subscribe(res =>{
this.coupons=res;

$(function () {
$('#user-table').DataTable({
responsive: {
details: false
}
});
});



})
}


onSubmit(){
this.restApi.postForm('add_coupons/',[this.myform.value]).subscribe(res =>{
console.log(res)


})

this.restApi.getList('list_coupons/').subscribe(res =>{
this.coupons=res;
$(function () {
$('#user-table').DataTable();
});
window.location.reload()


})
}

delete(id){
this.restApi.getListbyId(id,'delete_coupons/').subscribe(res =>{
window.location.reload()
})
}

}