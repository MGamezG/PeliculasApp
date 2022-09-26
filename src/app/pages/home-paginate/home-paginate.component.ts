import { HttpClient } from '@angular/common/http';
import { PeliculasService } from './../../services/peliculas/peliculas.service';
import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/cartelera-response';

@Component({
  selector: 'app-home-paginate',
  templateUrl: './home-paginate.component.html',
  styleUrls: ['./home-paginate.component.scss']
})
export class HomePaginateComponent implements OnInit {

  moviesList:Movie[]=[]


  constructor(private peliculasService:PeliculasService) {}

  ngOnInit(): void {
    this.gty()
  }
    gty(){
      this.peliculasService.getMovies().subscribe(
        data=>{
          console.log(data)
          this.moviesList=data.results
        }
      )
    }

}
