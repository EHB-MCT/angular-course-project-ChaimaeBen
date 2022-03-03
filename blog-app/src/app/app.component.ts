import { Component, Input,Directive,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  posts :{author:String,topic:String,content:String }[]=[];
  // blogCreated = new EventEmitter<{
  //   topic: string,
  //   content:number,
  //   author: string}>();
  constructor(){
  this.posts.push({
    author:'chaimae',
    topic:"web",
    content:"bullshit"
  },
  {
    author:'chaimae',
    topic:"backend",
    content:"bullshit2"
  })
  }
   onPostCreated(postData:{author:String,topic:String,content:String}){
       this.posts.push(postData)
  }

}
