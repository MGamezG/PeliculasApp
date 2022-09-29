import { Movie } from './../../interfaces/cartelera-response';
import { MovieResponse } from './../../interfaces/movieResponse';
import { PeliculasService } from './../../services/peliculas/peliculas.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { CreditsResponse } from 'src/app/interfaces/creditsResponse';

@Component({
  selector: 'app-palicula',
  templateUrl: './palicula.component.html',
  styleUrls: ['./palicula.component.scss']
})
export class PaliculaComponent implements OnInit {
  Movie!:any
  cast!:any

  constructor(private activatedRoute:ActivatedRoute,
              private peliculasService:PeliculasService,
              private location:Location,
              private router:Router) { }

  ngOnInit(): void {
    const id=this.activatedRoute.snapshot.params['id']
    console.log(id)
    this.peliculasService.getMovieDetail(id).subscribe(
      (data)=>{
        if(!data){
          this.router.navigateByUrl('/home')
          return ;
        }
        else{
          console.log(data)
        this.Movie=data
        }

      }
    );
    this.peliculasService.getCredits(id).subscribe(
      (cast)=>{
        console.log(cast)
        this.cast=cast.filter(
          actor=>actor.profile_path!=null
        )
      }
    );
  }
  onRegresar(){
    this.location.back()
  }
}
