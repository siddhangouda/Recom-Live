import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutheaderComponent } from './aboutheader/aboutheader.component';
import { AdvisoryboardComponent } from './advisoryboard/advisoryboard.component';
import { ExecutiveTeamComponent } from './executive-team/executive-team.component';
import { AdvisoryExecutiveComponent } from './advisory-executive/advisory-executive.component';
import { DialogModule } from 'primeng/dialog';



@NgModule({
  declarations: [AboutheaderComponent, AdvisoryboardComponent, ExecutiveTeamComponent, AdvisoryExecutiveComponent],
  imports: [
    CommonModule,
    DialogModule
  ]
})
export class AboutModule { }
