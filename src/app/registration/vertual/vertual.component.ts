import { Component, OnInit,Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RestApiService } from 'src/app/shared/rest-api.service';
import { ChangeDetectorRef } from '@angular/core';
import { UtilService } from 'src/app/shared/util.service';

declare let Razorpay: any;


@Component({
  selector: 'app-vertual',
  templateUrl: './vertual.component.html',
  styleUrls: ['./vertual.component.scss']
})
export class VertualComponent implements OnInit {

  @Input() id:any

  name = 'Angular';
  response;
  razorpayResponse;
  showModal = false;

  firstName:any;
  lastName:any;
  companyName:any;
  designation:any;
  email:any;
  phone:any;
  city:any;
  state:any;
  amount: any =2000;
  GST:any;
  coupon:any;
  display: boolean = false;
  payment: boolean = false;
  content:any;

  constructor(private restAPI : RestApiService,
    private razorpayService: UtilService, private cd:  ChangeDetectorRef) { }

  ngOnInit(): void {

    this.razorpayService
    .lazyLoadLibrary('https://checkout.razorpay.com/v1/checkout.js')
    .subscribe();
  }

  RAZORPAY_OPTIONS = {
    "key": "rzp_live_DGFQWbSNL9pUw4",
    "amount": "1",
    "name": "Novopay",
    "order_id": "",
    "description": "Load Wallet",
    "image": "https://livestatic.novopay.in/resources/img/nodeapp/img/Logo_NP.jpg",
    "prefill": {
      "name": "",
      "email": "test@test.com",
      "contact": "",
      "method": ""
    },
    "modal": {},
    "theme": {
      "color": "#0096C5"
    }
  };

  
  showDialog() {
    this.display = true;
}

public proceed() {
  this.RAZORPAY_OPTIONS.amount = 1 + '00';

  // binding this object to both success and dismiss handler
  this.RAZORPAY_OPTIONS['handler'] = this.razorPaySuccessHandler.bind(this);

  // this.showPopup();

  let razorpay = new Razorpay(this.RAZORPAY_OPTIONS)
  razorpay.open();
}

public razorPaySuccessHandler(response) {
  console.log(response);
  this.payment = true;
  this.razorpayResponse = "Thanks for the payment your payment id is :" + response.razorpay_payment_id;
  this.cd.detectChanges();
}


  vertualData(value, form :NgForm){
    console.log(JSON.stringify(value));
    this.restAPI.postForm('virtual_register/',value).subscribe(res =>{
      alert(res);
    })
    form.reset({total_amount: 2000,register_for : 1 });
    this.proceed()
  }

  addCoupon(coupon){
    this.restAPI.getListbyIdC(this.id,coupon,'coupon/','vertual').subscribe(res =>{
      
      console.log(typeof(res));
      console.log(res);
      if ("Error" in res)
      {
      this.content =  res.Error;
      this.showDialog();
      }
      else{
        this.content =  'coupon added succesfully please check your new amount';
        this.amount = res.new_amount;
        this.showDialog();
      }
    })
  }

}