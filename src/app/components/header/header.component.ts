import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  label="MY WATCHLIST";

  functioncall(event:any) {
    console.log('functioncall', event);
  }
  constructor() { }

  ngOnInit() {
  }

}
