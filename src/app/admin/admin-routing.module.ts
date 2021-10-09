import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NavComponent } from './components/nav/nav.component';
import { PostsListComponent } from './components/posts-list/posts-list.component';
import { FormPostsComponent } from './components/form-posts/form-posts.component';
import { PostEditComponent } from './components/post-edit/post-edit.component';
import { ColaboratorsComponent } from './components/colaborators/colaborators.component'

const routes: Routes = [
  {
    path: '',
    component: NavComponent,
    children: [
      {
        path: '',
        component: ColaboratorsComponent,
      },
      {
        path: 'posts',
        component: PostsListComponent
      },
      {
        path: 'posts/edit/:id',
        component: PostEditComponent
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
