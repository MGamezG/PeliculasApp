import { Movie } from './../../interfaces/cartelera-response';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map, Observable, of, tap}from 'rxjs'
import { CarteleraResponse } from 'src/app/interfaces/cartelera-response';
@Injectable({
  providedIn: 'root'
})
//otro key=402c75d67b34f271b9134f1d0c39494
export class PeliculasService {
  baseUrl='https://api.themoviedb.org/3'
  carteleraPage=1
  charge:boolean=false
  constructor(private http:HttpClient) { }
  get params(){
    return {
      'api_key':'e48588d3c844b39f7314a620a6407d50',
      'language':'es-ES',
      'page':this.carteleraPage
    }
  }

  /**
   * metodo censillo
   * @returns
   */
  getMovies():Observable<Movie[]>{
    if (this.charge) {
      return of([]) ; //transormar un arreglo vacio en un ovserbable
    }
    console.log('cargar api')
    this.charge=true
    return this.http.get<CarteleraResponse>(`${this.baseUrl}/movie/now_playing`,{params:this.params}).pipe(
      map(
        (resp:CarteleraResponse)=>resp.results),
      tap(()=>{
        this.carteleraPage+=1
        this.charge=false
      })
    )
  }
  /**
   * metodo de paginacion
   * @param page
   * @returns
   */
  getMovies2(page:number):Observable<CarteleraResponse>{
    return this.http.get<CarteleraResponse>(`${this.baseUrl}/movie/now_playing?api_key=e48588d3c844b39f7314a620a6407d50&language=es-ES&page=${page}`)
  }
}
