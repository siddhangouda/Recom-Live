import { Injectable } from '@angular/core';
import { CanActivate, Router, } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {

  constructor(private router: Router){

  }
  value = localStorage.getItem("mytime");
  canActivate()
  {
   if(this.value == 'hh'){
     return true;
   }
   else{
    this.router.navigate(['admin/login']);
   }
  }
  
}
