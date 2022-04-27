import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-watchlistButton',
  templateUrl: './watchlistButton.component.html',
  styleUrls: ['./watchlistButton.component.scss']
})
export class WatchlistButtonComponent implements OnInit {

   
  @Input() label!:string;
  @Output() onClick = new EventEmitter<any>();

  onClickButton(event:any) {
      this.onClick.emit(event);
    }

  constructor() { }

  ngOnInit() {
  }

}
