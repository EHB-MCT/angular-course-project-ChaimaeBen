import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../interfaces/Movie';
import { MoviesService } from '../services/movies.service';
@Component({
  selector: 'app-popular-movies',
  templateUrl: './popular-movies.component.html',
  styleUrls: ['./popular-movies.component.scss']
})
export class PopularMoviesComponent implements OnInit {
  movies:Movie[] = [];
  constructor(  private movieService: MoviesService
    ) { }

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