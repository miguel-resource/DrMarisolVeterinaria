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
  tipo: string = "";
  fecha!: number;
  caratula: string = "";
  contenido : string = "";

  constructor(
    private route: ActivatedRoute,
    private postBlogService : PostBlogService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.postBlogService.getPost(params.id).subscribe((data:any) => {
        this.nombre = data.data().nombre;
        this.tipo = data.data().tipo;
        this.fecha = data.data().fecha;
        this.caratula = data.data().caratula;
        this.contenido = data.data().contenido;
      })
    })

  }

}
