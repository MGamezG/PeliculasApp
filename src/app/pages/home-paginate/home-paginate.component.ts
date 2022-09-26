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
  page=1;
  itemsPerPage=20;
  totalItems : any;

  constructor(private peliculasService:PeliculasService) {}

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
