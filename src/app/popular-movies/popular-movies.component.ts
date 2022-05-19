import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../interfaces/Movie';
import { MoviesService } from '../services/movies.service';
import { OwlOptions } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-popular-movies',
  templateUrl: './popular-movies.component.html',
  styleUrls: ['./popular-movies.component.scss']
})
export class PopularMoviesComponent implements OnInit {
  movies:Movie[] = [];
  

  constructor(  private movieService: MoviesService
    ) {  }
     
      ngOnInit() {
    this.loadEmployees();
  }


  customOptions: OwlOptions = {
    mouseDrag: false,
    loop:true,
    dots:false,
    navSpeed: 200,
    navText: [
      '<img src="./assets/images/chevron-left.svg"/>',
      '<img src="./assets/images/chevron-right.svg"/>'
  ], 
    nav: true,
    

    }

loadEmployees() {
  return this.movieService.getPopularMovies().subscribe((data)=> {
        this.movies=data.results;
    });

}

}