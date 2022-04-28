import { Component, OnInit } from '@angular/core';
import { Movie } from '../interfaces/Movie';
import { MoviesService } from '../services/movies.service';
@Component({
  selector: 'app-popular-movies',
  templateUrl: './popular-movies.component.html',
  styleUrls: ['./popular-movies.component.scss']
})
export class PopularMoviesComponent implements OnInit {
  movies:any[] = [];

  constructor(  private movieService: MoviesService
    ) { }

  ngOnInit() {
    this.loadEmployees();
  }


  loadEmployees() {
    return this.movieService.getPopularMovies().subscribe(movies => this.movies = movies);
  }

}
