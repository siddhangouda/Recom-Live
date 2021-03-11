import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventsComponent } from './home/events/events.component';
import { HeaderComponent} from './eventmodule/header/header.component'
import { GalleryComponent } from './gallery/gallery/gallery.component'
import { AlleventsComponent} from './eventsmodule/allevents/allevents.component'
import { AllFormsComponent } from './registration/all-forms/all-forms.component';
import { AboutheaderComponent } from './about/aboutheader/aboutheader.component';
import { PastheaderComponent } from './past-event-module/pastheader/pastheader.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([{path:'index' , component : EventsComponent},
                                  {path:'events', component:HeaderComponent},
                                  {path: 'gallery' , component : GalleryComponent},
                                  {path: 'ourevents', component : AlleventsComponent},
                                  {path : 'register' , component : AllFormsComponent},
                                  {path : 'aboutUs' , component: AboutheaderComponent},
                                  // {path : 'past-event-module' , loadChildren : './past-event-module/past-event-module.module#PastEventModuleModule'},
                                  {
                                    path: 'past-event-module',
                                    loadChildren: () => import('./past-event-module/past-event-module.module').then(m => m.PastEventModuleModule)
                                  },
                                  {path: '', component:EventsComponent},                                
                                ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
