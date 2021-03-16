import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PastheaderComponent } from './pastheader/pastheader.component';
import { FormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AbouteventComponent } from './aboutevent/aboutevent.component';
import { SupportedbyComponent } from './supportedby/supportedby.component';
import { OurpartnersComponent } from './ourpartners/ourpartners.component';
import { SpeakersComponent } from './speakers/speakers.component';
import { AssociationsComponent } from './associations/associations.component';
import { MediaPartnersComponent } from './media-partners/media-partners.component';
import {  RouterModule, Routes } from '@angular/router';
import { pasteventmoduleRoutingModule } from './past-event-module.routing.module';


@NgModule({
  declarations: [PastheaderComponent, AbouteventComponent, SupportedbyComponent, OurpartnersComponent, SpeakersComponent, AssociationsComponent, MediaPartnersComponent],
  imports: [
    CommonModule,
    FormsModule,
    DialogModule,
    ButtonModule,
    // BrowserModule,
    // BrowserAnimationsModule,
    pasteventmoduleRoutingModule
  ],
  exports :[CommonModule , PastheaderComponent]
})


export class PastEventModuleModule { }
