import { PipesModule } from './../pipes/pipes.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { PeliculasPosterGridComponent } from './peliculas-poster-grid/peliculas-poster-grid.component';
import { PeliculasPosterGridPaginationComponent } from './peliculas-poster-grid-pagination/peliculas-poster-grid-pagination.component';
import { RatingModule } from 'ng-starrating';
import { CastSlideshowComponent } from './cast-slideshow/cast-slideshow.component';




@NgModule({
  declarations: [
    SlideshowComponent,
    PeliculasPosterGridComponent,
    PeliculasPosterGridPaginationComponent,
    CastSlideshowComponent,
  ],
  imports: [
    CommonModule,
    NgxPaginationModule,
    RatingModule,
    PipesModule,
    RatingModule
  ],
  exports:[
    SlideshowComponent,
    PeliculasPosterGridComponent,
    PeliculasPosterGridPaginationComponent,
    CastSlideshowComponent
  ]
})
export class ComponentsModule { }
