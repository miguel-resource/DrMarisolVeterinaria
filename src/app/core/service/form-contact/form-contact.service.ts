import { Injectable } from '@angular/core';
import { AngularFirestore} from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class FormContactService {

  constructor(
    private firestore: AngularFirestore,
  ) { }

  getAllMessages() {
    return this.firestore.collection("formContact").snapshotChanges();
  }

  getMessage(id:any) {
    return this.firestore.collection("formContact").doc(id).get();
  }

  createMessage(message:any){
    return this.firestore.collection("formContact").add(message);
  }

  deleteCollaborator(id:any){
    return this.firestore.collection("formContact").doc(id).delete();
  }
}
