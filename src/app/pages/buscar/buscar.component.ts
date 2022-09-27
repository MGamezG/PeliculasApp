import { CarteleraResponse, Movie } from './../../interfaces/cartelera-response';
import { PeliculasService } from './../../services/peliculas/peliculas.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.scss']
})
export class BuscarComponent implements OnInit {
  moviesList:Movie[]=[]
  busqueda!:string
  constructor(private activetedRouter:ActivatedRoute,
              private peliculasService:PeliculasService) { }

  ngOnInit(): void {
    this.activetedRouter.params.subscribe(
      (params:any)=>{
        console.log(params)
        this.busqueda=params.text
        this.peliculasService.getsearch(params.text).subscribe(
          (data)=>{
            this.moviesList=data
            console.log(data)
          }
        )
      }
    )
  }

}
