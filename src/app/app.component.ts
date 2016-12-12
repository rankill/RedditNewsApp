// Angular core
import { Component } from '@angular/core';

import '../style/app.scss';


@Component({
  selector: 'reddit-app',
  templateUrl:'./app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent{
  title = 'Reddit Latest Posts - Angular 2 version';
}
