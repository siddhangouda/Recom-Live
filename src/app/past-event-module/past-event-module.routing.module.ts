import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PastheaderComponent} from 'src/app/past-event-module/pastheader/pastheader.component'

const routes : Routes =  [{
        path: 'pastEvent', component: PastheaderComponent 
    }]


@NgModule({
    imports: [RouterModule.forChild( routes )],
    exports: [RouterModule]
  })
  export class pasteventmoduleRoutingModule { }