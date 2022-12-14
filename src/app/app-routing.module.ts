import { BuscarComponent } from './pages/buscar/buscar.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import {PaliculaComponent}from './pages/palicula/palicula.component'
import { HomePaginateComponent } from './pages/home-paginate/home-paginate.component';

const routes: Routes = [
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'pelicula/:id',
    component:PaliculaComponent
  },
  {
    path:'search/:text',
    component:BuscarComponent
  },
  {
    path:'otherHome',
    component:HomePaginateComponent
  },
  {
    path:'',
    redirectTo:'/home',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
