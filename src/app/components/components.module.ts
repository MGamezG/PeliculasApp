import { PipesModule } from './../pipes/pipes.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { PeliculasPosterGridComponent } from './peliculas-poster-grid/peliculas-poster-grid.component';
import { PeliculasPosterGridPaginationComponent } from './peliculas-poster-grid-pagination/peliculas-poster-grid-pagination.component';
import { RatingModule } from 'ng-starrating';




@NgModule({
  declarations: [
    SlideshowComponent,
    PeliculasPosterGridComponent,
    PeliculasPosterGridPaginationComponent,
  ],
  imports: [
    CommonModule,
    NgxPaginationModule,
    RatingModule,
    PipesModule
  ],
  exports:[
    SlideshowComponent,
    PeliculasPosterGridComponent,
    PeliculasPosterGridPaginationComponent,
  ]
})
export class ComponentsModule { }
