import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class CardhomeService {

  constructor(
    private firestore: AngularFirestore,
  ) { }

  getAllCards () {
    return this.firestore.collection("cardsHome").snapshotChanges();
  }

  getCard(id: any) {
    return this.firestore.collection("cardsHome").doc(id).get();
  }

  createCard(data: any) {
    return this.firestore.collection("cardsHome").add(data);
  }

  updateCard(id:any, data:any) {
    return this.firestore.collection("cardsHome").doc(id).update(data);
  }

  deleteCard(id:any) {
    return this.firestore.collection("cardsHome").doc(id).delete();
  }

}
