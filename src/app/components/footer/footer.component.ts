import { Component, OnInit } from '@angular/core';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';
import { faInstagram,faYoutube } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  faCopyright = faCopyright;
  faInstagram = faInstagram;
  faYoutube = faYoutube;
  constructor() { }

  ngOnInit(): void {
  }

}
