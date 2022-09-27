import { Movie } from './../../interfaces/cartelera-response';
import { PeliculasService } from './../../services/peliculas/peliculas.service';
import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  moviesList:Movie[]=[]
  moviesSlice:Movie[]=[]
  @HostListener('window:scroll',['$event'])
  onScroll(){
    const positionScroll=(document.documentElement.scrollTop||document.body.scrollTop)+1000;
    const maxPositionScroll=(document.documentElement.scrollHeight||document.body.scrollHeight)
    if (positionScroll>maxPositionScroll) {
      if (this.peliculasService.charge) {
        return ;
      }
      this.peliculasService.getMovies().subscribe(
        response=>{
          this.moviesList.push(...response)
        }
      );
    }
    //console.log({positionScroll,maxPositionScroll})
  }

  constructor(private peliculasService:PeliculasService) {
    peliculasService.getMovies().subscribe(
      data=>{
        //console.log(data)
        //console.log(data)
        this.moviesSlice=data
        this.moviesList=data
      }
    )
  }

  ngOnInit(): void {
  }

}
