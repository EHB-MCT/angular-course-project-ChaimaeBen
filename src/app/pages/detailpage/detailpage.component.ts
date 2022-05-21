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
    private movieService: MoviesService
  ) {}



  ngOnInit(): void {
    this.getMovie();
    this.getSimilar();
  }

  getMovie(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.moviesService.getMovieByid(id)
      .subscribe(movie => this.movie = movie);
  }


  getSimilar() {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    return this.movieService.getSimilarByid(id).subscribe((data)=> {
      this.similarMovie=data.results;
  });
  }


  goBack(): void {
    this.location.back();
  }
}
