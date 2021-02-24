import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SupportedByComponent } from './supported-by/supported-by.component';
import {CarouselModule} from 'primeng/carousel';
import { OurPartnersComponent } from './our-partners/our-partners.component';
import { SpeakersComponent } from './speakers/speakers.component';
import { AssociationPartnersComponent } from './association-partners/association-partners.component';
import { MediaPartnersComponent } from './media-partners/media-partners.component';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AboutEventComponent } from './about-event/about-event.component';

@NgModule({
  declarations: [HeaderComponent, SupportedByComponent, OurPartnersComponent, SpeakersComponent, AssociationPartnersComponent, MediaPartnersComponent, AboutEventComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    CarouselModule,
    DialogModule,
    ButtonModule,FormsModule
  ]
})
export class EventmoduleModule { }
