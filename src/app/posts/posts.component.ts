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
  loadingMore : boolean = false;

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

  onScroll(): void  {
    console.log('scrolled!!')
    this.loadingMore = true;

    //noinspection TypeScriptUnresolvedFunction
    setTimeout(() => {
      this.api.getLatestPosts()
        .then(_posts => {
          console.warn('Pidiendo mas pai', _posts);
          this.loadingMore = false;
          this.posts = this.posts.concat(_posts);
        }, error => this.errorPosts = true);
    }, 1000);

  }
}
