import { Router } from '@angular/router';
import { Movie } from './../../interfaces/cartelera-response';
import { PeliculasService } from './../../services/peliculas/peliculas.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-peliculas-poster-grid',
  templateUrl: './peliculas-poster-grid.component.html',
  styleUrls: ['./peliculas-poster-grid.component.scss']
})
export class PeliculasPosterGridComponent implements OnInit {
  @Input() moviesList!:Movie[];
  constructor(private peliculasService:PeliculasService,
              private router:Router) { }

  ngOnInit(): void {
    console.log(this.moviesList)
  }
  goMovie(movie:Movie){
    console.log(movie);
   this.router.navigate(['/pelicula',movie.id])

   //this.router.navigate(['/pelicula'],{queryParams:{id:movie.id}})
  }

}
