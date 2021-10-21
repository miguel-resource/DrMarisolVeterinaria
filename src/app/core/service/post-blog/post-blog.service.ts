import { Injectable } from '@angular/core';
import { AngularFirestore} from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class PostBlogService {

  constructor(
    private firestore: AngularFirestore,
  ) { }


  getAllPosts() {
    return this.firestore.collection("posts").snapshotChanges();
  }

  getPost(id:any) {
    return this.firestore.collection("posts").doc(id).get();
  }

  createPost(post:any) {
    return this.firestore.collection("posts").add(post);
  }

  updatePost(id:any, post:any){
    return this.firestore.collection("posts").doc(id).update(post);
  }

  deletePost(id:any) {
    return this.firestore.collection("posts").doc(id).delete();
  }
}
