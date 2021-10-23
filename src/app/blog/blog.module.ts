import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './blog.component'
import { BlogRoutingModule } from './blog-routing.module'
import { MaterialModule } from '../material/material.module';
import { ShowdownModule } from 'ngx-showdown';
import {FormsModule} from '@angular/forms';
import { PostComponent } from './components/post/post.component';

@NgModule({
  declarations: [
    BlogComponent,
    PostComponent
  ],
  imports: [
    BlogRoutingModule,
    CommonModule,
    MaterialModule,
    ShowdownModule,
    FormsModule
  ]
})
export class BlogModule { }
