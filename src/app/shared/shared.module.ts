import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimationsDirective } from './animations.directive';



@NgModule({
  declarations: [AnimationsDirective],
  imports: [
    CommonModule,
  ],
  exports: [AnimationsDirective]
})
export class SharedModule { }
