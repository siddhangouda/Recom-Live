import { Component, OnInit,Input } from '@angular/core';
import { FormArray, FormGroup, Validators, FormBuilder, NgForm } from '@angular/forms';
import { RestApiService } from 'src/app/shared/rest-api.service';
import { ChangeDetectorRef } from '@angular/core';
import { UtilService } from 'src/app/shared/util.service';
import {MessageService, PrimeNGConfig} from 'primeng/api';


declare let Razorpay: any;


@Component({
  selector: 'app-vertual',
  templateUrl: './vertual.component.html',
  styleUrls: ['./vertual.component.scss'],
  providers :[MessageService]
})
export class VertualComponent implements OnInit {

  @Input() id:any

  checkForm : FormGroup;
  // child data
  childData : any ; 
  formData : []
  name = 'Angular';
  response;
  razorpayResponse;
  showModal = false;
  addOns =false;
  couponDiscount : any;
  successCoupon : any;


  payableAmount : any;
  discountAmount :any;
  totalAmount  :any;
  selectedCheckBox = [1];

  firstName:any;
  lastName:any;
  companyName:any;
  designation:any;
  email:any;
  phone:any;
  city:any;
  state:any;
  amount:any ;
  GST:any;
  coupon:any;
  display: boolean = false;
  payment: boolean = false;
  content:any;

  constructor(private restAPI : RestApiService,
    private fb : FormBuilder,
    private razorpayService: UtilService, private cd:  ChangeDetectorRef, private MessageService:MessageService,
    private primengConfig: PrimeNGConfig) { 
      

      this.checkForm=this.fb.group({
        1:[true],
        2:[''],
        3:['']   
    })
   
  } 
    
  ngOnInit() {
    this.primengConfig.ripple = true;
    // this.checkForm.setValue(["true","", ""]);
    this.restAPI.getList('child_event_data/').subscribe(res =>{
      console.log("daaa",res);

      this.childData  = res.child_events;
      this.amount = this.childData[0].db_registrationTotal;
      
    })

    

    this.restAPI.getListbyId([1],'event_discount/').subscribe(res =>{
      console.log(res);
      this.totalAmount = res.total_amount;
      this.discountAmount = res.saved_amount;
      this.payableAmount = res.discount_amount;
    })

console.log(this.checkForm)
    this.razorpayService.lazyLoadLibrary('https://checkout.razorpay.com/v1/checkout.js').subscribe();
  }



  RAZORPAY_OPTIONS = {
    "key": "",
    "amount": "",
    "name": "Recommerceeco",
    "order_id": "",
    "description": "Load Wallet",
    "image": "./assets/images/recommercelogo.png",
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
  // this.RAZORPAY_OPTIONS.amount = 1 + '00';

  // binding this object to both success and dismiss handler
  this.RAZORPAY_OPTIONS['handler'] = this.razorPaySuccessHandler.bind(this);

  // this.showPopup();

  let razorpay = new Razorpay(this.RAZORPAY_OPTIONS)
  razorpay.open();
}

public razorPaySuccessHandler(response) {
  console.log("payment responces",response);
  this.payment = true;
  this.razorpayResponse = "Thanks for the payment your payment id is :" + response.razorpay_payment_id , response.razorpay_order_id, response.razorpay_signature;
  this.cd.detectChanges();
  const data = {
   "razorpay_payment_id" : response.razorpay_payment_id ,
   "razorpay_order_id": response.razorpay_order_id,
   "razorpay_signature" : response.razorpay_signature
  }
  this.restAPI.postForm('payment_status/',data ).subscribe(res => {
    alert(res)
  })
}


  vertualData(value, form :NgForm){
    // console.log(JSON.stringify(value));
    // this.restAPI.postForm('virtual_register/',value).subscribe(res =>{
    //   alert(res);
    // })
    // form.reset({total_amount: 2000,register_for : 1 });
    this.addOnsFunction()
    // this.proceed()
  }



  addCoupon(coupon){

    console.log("check now",this.selectedCheckBox);
    this.restAPI.getListbyIdC(this.id,coupon,'coupon/','vertual',this.selectedCheckBox).subscribe(res =>{
      
      console.log(typeof(res));
      console.log(res);
      if ("Error" in res)
      {
      this.content =  res.Error;
      // this.showDialog();
      this.MessageService.add({key:"bc" , severity:'error', summary:' Error ', detail:this.content});
      }
      else{
        this.successCoupon = coupon
        this.content =  'coupon added succesfully please check your new amount';
        this.couponDiscount = res.saved_amount;
        this.payableAmount = res.new_amount;
        this.showDialog();
      }
    })
  }

  addOnsFunction(){

    this.addOns = true;

  }

  

  onSubmit() {
    // TODO: Use EventEmitter with form value
    alert("button clicked")
    console.log(this.checkForm.value);
  }

  onSubmit1(){

  this.selectedCheckBox =[];
  this.couponDiscount = ""
  console.log(this.checkForm.value);
  if(this.checkForm.value[1] == true){
    this.selectedCheckBox.push(1);
  }
  if(this.checkForm.value[2] == true){
    this.selectedCheckBox.push(2)
  }
  if(this.checkForm.value[3] == true){
    this.selectedCheckBox.push(3)
  }


   console.log(this.selectedCheckBox)

   this.selectedCheckBox = this.selectedCheckBox;
   

   this.restAPI.getListbyId(this.selectedCheckBox,'event_discount/').subscribe(res =>{
     console.log(res);
     this.totalAmount = res.total_amount;
     this.discountAmount = res.saved_amount;
     this.payableAmount =res.discount_amount;
   })


  }

  payNow(){
     console.log(this.selectedCheckBox)
    this.restAPI.getListbyCoupon(this.selectedCheckBox, 'payment/', this.successCoupon ).subscribe( res => {
      console.log("payment responce1", res),
      this.RAZORPAY_OPTIONS.amount = res.amount ;
      this.RAZORPAY_OPTIONS.order_id = res.order_id;
      this.RAZORPAY_OPTIONS.key = res.key;
      this.proceed()
    })
  }

}