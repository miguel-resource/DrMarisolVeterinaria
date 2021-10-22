import { Component, OnInit } from '@angular/core';

import { PostBlogService } from './../../../core/service/post-blog/post-blog.service'
import { Post } from '../../../core/models/post.model'


//Dialog here >>>
import { MatDialog } from '@angular/material/dialog';
import { DialogPostComponent } from './dialog-post/dialog-post.component'

@Component({
  selector: 'app-post-blog',
  templateUrl: './post-blog.component.html',
  styleUrls: ['./post-blog.component.css']
})
export class PostBlogComponent implements OnInit {


  posts: Post[] = [];
  displayedColumns: string[] = ['id','nombre', 'tipo', 'fecha', 'acciones']
  date: number = Date.now();

  constructor(
    private postBlogService: PostBlogService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.postBlogService.getAllPosts().subscribe(resp => {
      this.posts = resp.map((e:any) => {
        return {
          nombre: e.payload.doc.data().nombre,
          tipo: e.payload.doc.data().tipo,
          fecha: e.payload.doc.data().fecha,
          caratula: e.payload.doc.data().caratula,
          contenido: e.payload.doc.data().contenido,
          idFirebase: e.payload.doc.id
        }
      })
    }, error => {
      console.error(error);
    })


    console.log(this.date);

  }

  delete(id:any) {
    if(confirm("¿Estás segur@ que quieres eliminar este post?")) {
      this.postBlogService.deletePost(id);
    }
  }

  update(item:any)  {
    let dialogRef = this.dialog.open(DialogPostComponent, {
      width: '1700px',
      data: {
        nombre: item.nombre,
        tipo: item.tipo,
        fecha: this.dateActuall(),
        caratula: item.caratula,
        contenido: item.contenido,
        idFirebase: item.idFirebase,
      }
    })
  }

  openCreate():void {
    const dialogRef = this.dialog.open(DialogPostComponent, {
      width: '1700px'
    });
  }

  test(item:any) {
    console.log(item.idFirebase);
  }

  dateActuall() {
    if(true) {
      return this.date;
    }

  }


}
