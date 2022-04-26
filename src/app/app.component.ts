import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  icons = [
    { name: 'search'},
    { name: 'user'},
    { name: 'instagram'},
  ] 
   images = ['http://res.cloudinary.com/dmj6tqnkw/image/upload/v1651007346/GoPlay/wallpaperWitcher1920x1080_nqbohc.jpg', 'http://res.cloudinary.com/dmj6tqnkw/image/upload/v1651007346/GoPlay/wallpaperWitcher1920x1080_nqbohc.jpg', 'http://res.cloudinary.com/dmj6tqnkw/image/upload/v1651007346/GoPlay/wallpaperWitcher1920x1080_nqbohc.jpg'].map((n) => n);


  title = 'GoPlay';
}
