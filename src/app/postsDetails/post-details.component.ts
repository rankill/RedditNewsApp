// Angular core
import { Component, OnInit, Input, Output, EventEmitter}  from '@angular/core';

// Services
import { ApiService } from './../shared/api.service';

// Globals
import { Globals  } from './../app.globals';

// Switch map -> To make the route of the view
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'my-reddit-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss'],
})

export class PostDetailComponent implements OnInit {
  // Animation vars
  hideDetails: boolean = false;

  // Keep the post selected from the list that is passed by the post component
  @Input()
  currentPost: Object;

  constructor(
    private globals: Globals
  ) {}


  ngOnInit(): void {
    this.hideDetails = false;
  }


  // Output to notify the back interaction
  @Output() onRemoveSelected = new EventEmitter();
  goBack() {
    this.hideDetails = true;
    setTimeout(() => {
      this.currentPost = null;
      this.onRemoveSelected.emit();
    }, 1000); // Delay of 1000ms to be conscious with the time of the hideDeatils animation
  }
}
