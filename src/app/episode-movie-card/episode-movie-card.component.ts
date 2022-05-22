import { Component, Input, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Movie } from '../interfaces/Movie';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-episode-movie-card',
  templateUrl: './episode-movie-card.component.html',
  styleUrls: ['./episode-movie-card.component.scss']
})
export class EpisodeMovieCardComponent implements OnInit {
  popularShows:Movie[] = [];
  popularTitle="Most popular movies";
 constructor( private movieService: MoviesService) { 
}


  customOptions: OwlOptions = {
    items:20,
    mouseDrag: true,
    loop:false,
    dots:false,
    rewind:false,
    navSpeed: 200,
    navText: [
      '<img src="./assets/images/chevron-left.svg"/>',
      '<img src="./assets/images/chevron-right.svg"/>'
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

  ngOnInit(): void {
    this.loadPopular();
  }


  loadPopular() {
    return this.movieService.getPopularShows().subscribe((data)=> {
          this.popularShows=data.results;
      });
  }

}
