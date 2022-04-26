import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  images = ['https://res.cloudinary.com/dmj6tqnkw/image/upload/v1651007346/GoPlay/wallpaperWitcher1920x1080_nqbohc.jpg', 'https://res.cloudinary.com/dmj6tqnkw/image/upload/v1651007346/GoPlay/wallpaperWitcher1920x1080_nqbohc.jpg,https://res.cloudinary.com/dmj6tqnkw/image/upload/v1651007346/GoPlay/wallpaperWitcher1920x1080_nqbohc.jpg'].map((n) => n);

  constructor() { }

  ngOnInit() {
  }

}

