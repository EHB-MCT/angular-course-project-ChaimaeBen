import { Component, Input,Directive } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'blog-app';
  author:String="Chaimae";
  topic:String="WebApps";
  content:String="Hi this is bullshit info";
  posts :{author:String,topic:String,content:String }[]=[]

  constructor(){

  }

  onSave(){
    this.posts.push(
    { author:this.author,topic:this.topic,content:this.content}
    )

  }
}
