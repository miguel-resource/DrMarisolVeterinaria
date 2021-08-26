import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { PostsService } from 'src/app/core/service/posts/posts.service';
import { MyValidators } from 'src/app/utils/validators';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-form-posts',
  templateUrl: './form-posts.component.html',
  styleUrls: ['./form-posts.component.css']
})
export class FormPostsComponent implements OnInit {

  form: FormGroup;
  image$!: Observable<any>;

  constructor(
    private formBuilder: FormBuilder,
    private postsService: PostsService,
    private router: Router,
    private storage: AngularFireStorage
  ) { 
    this.form = this.formBuilder.group({
      id: ['', [Validators.required, MyValidators.isPriceValid]],
      title: ['', [Validators.required, Validators.minLength(30) ]],
      image: [''],
      description: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
  }

  savePost(event: Event){

    event.preventDefault();
    if(this.form.valid){
      const post = this.form.value;
      this.postsService.postInfo(post)
      .subscribe(data => {
        console.log(data);
        this.postsService.getAllInfo();
        this.router.navigate(['./admin/posts']);
      });
    }
  }

  uploadFile(event:any){
    const file = event.target.files[0];
    const name = 'img';
    const fileRef = this.storage.ref(name);
    const task = this.storage.upload(name, file);

    task.snapshotChanges()
    .pipe(
      finalize(() => {
        this.image$ = fileRef.getDownloadURL();
        this.image$.subscribe(url => {
          this.form.get('image')?.setValue(url);
        })
      })
    )
    .subscribe();
  }


}
