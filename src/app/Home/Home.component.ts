import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Home',
  templateUrl: './Home.component.html',
  styleUrls: ['./Home.component.scss']
})
export class HomeComponent implements OnInit {
  rate= 4;
  label="PLAY NOW";
  functioncall(event:any) {
    console.log('functioncall', event);
  }
  onRateChange(event:any){
    console.log('The evaluation was modified and now its value is: ',event);
  // do your stuff
}
  constructor() { }

  ngOnInit() {
  }

}
