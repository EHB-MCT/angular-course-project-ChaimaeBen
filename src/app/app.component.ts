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
  
  title = 'GoPlay';
}
