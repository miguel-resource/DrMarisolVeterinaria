import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ProvidersService {

  constructor(
    private angularFirestore: AngularFirestore
  ) { }

  getAllProviders() {
    return this.angularFirestore.collection("providers").snapshotChanges();
  }
}
