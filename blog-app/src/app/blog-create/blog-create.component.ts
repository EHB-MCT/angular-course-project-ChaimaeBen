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

  onSave(topicParam:HTMLInputElement,contentParam:HTMLInputElement,authorParam:HTMLInputElement,){
   this.postCreated.emit(
     {
       author:authorParam.value,
       topic:topicParam.value,
       content:contentParam.value
     }
   )
   }
 
}
