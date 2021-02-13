import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventsComponent } from './home/events/events.component';
import { HeaderComponent} from './eventmodule/header/header.component'

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([{path:'index' , component : EventsComponent},
                                  {path: '', component:EventsComponent},
                                  {path:'events', component:HeaderComponent}
                                
                                ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
