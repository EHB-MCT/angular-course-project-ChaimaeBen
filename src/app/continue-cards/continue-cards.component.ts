import { Component, Input, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Movie } from '../interfaces/Movie';

@Component({
  selector: 'app-continue-cards',
  templateUrl: './continue-cards.component.html',
  styleUrls: ['./continue-cards.component.scss']
})
export class ContinueCardsComponent implements OnInit {
  @Input() movies:Movie[] = [];
  @Input() title!: string;
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

  constructor() { }

  ngOnInit(): void {
  }

}
