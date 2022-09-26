import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable}from 'rxjs'
import { CarteleraResponse } from 'src/app/interfaces/cartelera-response';
@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  constructor(private http:HttpClient) { }

  getMovies():Observable<CarteleraResponse>{
    return this.http.get<CarteleraResponse>(`https://api.themoviedb.org/3/movie/now_playing?api_key=402c75d67b34f271b9134f1d0c394948&language=es-ES&page=1`)
  }
  getMovies2(page:number):Observable<CarteleraResponse>{
    return this.http.get<CarteleraResponse>(`https://api.themoviedb.org/3/movie/now_playing?api_key=402c75d67b34f271b9134f1d0c394948&language=es-ES&page=${page}`)
  }
}
