import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { MaterialModule } from './../material/material.module';
import { NavComponent } from './components/nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { PostsListComponent } from './components/posts-list/posts-list.component';
import { FormPostsComponent } from './components/form-posts/form-posts.component';
import { PostEditComponent } from './components/post-edit/post-edit.component';
import { ColaboratorsComponent } from './components/colaborators/colaborators.component';
import { DialogCollaboratorComponent } from './components/colaborators/dialog-collaborator/dialog-collaborator.component';
import { DialogSliderComponent } from './components/slider/dialog-slider/dialog-slider.component'
import { SliderComponent } from './components/slider/slider.component';
import { PostBlogComponent } from './components/post-blog/post-blog.component';
import { MessagesComponent } from './components/messages/messages.component';
@NgModule({
  declarations: [
    NavComponent,
    PostsListComponent,
    FormPostsComponent,
    PostEditComponent,
    ColaboratorsComponent,
    DialogCollaboratorComponent,
    SliderComponent,
    DialogSliderComponent,
    PostBlogComponent,
    MessagesComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    LayoutModule,
    FormsModule
  ]
})
export class AdminModule { }
