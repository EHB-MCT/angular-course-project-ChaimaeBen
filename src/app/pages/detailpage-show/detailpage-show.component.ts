import { Component, Input, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Movie } from 'src/app/interfaces/Movie';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from 'src/app/services/movies.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-detailpage-show',
  templateUrl: './detailpage-show.component.html',
  styleUrls: ['./detailpage-show.component.scss']
})
export class DetailpageShowComponent implements OnInit {
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
    this.getShow();
    this.getSimilar();
    console.log('the sooooow '+this.movie)

  }

  getShow(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
  
    if(id){
      try{
      this.moviesService.getShowByid(id)
      .subscribe((movie )=> {this.movie = movie; console.log('the show is '+JSON.stringify(this.movie.number_of_seasons))});
    }catch(e){
      console.log('THE ERROR '+e)
  }
  }
  }

  getSimilar() {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    return this.moviesService.getSimilarShowByid(id).subscribe((data)=> {
      this.similarMovie=data.results;
  });
  }



  goBack(): void {
    this.location.back();
  }
}
