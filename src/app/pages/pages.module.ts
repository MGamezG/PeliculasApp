import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { PaliculaComponent } from './palicula/palicula.component';
import { BuscarComponent } from './buscar/buscar.component';



@NgModule({
  declarations: [
    HomeComponent,
    PaliculaComponent,
    BuscarComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
