import { RatingModule } from 'ng-starrating';
import { PipesModule } from './../pipes/pipes.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { PaliculaComponent } from './palicula/palicula.component';
import { BuscarComponent } from './buscar/buscar.component';
import { ComponentsModule } from '../components/components.module';
import { HomePaginateComponent } from './home-paginate/home-paginate.component';



@NgModule({
  declarations: [
    HomeComponent,
    PaliculaComponent,
    BuscarComponent,
    HomePaginateComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    NgxPaginationModule,
    PipesModule,
    RatingModule
  ]
})
export class PagesModule { }
