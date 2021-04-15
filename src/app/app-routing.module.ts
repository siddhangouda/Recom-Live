import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventsComponent } from './home/events/events.component';
import { HeaderComponent } from './eventmodule/header/header.component'
import { GalleryComponent } from './gallery/gallery/gallery.component'
import { AlleventsComponent } from './eventsmodule/allevents/allevents.component'
import { AllFormsComponent } from './registration/all-forms/all-forms.component';
import { AboutheaderComponent } from './about/aboutheader/aboutheader.component';
import { PastheaderComponent } from './past-event-module/pastheader/pastheader.component';
import { TmplAstBoundAttribute } from '@angular/compiler';
import { AdvisoryboardComponent } from './about/advisoryboard/advisoryboard.component';
import { ExecutiveTeamComponent } from './about/executive-team/executive-team.component';
import { AdvisoryExecutiveComponent } from './about/advisory-executive/advisory-executive.component';
import { SpeakerComponent } from './registration/speaker/speaker.component';
import { AssociationsClientsComponent } from './home/associations-clients/associations-clients.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([{ path: 'home', component: EventsComponent },

  { path: 'gallery', component: GalleryComponent },
  { path: 'ourevents', component: AlleventsComponent },
  { path: 'register/:id', component: AllFormsComponent },
  { path: 'about/ourstories', component: AboutheaderComponent },
  // {path : 'past-event-module' , loadChildren : './past-event-module/past-event-module.module#PastEventModuleModule'},
  { path: 'about/ourteam', component: AdvisoryExecutiveComponent },
  { path: 'events', component: AlleventsComponent },
  { path: 'pastEvent', component: AlleventsComponent },
  { path: 'events/:id', component: HeaderComponent },
  // {
  //   path: 'pastEvent/:id',
  //   loadChildren: () => import('./past-event-module/past-event-module.module').then(m => m.PastEventModuleModule)
  // },
  {
    path: 'pastEvents/:id', component: PastheaderComponent
    
  },

  { path: 'about/executiveteam', component: ExecutiveTeamComponent },
  {path: 'speaker/:id' , component: SpeakerComponent},
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  },
  {path : 'asso-clients-govt', component : AssociationsClientsComponent },

  { path: '', component: EventsComponent },
  { path: '**', redirectTo : "/home" },
  
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
