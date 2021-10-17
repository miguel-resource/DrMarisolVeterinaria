import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NavComponent } from './components/nav/nav.component';
import { ColaboratorsComponent } from './components/colaborators/colaborators.component'
import { SliderComponent } from './components/slider/slider.component';
import { PostBlogComponent } from './components/post-blog/post-blog.component';
import { MessagesComponent } from './components/messages/messages.component';


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
      },
      {
        path: 'messages',
        component: MessagesComponent
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
