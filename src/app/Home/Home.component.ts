import { Component, OnInit } from '@angular/core';
import { Movie } from '../interfaces/Movie';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-Home',
  templateUrl: './Home.component.html',
  styleUrls: ['./Home.component.scss']
})
export class HomeComponent implements OnInit {
  label="PLAY NOW";

  imgBefore="https://res.cloudinary.com/dmj6tqnkw/image/upload/v1650982643/GoPlay/logo_k1fj50.png"
  imgAfter="https://res.cloudinary.com/dmj6tqnkw/image/upload/v1653005424/GoPlay/record_je5qa8.svg"

  popularMovies:Movie[] = [];
  upcomingMovies:Movie[] = [];
  liveMovies:Movie[] = [];

  popularTitle="Most popular movies";
  upcomingTitle="Coming up soon";
  liveTitle="LIVE on";
  
  functioncall(event:any) {
    console.log('functioncall', event);
  }

 constructor( private movieService: MoviesService) { 
 }

  ngOnInit() {
    this.loadPopular();
    this.loadUpcoming();
    this.loadLive();
  }


  loadPopular() {
    return this.movieService.getPopularMovies().subscribe((data)=> {
          this.popularMovies=data.results;
      });
  }

  loadUpcoming() {
    return this.movieService.getUpcoming().subscribe((data)=> {
          this.upcomingMovies=data.results;
      });
  }


  
  loadLive() {
    return this.movieService.getLive().subscribe((data)=> {
          this.liveMovies=data.results;
      });
  }


}
