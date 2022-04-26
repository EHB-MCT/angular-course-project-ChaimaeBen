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
   images = ['https://res.cloudinary.com/dmj6tqnkw/image/upload/v1650510769/GoPlay/witcher_kxibqb.jpg', 'https://res.cloudinary.com/dmj6tqnkw/image/upload/v1650510769/GoPlay/witcher_kxibqb.jpg', 'https://res.cloudinary.com/dmj6tqnkw/image/upload/v1650510769/GoPlay/witcher_kxibqb.jpg'].map((n) => n);


  title = 'GoPlay';
}
