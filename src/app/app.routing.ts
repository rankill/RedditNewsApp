// angular core
import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

// local components
import { PostsComponent }        from './posts/posts.component';


// General page routes
const routes: Routes = [
  // Main route
  { path: 'last_posts',  component: PostsComponent},
  { path: '', redirectTo: '/last_posts', pathMatch: 'full' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
