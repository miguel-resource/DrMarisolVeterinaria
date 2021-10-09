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
import { DialogComponent } from './components/colaborators/dialog/dialog.component';

@NgModule({
  declarations: [
    NavComponent,
    PostsListComponent,
    FormPostsComponent,
    PostEditComponent,
    ColaboratorsComponent,
    DialogComponent,
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
