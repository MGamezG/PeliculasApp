import { PeliculasService } from './../../services/peliculas/peliculas.service';
import { Movie } from './../../interfaces/cartelera-response';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-peliculas-poster-grid-pagination',
  templateUrl: './peliculas-poster-grid-pagination.component.html',
  styleUrls: ['./peliculas-poster-grid-pagination.component.scss']
})
export class PeliculasPosterGridPaginationComponent implements OnInit {
  moviesList:Movie[]=[]
  page=1;
  itemsPerPage=20;
  totalItems : any;
  constructor(private peliculasService:PeliculasService) { }

  ngOnInit(): void {
    this.gty(this.page)
  }
  gty(page:any){
    this.peliculasService.getMovies2(page).subscribe(
      data=>{
        console.log(data)
        this.moviesList=data.results
        this.totalItems=data.total_results
      }
    )
  }

}
