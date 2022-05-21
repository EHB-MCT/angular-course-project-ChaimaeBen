import { Component, Input, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Movie } from '../../interfaces/Movie';

@Component({
  selector: 'app-promotion-carousel',
  templateUrl: './promotion-carousel.component.html',
  styleUrls: ['./promotion-carousel.component.scss']
})
export class PromotionCarouselComponent implements OnInit {
 @Input() movies:Movie[] = [];
 label = "PLAY NOW";
  customOptions: OwlOptions = {
    autoplay:true,
    mouseDrag: true,
    loop:true,
    items:1,
    center: true,
    autoHeight: true,
    autoWidth: true,
    dots:true,
    rewind:false,
    navSpeed: 200,  
    }

  ngOnInit(): void {
  }

}
