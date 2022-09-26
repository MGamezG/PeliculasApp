import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable, tap}from 'rxjs'
import { CarteleraResponse } from 'src/app/interfaces/cartelera-response';
@Injectable({
  providedIn: 'root'
})
//otro key=402c75d67b34f271b9134f1d0c39494
export class PeliculasService {
  baseUrl='https://api.themoviedb.org/3'
  carteleraPage=1
  constructor(private http:HttpClient) { }
  get params(){
    return {
      'api_key':'e48588d3c844b39f7314a620a6407d50',
      'language':'es-ES',
      'page':this.carteleraPage
    }
  }

  getMovies():Observable<CarteleraResponse>{
    return this.http.get<CarteleraResponse>(`${this.baseUrl}/movie/now_playing`,{params:this.params}).pipe(
      tap(()=>{
        this.carteleraPage+=1
      })
    )
  }
  getMovies2(page:number):Observable<CarteleraResponse>{
    return this.http.get<CarteleraResponse>(`${this.baseUrl}/movie/now_playing?api_key=e48588d3c844b39f7314a620a6407d50&language=es-ES&page=${page}`)
  }
}
