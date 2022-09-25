import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Timestamp } from 'rxjs/internal/operators/timestamp';
import { AngularFireStorage } from '@angular/fire/storage';

import { Post } from './../../../../core/models/post.model'
import { PostBlogService } from './../../../../core/service/post-blog/post-blog.service'

import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-dialog-post',
  templateUrl: './dialog-post.component.html',
  styleUrls: ['./dialog-post.component.css']
})
export class DialogPostComponent implements OnInit {

  formPost: FormGroup = new FormGroup({});
  idUpdateFirebase:string = ""
  tipo:string = "";
  date: any;
  image: string = "";
  text: string = "";
  introduccion: FormControl = new FormControl('', [Validators.required, Validators.minLength(150)])

  constructor(
    private postBlogService: PostBlogService,
    private formBuilder: FormBuilder,
    private dialogRef:  MatDialogRef<DialogPostComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Post
  ) { }

  ngOnInit(): void {
    this.formPost = this.formBuilder.group({
      nombre: ['', Validators.required],
      tipo: ['', Validators.required],
      fecha: [''],
      caratula: ['', Validators.required],
      introduccion : ['', Validators.required],
      contenido: ['', Validators.required],
    })

    if(this.data !== null)  {

      this.tipo = this.data.tipo;
      this.date = this.data.fecha;
      this.image = this.data.caratula;
      this.text = this.data.contenido;
      this.idUpdateFirebase = this.data.idFirebase;

      console.log(this.data.introduccion);

      this.formPost.patchValue({
        nombre: this.data.nombre,
        tipo: this.data.tipo,
        fecha: this.data.fecha,
        caratula: this.data.caratula,
        introduccion: this.data.introduccion,
        contenido: this.data.contenido,
      })
    }else {
      console.log(Math.floor(Date.now() / 1000))
      this.formPost.patchValue({
        fecha: Math.floor(Date.now() / 1000)
      })
    }
  }

  updatePost() {
    this.postBlogService.updatePost(this.idUpdateFirebase, this.formPost.value)
    .then(result => {
      this.formPost.reset();
      this.dialogRef.close();
    }).catch(error =>  {
      console.error(error);
    })
  }


  createPost() {
    this.postBlogService.createPost(this.formPost.value)
    .then(result => {
      this.formPost.reset();
      this.dialogRef.close();
    }).catch(error => {
      console.error(error);
    })
  }

}
