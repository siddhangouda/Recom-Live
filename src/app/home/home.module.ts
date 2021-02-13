import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TabViewModule} from 'primeng/tabview';
import { EventsComponent } from './events/events.component';
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import { GovtComponent } from './govt/govt.component';
import { AboutusComponent } from './aboutus/aboutus.component';


@NgModule({
  declarations: [EventsComponent, GovtComponent, AboutusComponent],
  imports: [
    CommonModule,
    TabViewModule,
    CardModule,
    ButtonModule,
  ]
})
export class HomeModule { }
