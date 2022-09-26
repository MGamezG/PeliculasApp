import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { PeliculasPosterGridComponent } from './peliculas-poster-grid/peliculas-poster-grid.component';




@NgModule({
  declarations: [
    SlideshowComponent,
    PeliculasPosterGridComponent,
  ],
  imports: [
    CommonModule
  ],
  exports:[
    SlideshowComponent,
    PeliculasPosterGridComponent
  ]
})
export class ComponentsModule { }
