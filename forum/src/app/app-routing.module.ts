import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BlogDiscussionComponent } from './components/blog-discussion/blog-discussion.component';

const routes: Routes = [
  {
    path: 'discussion',
    component: BlogDiscussionComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
