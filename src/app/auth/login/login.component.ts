import { Component, OnInit } from '@angular/core';
import {FirebaseService} from "../../../core/services/firebase.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  email: string = '';
  password: string = '';

  constructor(private fbs: FirebaseService) { }


  ngOnInit(): void {
  }


  login() {
    this.fbs.singIn(this.email, this.password);
  }

}
