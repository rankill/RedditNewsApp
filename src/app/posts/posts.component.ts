import { Component, OnInit} from '@angular/core';

// Component - Only for the template
import { PostDetailComponent } from '../postsDetails/post-details.component';

// Services
import { ApiService  } from './../shared/api.service';

// Globals
import { Globals  } from './../app.globals';

@Component({
  selector: 'my-reddit-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})

export class PostsComponent implements OnInit {
  posts: Array[] = [];
  selectedPost: Object;

  // Control vars
  loading: boolean = false;
  loadingMsg: string = 'Loading posts';
  errorPosts: boolean = false;



  constructor( private api: ApiService, private globals: Globals ) { }

  ngOnInit(): void {
    this.getPostsList();
  }

  /**
   * Function to get list of latest reddit posts from the main API
   * @param _refresh
   */
  getPostsList(_refresh = false): void {
    this.loading = true;

    this.api.getLatestPosts(_refresh)
      .then(_posts => {
        this.loading = false;
        this.posts = _posts;
      }, error => this.errorPosts = true);
  }

  /**
   * Function to get the details of the post selected
   * @param _post - The current post selected
   */
  getPostDetails(_post: Object): void {
    console.warn('Get details', _post);
    this.selectedPost = _post;
  }


  /**
   * Function executed by the directive infinite scroll when the scroll reaches the bottom of the container,
   * In this case, the funcion will loaded more posts if possible
   */
  onScrollBottom(): void  {
    this.loadingMsg = 'Loading more posts';
    this.getPostsList();
  }


  /**
   * Function to refresh the list of latest reddit posts, cleaning the current list
   */
  refreshPosts(): void {
    this.loadingMsg = 'Refreshing';
    this.posts = [];
    this.getPostsList(true);
  }


  /**
   * Visual function to manage the box to see the details of specific post
   * @param _post - Object current post ineracted
   * @param _state - true to open the box, false to close the box
   */
  openDetailsBox(_post = null, _state = false): void {
    if (!_post) return;

    // noinspection TypeScriptUnresolvedVariable
    /**
     * Map the array to close all the details boxes
     */
    this.posts.map(_currentPost => _currentPost.showDetailBtn = false);


    // If the state passed is true, shoul open the details box of the current post
    if (_state) {
      _post.showDetailBtn = true;
    }
  }


  /**
   * Function that clean the current selected post, it is executed from the post details component by output decorator
   * @param $event
   */
  cleanPostSelected($event) {
    this.selectedPost = null;
  }

}
