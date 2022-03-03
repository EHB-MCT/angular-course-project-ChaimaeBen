import { Component, OnInit, Output ,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-blog-create',
  templateUrl: './blog-create.component.html',
  styleUrls: ['./blog-create.component.scss']
})
export class BlogCreateComponent implements OnInit {
  author:String="";
  topic:String="";
  content:String="";

 @Output("postCreated") postCreated =new EventEmitter<{
    author:String,
    topic:String,
    content:String,
    }>();
  constructor(){

  }

  ngOnInit(): void {
  }

  onSave(){
   this.postCreated.emit(
     {
       author:this.author,
       topic:this.topic,
       content:this.content
     }
   )
   }
 
}
