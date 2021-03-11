import { Component, OnInit , Input} from '@angular/core';
import { NgForm } from '@angular/forms';
import { RestApiService } from 'src/app/shared/rest-api.service';

@Component({
  selector: 'app-coference',
  templateUrl: './coference.component.html',
  styleUrls: ['./coference.component.scss']
})
export class CoferenceComponent implements OnInit {

  @Input() id:any

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
  content:any;

 

  constructor(private restAPI : RestApiService) { }

  ngOnInit(): void {
  }


  showDialog() {
    this.display = true;
}

  

  conferenceData(value, form :NgForm){
    console.log(JSON.stringify(value));
    this.restAPI.postForm('conference_register/',value).subscribe(res =>{
      alert(res);
    })
    form.reset({total_amount: 2000,register_for : this.id });
    
  }

  addCoupon(coupon){
    this.restAPI.getListbyIdC(this.id,coupon,'coupon/','conference').subscribe(res =>{
      
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
