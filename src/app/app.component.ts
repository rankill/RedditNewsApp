// Angular core
import { Component, ViewEncapsulation } from '@angular/core';

// Globals
import { Globals  } from './app.globals';

import '../style/app.scss';

/**
 * Main Platform components
 */
@Component({
  selector: 'my-reddit-app',
  templateUrl: './app.component.html',
  styles: [require('animate.css')],
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})


export class AppComponent {

  constructor( private globals: Globals ) {}

}
