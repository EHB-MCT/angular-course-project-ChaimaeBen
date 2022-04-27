import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-playButton',
  templateUrl: './playButton.component.html',
  styleUrls: ['./playButton.component.scss']
})
export class PlayButtonComponent implements OnInit {

    
  @Input() label!:string;
  @Output() onClick = new EventEmitter<any>();

  onClickButton(event:any) {
      this.onClick.emit(event);
    }
  constructor() { }

  ngOnInit() {
  }

}
