// Angular core
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

// Services
import { ApiService } from './../shared/api.service';

// Classes
//import { Post } from './../../classes/post';

// Switch map -> To make the route of the view
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-reddit-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})

export class PostDetailComponent implements OnInit {
  title: string = 'Details';
  currentPost: Array;

  constructor(
    private api: ApiService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.params
      .switchMap((_params: Params) => this.api.getPostDetails(_params['id']))
      .subscribe(_post => {
        console.warn('Post', _post)
        this.currentPost = _post;
      });
  }

  goBack(): void {
    this.location.back();
  }
}
