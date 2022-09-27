import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  buscarPelicula(txt:string){
    txt=txt.trim()
    if (txt.length===0) {
      return;
    }
    console.log(txt)
    //this.router.navigate(['/search'],{queryParams:{txt}});
    this.router.navigate(['/search',txt])
  }
}
