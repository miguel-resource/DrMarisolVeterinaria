import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormContactComponent } from './components/form-contact/form-contact.component';
import { NavComponent } from './components/nav/nav.component';
import { PostsListComponent } from './components/posts-list/posts-list.component';

const routes: Routes = [
  {
    path: 'create',
    component: FormContactComponent,
  },
  {
    path: '',
    component: NavComponent
  },
  {
    path: 'posts',
    component: PostsListComponent
  }
]; 

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
