import { Movie } from './../../interfaces/cartelera-response';
import { AfterContentInit, AfterViewInit, Component, Input, OnInit } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})
export class SlideshowComponent implements OnInit,AfterViewInit{
  @Input() movies!:Movie[];
  swiper!:Swiper

  constructor() { }

  ngOnInit(): void {
    console.log(this.movies)
  }
  ngAfterViewInit(): void {
    this.swiper = new Swiper('.swiper', {
      loop: true,
    });

  }

  onSlideNext(){
    this.swiper.slideNext()
  }
  onSlidePrev(){
    this.swiper.slidePrev();
  }



}
