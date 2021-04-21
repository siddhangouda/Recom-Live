import { Component, OnInit, Input } from '@angular/core';
import { FormArray, FormGroup, Validators, FormBuilder, NgForm, FormControl } from '@angular/forms';
import { RestApiService } from 'src/app/shared/rest-api.service';
import { ChangeDetectorRef } from '@angular/core';
import { UtilService } from 'src/app/shared/util.service';
import { MessageService, PrimeNGConfig } from 'primeng/api';
import { contains } from 'jquery';




declare let Razorpay: any;

@Component({
  selector: 'app-coference',
  templateUrl: './coference.component.html',
  styleUrls: ['./coference.component.scss'],
  providers: [MessageService]
})
export class CoferenceComponent implements OnInit {

  @Input() id: any
  // child_id1: any;

  checkForm: FormGroup;
  // child data
  childData: any;
  formData: []
  name = 'Angular';
  response;
  razorpayResponse;
  showModal = false;
  addOns = false;
  couponDiscount: any;
  successCoupon: any;


  payableAmount: any;
  discountAmount: any;
  totalAmount: any;
  selectedCheckBox = []

  firstName: any;
  lastName: any;
  companyName: any;
  designation: any;
  email: any;
  phone: any;
  city: any;
  state: any;
  amount: any;
  GST: any;
  coupon: any;
  display: boolean = false;
  payment: boolean = false;
  content: any;

  constructor(private restAPI: RestApiService,
    private fb: FormBuilder,
    private razorpayService: UtilService, private cd: ChangeDetectorRef, private MessageService: MessageService,
    private primengConfig: PrimeNGConfig) {
    this.checkForm = this.fb.group({
    })

  }

  ngOnInit() {

    this.primengConfig.ripple = true;
    this.restAPI.getListbyId(this.id, 'child_event_data/').subscribe(res => {

      this.childData = res[0].child_events;
      this.selectedCheckBox.push(this.childData[0].id)
      this.amount = this.childData[0].db_registrationTotal_physical;

      this.checkForm = this.fb.group(this.childData.map(x => this.fb.control
        ({
          name: [false]
        }
        )
      )
      )
      for (let i = 0; i < this.childData.length; i++) {
        this.checkForm.controls[i].setValue(false)
      }
      this.checkForm.controls[0].setValue(true)

      this.restAPI.getListbyIdC([this.childData[0].id], '', 'event_discount/', 'physical', '').subscribe(res => {
        this.totalAmount = res.total_amount;
        this.discountAmount = res.saved_amount;
        this.payableAmount = res.discount_amount;
      })

    })

    

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
      "email": "",
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
    this.payment = true;
    this.razorpayResponse = "Thanks for the payment your payment id is :" + response.razorpay_payment_id, response.razorpay_order_id, response.razorpay_signature;
    this.cd.detectChanges();
    const data = {
      "razorpay_payment_id": response.razorpay_payment_id,
      "razorpay_order_id": response.razorpay_order_id,
      "razorpay_signature": response.razorpay_signature
    }
    this.restAPI.postForm('payment_status/', data).subscribe(res => {
      alert(res)
    })
  }


  conferenceData(value, form: NgForm) {
    console.log("ssss",this.email)
    this.RAZORPAY_OPTIONS.prefill.email = this.email;
    this.RAZORPAY_OPTIONS.prefill.name = this.firstName
    this.RAZORPAY_OPTIONS.prefill.contact = "91" + this.phone;
    this.restAPI.postForm('conference_register/', value).subscribe(res => {
      alert(res);
    })
    form.reset({ total_amount: this.totalAmount, register_for: this.id });
    this.addOnsFunction()
  }



  addCoupon(coupon) {

    this.restAPI.getListbyIdC(this.id, coupon, 'coupon/', 'physical', this.selectedCheckBox).subscribe(res => {

      if ("Error" in res) {
        this.content = res.Error;
        // this.showDialog();
        this.MessageService.add({ key: "bc", severity: 'error', summary: ' Error ', detail: this.content });
      }
      else {
        this.successCoupon = coupon
        this.content = 'coupon added succesfully please check your new amount';
        this.couponDiscount = res.saved_amount;
        this.payableAmount = res.new_amount;
        this.MessageService.add({ key: "bc", severity: 'success', summary: ' Success ', detail: "coupon added succesfully" });
        // this.showDialog();
      }
    })
  }

  addOnsFunction() {

    this.addOns = true;

  }



  onSubmit() {
    // TODO: Use EventEmitter with form value
    alert("button clicked")
  }

  onSubmit1() {
    this.selectedCheckBox = [];
    this.couponDiscount = ""
    
    if (this.checkForm.value[0] == true) {
      this.selectedCheckBox.push(this.childData[0].id);
    }
    if (this.checkForm.value[1] == true) {
      this.selectedCheckBox.push(this.childData[1].id)
    }
    if (this.checkForm.value[2] == true) {
      this.selectedCheckBox.push(this.childData[2].id)
    }



    this.selectedCheckBox = this.selectedCheckBox;


    this.restAPI.getListbyIdC(this.selectedCheckBox, '', 'event_discount/', 'physical', '').subscribe(res => {
      this.totalAmount = res.total_amount;
      this.discountAmount = res.saved_amount;
      this.payableAmount = res.discount_amount;
    })

  }

  payNow() {
    this.restAPI.getListbyCoupon(this.selectedCheckBox, 'payment/', this.successCoupon, 'physical').subscribe(res => {
        this.RAZORPAY_OPTIONS.amount = res.amount;
      this.RAZORPAY_OPTIONS.order_id = res.order_id;
      this.RAZORPAY_OPTIONS.key = res.key;
      this.proceed()
    })
  }

}