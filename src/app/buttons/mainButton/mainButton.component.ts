import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-mainButton',
  templateUrl: './mainButton.component.html',
  styleUrls: ['./mainButton.component.scss']
})
export class MainButtonComponent implements OnInit {
  
  @Input() label!:string;
  @Output() onClick = new EventEmitter<any>();

  onClickButton(event:any) {
      this.onClick.emit(event);
    }
  constructor() { }

  ngOnInit() {
  }

}
