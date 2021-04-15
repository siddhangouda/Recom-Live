import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimationsDirective } from './animations.directive';
import { UniquePipe } from './unique.pipe';



@NgModule({
  declarations: [AnimationsDirective, UniquePipe],
  imports: [
    CommonModule,
  ],
  exports: [AnimationsDirective,UniquePipe,CommonModule]
})
export class SharedModule { }
