import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsService } from './service/posts/posts.service';
import { AuthService } from './service/auth/auth.service';
import { CollaboratorsService } from './service/collaborators/collaborators.service'
import { CardhomeService } from './service/cardhome/cardhome.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  providers: [
    PostsService,
    CollaboratorsService,
    CardhomeService
  ]
})
export class CoreModule { }
