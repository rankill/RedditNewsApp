// Angular core
import { Component, OnInit, Input, Output, EventEmitter}  from '@angular/core';

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
  @Input() currentPost: Object;

  // Output to notify the back interaction
  @Output() onRemoveSelected = new EventEmitter();


  constructor() {}


  ngOnInit(): void {
    this.hideDetails = false;
  }

  goBack() {
    this.hideDetails = true;
    setTimeout(() => {
      this.currentPost = null;
      this.onRemoveSelected.emit();
    }, 800); // Delay of 800ms to be conscious with the time of the hideDeatils animation
  }
}
