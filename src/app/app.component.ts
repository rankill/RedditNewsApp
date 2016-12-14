// Angular core
import { Component } from '@angular/core';

// Globals
import { Globals  } from './app.globals';

import '../style/app.scss';


@Component({
  selector: 'reddit-app',
  templateUrl:'./app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent{

  constructor( private globals: Globals ){}

  title = 'Reddit News';
}
