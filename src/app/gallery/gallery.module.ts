import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryComponent } from './gallery/gallery.component';
import { GalleryGridComponent } from './gallery-grid/gallery-grid.component';



@NgModule({
  declarations: [GalleryComponent, GalleryGridComponent],
  imports: [
    CommonModule
  ],
  exports : [GalleryGridComponent,CommonModule]
})
export class GalleryModule { }
