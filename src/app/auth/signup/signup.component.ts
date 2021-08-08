import { Component, OnInit } from '@angular/core';
import {FirebaseService} from "../../../core/services/firebase.service";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  email: string = '';
  password: string = '';

  constructor(private fbs: FirebaseService) { }

  ngOnInit(): void {
  }


  signUp() {
    this.fbs.signUp(this.email, this.password);
  }
}
