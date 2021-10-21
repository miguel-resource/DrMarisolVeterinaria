import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { Post } from './../../../../core/models/post.model'
import { PostBlogService } from './../../../../core/service/post-blog/post-blog.service'

@Component({
  selector: 'app-dialog-post',
  templateUrl: './dialog-post.component.html',
  styleUrls: ['./dialog-post.component.css']
})
export class DialogPostComponent implements OnInit {

  formPost: FormGroup = new FormGroup({});
  idUpdateFirebase:string = "";


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
      fecha: ['', Validators.required],
      caratula: ['', Validators.required],
      contenido: ['', Validators.required],
    })


    this.formPost.patchValue({
      nombre: this.data.nombre,
      tipo: this.data.tipo,
      fecha: this.data.fecha,
      caratula: this.data.caratula,
      contenido: this.data.contenido,
    })
  }



}
