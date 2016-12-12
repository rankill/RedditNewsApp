import { Component, OnInit } from '@angular/core';

// Services
import { ApiService  } from './../shared/api.service';

// Classes
//import { Post } from './../../classes/post';

// Constants
const postLimit = 50;

@Component({
  selector: 'app-reddit-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})

export class PostsComponent implements OnInit {

  title = `Home`;
  infoQuantity = `Listed ${postLimit} posts`;
  posts: Array[];
  errorPosts = false;


  constructor( private api: ApiService ) { }

  ngOnInit(): void {
    console.warn('Inicio');

    //noinspection TypeScriptUnresolvedFunction
    this.api.getLatestPosts(postLimit)
      .then(_posts => {
        console.warn('Pedido pai', _posts);
        this.posts = _posts;
      }, error => this.errorPosts = true);
  }
}
