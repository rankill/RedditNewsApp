import { BrowserModule }        from '@angular/platform-browser';
import { NgModule }             from '@angular/core';
import { FormsModule }          from '@angular/forms';
import { HttpModule }           from '@angular/http';

// Routing
import { AppRoutingModule }     from './app.routing';


// Local components
import { AppComponent }         from './app.component';
import { PostsComponent }       from './posts/posts.component';
import { PostDetailComponent }  from './postsDetails/post-details.component';


// Services
import { ApiService }        from './shared/api.service';


@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    PostDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
