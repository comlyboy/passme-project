import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  inputType: string = 'password';
  isShownPassword: boolean = false;
  viewMode = 'login';

  constructor(
    private authService: AuthService
  ) { }

  revealPassword() {
    if (this.isShownPassword) {
      this.inputType = "password";
    } else {
      this.isShownPassword = true;
      this.inputType = "text";
    }
  }

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



  ngOnInit() {
  }

}
