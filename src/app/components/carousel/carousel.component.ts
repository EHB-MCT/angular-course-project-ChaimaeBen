import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  images = [
  'https://res.cloudinary.com/dmj6tqnkw/image/upload/v1651088770/GoPlay/wallpaperWitcher1920x1080_cropped_feukiu.jpg', 
  'https://res.cloudinary.com/dmj6tqnkw/image/upload/v1651088770/GoPlay/wallpaperWitcher1920x1080_cropped_feukiu.jpg',
  'https://res.cloudinary.com/dmj6tqnkw/image/upload/v1651088770/GoPlay/wallpaperWitcher1920x1080_cropped_feukiu.jpg',
  'https://res.cloudinary.com/dmj6tqnkw/image/upload/v1651088770/GoPlay/wallpaperWitcher1920x1080_cropped_feukiu.jpg',

];

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

  constructor() { }

  ngOnInit() {
  }

}

