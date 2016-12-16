import { Component, OnInit} from '@angular/core';

// Component - Only for the template
import { PostDetailComponent } from '../postsDetails/post-details.component';

// Services
import { ApiService } from './../shared/api.service';

// Globals
import { Globals  }   from './../app.globals';

// External
import { PageScrollService, PageScrollInstance, PageScrollConfig } from 'ng2-page-scroll';

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



  constructor(
    private api: ApiService,
    private globals: Globals ,
    private pageScrollService: PageScrollService,
  ) {
    // Offset of the scroll because the height of the fixed header
    PageScrollConfig.defaultScrollOffset = 60;
  }

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
      }, error => {
        this.errorPosts = true;
        this.loading = false;
      });
  }

  /**
   * Function to get the details of the post selected
   * @param _post - The current post selected
   */
  getPostDetails(_post: Object): void {
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
    // Keep the temp id to execute the scroll
    let _tempSelectedPostId =  this.selectedPost.id;

    // Clean the selected post
    this.selectedPost = null;

    // Timeout while the view render the elements again
    setTimeout( () => {
      // Get the scroll instance, with the current DOM id
      let pageScrollInstance: PageScrollInstance = PageScrollInstance
        .simpleInstance(document, '#post_' + _tempSelectedPostId);

      // Execute the scroll to the current instance
      this.pageScrollService.start(pageScrollInstance);
    }, 0);
  }
}
