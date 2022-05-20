import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-animationTitle',
  templateUrl: './animationTitle.component.html',
  styleUrls: ['./animationTitle.component.scss']
})
export class AnimationTitleComponent implements OnInit {
  @Input() title!:string;
  @Input() imgBefore:string='';
  @Input() imgAfter:string='';


  constructor() { }

  ngOnInit() {
    }

}
