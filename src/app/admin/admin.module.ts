import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateComponent } from './create/create.component';
import { CreatechildComponent } from './createchild/createchild.component';
import {FileUploadModule} from 'primeng/fileupload';
import {HttpClientModule} from '@angular/common/http';
import { ViewComponent } from './view/view.component';
import { AddcouponComponent } from './addcoupon/addcoupon.component';
import { DataTablesModule } from "angular-datatables";
import { EditComponent } from './edit/edit.component';
import { EditChildComponent } from './edit-child/edit-child.component';
import { EditmainComponent } from './editmain/editmain.component';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import { SpeakersregisteredComponent } from './speakersregistered/speakersregistered.component';
import { ViewleadsComponent } from './viewleads/viewleads.component';

@NgModule({
  declarations: [LoginComponent, CreateComponent, CreatechildComponent, ViewComponent, AddcouponComponent, EditComponent, EditChildComponent, EditmainComponent, SpeakersregisteredComponent, ViewleadsComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FileUploadModule,
    HttpClientModule,
    DataTablesModule,
    ConfirmDialogModule,   
    
  ]
})
export class AdminModule { }
