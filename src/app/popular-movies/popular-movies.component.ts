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
    ) { 


    }
    customOptions: OwlOptions = {

      mouseDrag: true,
      touchDrag: true,
      autoHeight:false,
      autoWidth:true,
      loop:false,
      dots:false,
      rewind:false,
      navSpeed: 600,
      navText: [
        'previous',
        'next'
    ],      responsive:{
        0:{
            items: 1
        },
        600:{
            items: 3
        },
        1000:{
            items: 5
        }
    },
      nav: true,
      

      }
      
      ngOnInit() {
    this.loadEmployees();
  }



loadEmployees() {
  return this.movieService.getPopularMovies().subscribe((data)=> {
    data.results.forEach((element:any) => {
      for (let key in element) {
          console.log("key:", key, "value:", element[key]);
        }
        this.movies=data.results;

        console.log('movie data '+this.movies)

    });
   })

}

}