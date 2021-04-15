import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TabViewModule} from 'primeng/tabview';
import { EventsComponent } from './events/events.component';
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import { GovtComponent } from './govt/govt.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { SharedModule } from '../shared/shared.module';
import { NgAnimatedCounterModule } from '@bugsplat/ng-animated-counter';
import { UniquePipe } from '../shared/unique.pipe';
import { AssociationsClientsComponent } from './associations-clients/associations-clients.component';


@NgModule({
  declarations: [EventsComponent, GovtComponent, AboutusComponent, AssociationsClientsComponent],
  imports: [
    CommonModule,
    TabViewModule,
    CardModule,
    ButtonModule,
    SharedModule,
    NgAnimatedCounterModule,
    
  ],
  providers:[UniquePipe]
})
export class HomeModule { }
