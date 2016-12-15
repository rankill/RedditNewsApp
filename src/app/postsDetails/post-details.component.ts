// Angular core
import { Component, OnInit, Input, Output, EventEmitter}  from '@angular/core';
import { ActivatedRoute, Params }                         from '@angular/router';
import { Location }                                       from '@angular/common';

// Services
import { ApiService } from './../shared/api.service';

// Globals
import { Globals  } from './../app.globals';

// Switch map -> To make the route of the view
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-reddit-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss'],
})

export class PostDetailComponent implements OnInit {
  currentPost: Array;
  hideDetails: boolean = false;

  @Input()
  currentPost: Object;

  constructor(
    private api: ApiService,
    private route: ActivatedRoute,
    private location: Location,
    private globals: Globals
  ) {}


  ngOnInit(): void {
    // this.route.params
    //   .switchMap((_params: Params) => this.api.getPostDetails(_params['id']))
    //   .subscribe(_post => {
    //     console.warn('Post', _post)
    //     this.currentPost = _post;
    //   });

    this.hideDetails = false;
  }


  @Output() onRemoveSelected = new EventEmitter();
  goBack() {
    this.hideDetails = true;

    setTimeout(() => {
      this.currentPost = null;
      this.onRemoveSelected.emit()
    }, 1000)
  }
}
