import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  images = ['https://res.cloudinary.com/dmj6tqnkw/image/upload/v1650510769/GoPlay/witcher_kxibqb.jpg', 'https://res.cloudinary.com/dmj6tqnkw/image/upload/v1650510769/GoPlay/witcher_kxibqb.jpg', 'https://res.cloudinary.com/dmj6tqnkw/image/upload/v1650510769/GoPlay/witcher_kxibqb.jpg'].map((n) => n);

  constructor() { }

  ngOnInit() {
  }

}

