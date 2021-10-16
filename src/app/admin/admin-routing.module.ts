import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NavComponent } from './components/nav/nav.component';
import { PostsListComponent } from './components/posts-list/posts-list.component';
import { FormPostsComponent } from './components/form-posts/form-posts.component';
import { ColaboratorsComponent } from './components/colaborators/colaborators.component'
import { SliderComponent } from './components/slider/slider.component';
import { PostBlogComponent } from './components/post-blog/post-blog.component';

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
        path: 'slider',
        component: SliderComponent
      },
      {
        path: 'posts',
        component: PostBlogComponent
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
