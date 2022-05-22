import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/interfaces/Movie';
import { MoviesService } from 'src/app/services/movies.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-detailpage',
  templateUrl: './detailpage.component.html',
  styleUrls: ['./detailpage.component.scss']
})
export class DetailpageComponent implements OnInit {
  movie!: Movie;
  similarMovie:Movie[] = [];

 label="PLAY NOW";
 title="Those who watched The Witcher also watched";
  constructor(
    private route: ActivatedRoute,
    private moviesService: MoviesService,
    private location: Location,
  ) {}



  ngOnInit(): void {
    this.getMovie();
    this.getSimilar();
  }

  getMovie(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
  
    if(id){
      try{
      this.moviesService.getMovieByid(id)
      .subscribe(movie => this.movie = movie);
    }catch(e){
      console.log('THE ERROR '+e)
  }
  }
  }

  getShow(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    if(id){
      try{
        this.moviesService.getShowByid(id)
        .subscribe((movie) => {
          console.log('THE SHOW HERE '+movie)
          this.movie = movie
        });
      }catch(e){
          console.log('THE ERROR '+e)
      }
  
    }

  }

  getSimilar() {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    return this.moviesService.getSimilarByid(id).subscribe((data)=> {
      this.similarMovie=data.results;
  });
  }



  goBack(): void {
    this.location.back();
  }
}
