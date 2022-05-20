import { Component, Input, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Movie } from '../interfaces/Movie';

@Component({
  selector: 'app-movie-card-list',
  templateUrl: './movie-card-list.component.html',
  styleUrls: ['./movie-card-list.component.scss']
})
export class MovieCardListComponent implements OnInit {
  @Input() movies:Movie[] = [];
  @Input() title!: string;
  @Input() imgBefore!: string;
  @Input() imgAfter!: string;


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
  }

}
