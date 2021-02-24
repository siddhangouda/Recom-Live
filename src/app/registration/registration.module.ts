import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllFormsComponent } from './all-forms/all-forms.component';
import { PartnershipComponent } from './partnership/partnership.component';
import { ExhibitionComponent } from './exhibition/exhibition.component';
import { CoferenceComponent } from './coference/coference.component';
import { VisitorComponent } from './visitor/visitor.component';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { VertualComponent } from './vertual/vertual.component';



@NgModule({
  declarations: [AllFormsComponent, PartnershipComponent, ExhibitionComponent, CoferenceComponent, VisitorComponent, VertualComponent],
  imports: [
    CommonModule,ButtonModule,FormsModule
  ]
})
export class RegistrationModule { }
