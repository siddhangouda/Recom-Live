import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SupportedByComponent } from './supported-by/supported-by.component';



@NgModule({
  declarations: [HeaderComponent, SupportedByComponent],
  imports: [
    CommonModule
  ]
})
export class EventmoduleModule { }
