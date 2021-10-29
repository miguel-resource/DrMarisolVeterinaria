import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(
    private angularFirestore: AngularFirestore,
  ) { }


  getAllServices() { 
    return this.angularFirestore.collection("services").snapshotChanges();
  }

}
