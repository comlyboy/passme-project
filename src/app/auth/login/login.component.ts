import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isShownPassword: boolean = false;
  viewMode = 'login';

  constructor(
    private authService: AuthService
  ) { }


  onLogin(form: NgForm) {
    if (form.invalid) {
      return;
    }

    this.authService.loginUser
      (
        form.value.inputUserName,
        form.value.inputPassword
      );
  }

  onSignup(form: NgForm) {
    if (form.invalid) {
      return;
    }

    this.authService.signupUser
      (
        form.value.inputEmail,
        form.value.inputPassword
      );
  }



  ngOnInit() {
  }

}
