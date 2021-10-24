import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router'

import { PostBlogService } from './../../../core/service/post-blog/post-blog.service'
import { Post } from './../../../core/models/post.model'
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  nombre: string = "";

  constructor(
    private route: ActivatedRoute,
    private postBlogService : PostBlogService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      console.log(params.id);
      this.postBlogService.getPost(params.id).subscribe(data => {
      })
    })
  }

}
