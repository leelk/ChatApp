import { Injectable } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/auth";

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(public firebaseAuth: AngularFireAuth) { }


  singIn(email: string, password: string) {
    this.firebaseAuth.signInWithEmailAndPassword(email, password).then((res) => {
      console.log(res);
    })
  }

  signUp(email: string, password: string) {
    this.firebaseAuth.createUserWithEmailAndPassword(email, password).then((res)=>{
      console.log(res);
    })
  }
}
