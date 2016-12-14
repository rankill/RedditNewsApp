import { Component, OnInit } from '@angular/core';

// Services
import { ApiService  } from './../shared/api.service';

// Globals
import { Globals  } from './../app.globals';

@Component({
  selector: 'app-reddit-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})

export class PostsComponent implements OnInit {
  title: string= `Home`;
  posts: Array[] = [];

  // Control vars
  loading: boolean = false;
  loadingMsg: string = 'Loading posts';
  errorPosts: boolean = false;
  isOpenBox: boolean = false;

  constructor( private api: ApiService, private globals: Globals ) { }

  ngOnInit(): void {
    console.warn('Inicio');
    this.getPostsList();
  }


  getPostsList(_refresh:boolean = false) : void {
    console.debug('Get posts');

    this.loading = true;

    this.api.getLatestPosts(_refresh)
      .then(_posts => {
        console.warn('Posts', _posts);
        this.loading = false;
        this.posts = _posts;
      }, error => this.errorPosts = true);
  }

  onScrollBottom(): void  {
    console.log('scrolled!!')
    this.loadingMsg = 'Loading more posts';
    this.getPostsList();
  }


  reloadPosts(): void {
    console.warn('A recargar');
    this.loadingMsg = 'Refreshing';
    this.posts = [];
    this.getPostsList(true);
  }


  openDetailsBox(_post = null, _state = false):void {
    if(!_post) return;

    console.warn('Debo abrir el box de details?', _post, _state );

     //noinspection TypeScriptUnresolvedVariable
    this.posts.map(_currentPost => _currentPost.showDetailBtn = false);


    if (_state){
      _post.showDetailBtn = true;
    }
  }
}
