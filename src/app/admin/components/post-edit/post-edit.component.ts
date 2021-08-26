import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { PostsService } from 'src/app/core/service/posts/posts.service';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css']
})
export class PostEditComponent implements OnInit {


  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private postsService: PostsService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) { 
    this.form = this.formBuilder.group({
      title: ['', [Validators.required]],
      image: [''],
      description: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) =>{
      const id = params.id;
      this.postsService.getInfo(id)
      .subscribe(post => {
        this.form.patchValue(post)
      })
    })
  }

  savePost(event: Event){
    event.preventDefault();

    if(this.form.valid){
      const post = this.form.value;

      this.postsService.putInfo(post.id, post)
      .subscribe(data => {
        console.log(data);
        this.postsService.getAllInfo();
        this.router.navigate(['./admin/posts']);
      });

    }
  }

}
