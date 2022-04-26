import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popular-movies',
  templateUrl: './popular-movies.component.html',
  styleUrls: ['./popular-movies.component.scss']
})
export class PopularMoviesComponent implements OnInit {
  url="https://api.themoviedb.org/3/movie/popular?api_key=b97da70d419e3afb043bb8f42815e0c2&language=en-US&page=1";
  constructor() { }

  ngOnInit() {
  }

}
