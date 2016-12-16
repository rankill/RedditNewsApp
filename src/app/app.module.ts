// Angular core
import { BrowserModule }        from '@angular/platform-browser';
import { NgModule }             from '@angular/core';
import { FormsModule }          from '@angular/forms';
import { HttpModule }           from '@angular/http';

// Routing
import { AppRoutingModule }     from './app.routing';

// External modules
import { InfiniteScrollModule }                   from 'angular2-infinite-scroll';
import {Ng2PageScrollModule, PageScrollConfig}    from 'ng2-page-scroll'; // Library to scroll to specific id element


// Local components
import { AppComponent }         from './app.component';
import { PostsComponent }       from './posts/posts.component';
import { PostDetailComponent }  from './postsDetails/post-details.component';

// Globals
import { Globals }  from './app.globals';

// Services
import { ApiService }           from './shared/api.service';

// Directives
import { ScrollTopDirective }   from './shared/scroll-top.directive';



@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    PostDetailComponent,
    ScrollTopDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    InfiniteScrollModule,
    Ng2PageScrollModule.forRoot()
  ],
  providers: [ApiService, Globals],
  bootstrap: [AppComponent]
})

export class AppModule {

  constructor() {
    PageScrollConfig.defaultDuration = 300;
  }
}
