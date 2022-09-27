import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'poster'
})
export class PosterPipe implements PipeTransform {

  transform(poster:string): string {
    if (poster) {
      return `https://image.tmdb.org/t/p/w300${poster}`
    }else{
      return '/assets/image/no-image.jpg'
    }

  }
  // <img src="https://image.tmdb.org/t/p/w300{{movie.poster_path}}" alt="{{movie.title}}" class="img-fluid poster">

}
