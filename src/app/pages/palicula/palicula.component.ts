import { Movie } from './../../interfaces/cartelera-response';
import { MovieResponse } from './../../interfaces/movieResponse';
import { PeliculasService } from './../../services/peliculas/peliculas.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-palicula',
  templateUrl: './palicula.component.html',
  styleUrls: ['./palicula.component.scss']
})
export class PaliculaComponent implements OnInit {
  Movie!:MovieResponse

  constructor(private activatedRoute:ActivatedRoute,
              private peliculasService:PeliculasService,
              private location:Location) { }

  ngOnInit(): void {
    const id=this.activatedRoute.snapshot.params['id']
    console.log(id)
    this.peliculasService.getMovieDetail(id).subscribe(
      (data:MovieResponse)=>{
        console.log(data)
        this.Movie=data
      }
    )
  }
  onRegresar(){
    this.location.back()
  }
}
