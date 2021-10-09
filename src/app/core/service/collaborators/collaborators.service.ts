import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class CollaboratorsService {

  constructor(
    private firestore: AngularFirestore,
  ) {}

  getAllCollaborators(){
    return this.firestore.collection("collaboratorsService").snapshotChanges();
  }

  getCollaborator(id:any) {
    return  this.firestore.collection("collaboratorsService").doc(id).get();
  }

  createCollaborator(collaborator: any){
    return this.firestore.collection("collaboratorsService").add(collaborator);
  }

  updateCollaborator(id:any, data:any){
    return this.firestore.collection("collaboratorsService").doc(id).update(data);
  }

  deleteCollaborator(id:any){
    return this.firestore.collection("collaboratorsService").doc(id).delete();
  }
}
