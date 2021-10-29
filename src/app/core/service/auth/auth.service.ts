import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private angularFireAuth: AngularFireAuth,    

  ) { }

  createUser(email:string, password:string){
    return this.angularFireAuth.createUserWithEmailAndPassword(email, password);
  }

  loguinUser(email:string, password:string) { 
    return this.angularFireAuth.signInWithEmailAndPassword(email, password);
  }

  logOut() { 
    return this.angularFireAuth.signOut();
  }

  isLogin() { 
    return this.angularFireAuth.authState;
  }
}
