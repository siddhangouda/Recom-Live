import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardGuard } from '../shared/auth-guard.guard';
import { AddcouponComponent } from './addcoupon/addcoupon.component';
import { CreateComponent } from './create/create.component';
import { CreatechildComponent } from './createchild/createchild.component';
import { EditChildComponent } from './edit-child/edit-child.component';
import { EditComponent } from './edit/edit.component';
import { EditmainComponent } from './editmain/editmain.component';
import { LoginComponent } from './login/login.component';
import { SpeakersregisteredComponent } from './speakersregistered/speakersregistered.component';
import { ViewComponent } from './view/view.component';
import { ViewleadsComponent } from './viewleads/viewleads.component';


const routes: Routes = [
  { path:'login' , component: LoginComponent },
  { path:'create', component: CreateComponent ,canActivate : [AuthGuardGuard]},
  { path :'view', component : ViewComponent,canActivate : [AuthGuardGuard]},
  {path : "createchild", component : CreatechildComponent,canActivate : [AuthGuardGuard]},
  { path : 'coupon' , component:AddcouponComponent,canActivate : [AuthGuardGuard]},
  { path :'edit' , component : EditComponent,canActivate : [AuthGuardGuard]},
  {path :'editChild', component: EditChildComponent,canActivate : [AuthGuardGuard]},
  {path : 'editmaster' , component: EditmainComponent,canActivate : [AuthGuardGuard]},
  {path : 'listSpeakers', component: SpeakersregisteredComponent,canActivate : [AuthGuardGuard]},
  {path : 'viewleads' , component: ViewleadsComponent,canActivate : [AuthGuardGuard]}
  ]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
