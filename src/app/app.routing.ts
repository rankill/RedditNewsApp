// angular core
import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

// local components
import { PostsComponent }        from './posts/posts.component';
import { PostDetailComponent }   from './postsDetails/post-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/last_posts', pathMatch: 'full' },
  { path: 'last_posts',  component: PostsComponent },
  { path: 'detail/:id',  component: PostDetailComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
