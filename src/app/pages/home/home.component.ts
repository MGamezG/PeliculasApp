import { Movie } from './../../interfaces/cartelera-response';
import { PeliculasService } from './../../services/peliculas/peliculas.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  moviesList:Movie[]=[]

  constructor(private peliculasService:PeliculasService) {
    peliculasService.getMovies().subscribe(
      data=>{
        //console.log(data)
        this.moviesList=data.results
      }
    )
  }

  ngOnInit(): void {
  }

}
