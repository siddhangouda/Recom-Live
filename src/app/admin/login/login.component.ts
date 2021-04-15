import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { RestApiService } from 'src/app/shared/rest-api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private restAPI : RestApiService, private router: Router) { }

  ngOnInit(): void {
  }

 loginData(value, form: NgForm) {
   this.restAPI.postForm('login/',value).subscribe(res => {
    
     if('success' in res){
       alert("done")
       localStorage.setItem("mytime", "hh");
       this.router.navigate(['admin/view']);
     }else{
       alert("function not corect")
     }
   })
   form.reset();

 }

 logOut(){
   this.restAPI.getList('logout/').subscribe(res =>{
     
     localStorage.setItem("mytime", "hh1");
     this.router.navigate(['admin/login']);
   })
 }

}
