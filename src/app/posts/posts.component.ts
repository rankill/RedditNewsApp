import { Component, OnInit } from '@angular/core';

// Services
import { ApiService  } from './../shared/api.service';

// Classes
//import { Post } from './../../classes/post';


@Component({
  selector: 'app-reddit-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})

export class PostsComponent implements OnInit {
  title = `Home`;
  posts: Array[];
  showDetailsBtn : boolean = false;
  errorPosts : boolean = false;



  constructor( private api: ApiService ) { }

  ngOnInit(): void {
    console.warn('Inicio');

    //noinspection TypeScriptUnresolvedFunction
    this.api.getLatestPosts()
      .then(_posts => {
        console.warn('Pedido pai', _posts);
        this.posts = _posts;
      }, error => this.errorPosts = true);
  }

  toggleDetailBtn() : void{
    this.showDetailsBtn = !this.showDetailsBtn
  }

  swipe(_currentPost: any, action = 'swiperight') {
    // swipe right, close details button
    if (action === 'swipeleft') {
      _currentPost.showDetailBtn = false
      alert('swipe left')
    }

    // swipe right, open details button
    if (action === 'swiperight') {
      _currentPost.showDetailBtn = true
      alert('swipe right')
    }
  }

}
