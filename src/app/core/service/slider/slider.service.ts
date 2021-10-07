import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class SliderService {

  constructor(
    private firestore: AngularFirestore,
  ) { }
  
  getAllSliders() {
    return this.firestore.collection("sliderHome").snapshotChanges();
  }

  getSlider(id:any) {
    return this.firestore.collection("sliderHome").doc(id).get();
  }

  createSlider(data:any) { 
    return  this.firestore.collection("sliderHome").add(data);
  }

  updateSlider(id: any, data: any) {
    return this.firestore.collection("sliderHome").doc(id).update(data);
  }

  deleteSlider(id:any) { 
    return this.firestore.collection('sliderHome').doc(id).delete();
  }

}
