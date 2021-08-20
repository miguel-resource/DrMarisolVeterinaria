import { Component, OnInit } from '@angular/core';

import { PostsService } from 'src/app/core/service/posts/posts.service';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {

  posts: any;
  displayedColumns: string[] = ['id', 'titulo', 'contenido', 'acciones']

  constructor(
    private postsService: PostsService,
  ) { }

  ngOnInit(): void {
    this.fetchAllPosts();
  }

  fetchAllPosts(){
    this.postsService.getAllInfo()
    .subscribe(data => {
      this.posts = data;
      console.log(this.posts);
    })
  }

}
