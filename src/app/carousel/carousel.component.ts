import { Component, OnInit } from '@angular/core';

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
];

  constructor() { }

  ngOnInit() {
  }

}

