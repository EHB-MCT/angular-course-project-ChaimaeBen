import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-create',
  templateUrl: './blog-create.component.html',
  styleUrls: ['./blog-create.component.scss']
})
export class BlogCreateComponent implements OnInit {
  title = 'blog-app';
  author:String="";
  topic:String="";
  content:String="";
  posts :{author:String,topic:String,content:String }[]=[]

  constructor(){

  }

  onSave(){
   console.log('something has been added')

  }


  ngOnInit(): void {
  }

}
