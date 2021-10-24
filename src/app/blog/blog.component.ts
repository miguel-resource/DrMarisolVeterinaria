import { Component, OnInit } from '@angular/core';
import { Post } from './../core/models/post.model';
import { PostBlogService } from './../core/service/post-blog/post-blog.service'
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  text: string = "";
  posts: Post[] = [];

  constructor(
    private postBlogService: PostBlogService,
  ) { }

  ngOnInit(): void {
    this.postBlogService.getAllPosts().subscribe(data => {
      this.posts = data.map((e:any) => {
        return  {
          nombre: e.payload.doc.data().nombre,
          tipo: e.payload.doc.data().tipo,
          fecha: e.payload.doc.data().fecha,
          caratula: e.payload.doc.data().caratula,
          introduccion: e.payload.doc.data().introduccion,
          contenido: e.payload.doc.data().contenido,
          idFirebase: e.payload.doc.id,
        }
      })
    }, error => {
      console.error(error);
    })
  }

}
