import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlleventsComponent } from './allevents/allevents.component';
import { UpcomingEventsComponent } from './upcoming-events/upcoming-events.component';
import { PastEventsComponent } from './past-events/past-events.component';
import { GalleryModule } from '../gallery/gallery.module';
import {ButtonModule} from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';





@NgModule({
  declarations: [AlleventsComponent, UpcomingEventsComponent, PastEventsComponent],
  imports: [
    CommonModule,GalleryModule,ButtonModule,BrowserAnimationsModule
  ]
})
export class EventsmoduleModule { }
