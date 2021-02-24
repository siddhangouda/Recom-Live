import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventsComponent } from './home/events/events.component';
import { HeaderComponent} from './eventmodule/header/header.component'
import { GalleryComponent } from './gallery/gallery/gallery.component'
import { AlleventsComponent} from './eventsmodule/allevents/allevents.component'
import { AllFormsComponent } from './registration/all-forms/all-forms.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([{path:'index' , component : EventsComponent},
                                  {path: '', component:EventsComponent},
                                  {path:'events', component:HeaderComponent},
                                  {path: 'gallery' , component : GalleryComponent},
                                  {path: 'ourevents', component : AlleventsComponent},
                                  {path : 'register' , component : AllFormsComponent}
                                
                                ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
