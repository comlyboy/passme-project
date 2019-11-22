import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

import { ISignup, ILogin, IUser } from '../interfaces/user';

import { NotificationsService } from '../shared/notifications.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  API_URL = environment.API_URL
  tenant: string;
  authenticationStatusListener = new Subject<boolean>();
  private token: string;
  private isAuthenticated: boolean = false;
  private user;
  onBoarding: string = "isOnBoarding";

  constructor(
    private http: HttpClient,
    private router: Router,
    public notificationsService: NotificationsService
  ) { }


  // listening for authentication status
  getAuthenticationStatusListener() {
    return this.authenticationStatusListener.asObservable();
  }

  // user authentication token
  getToken() {
    return this.token;
  }
  // user authentication token
  getTenent() {
    return this.tenant;
  }

  // getting if user is authenticated
  getIsAuthenticated() {
    return this.isAuthenticated;
  }


  // Adding new user
  signupUser(email: string, password: string) {
    const signupData: ISignup = {
      email: email,
      password: password,
    };
    console.log(signupData)
    this.http.post<{
      tenant: string,
      token: string,
      user: IUser
    }>(`${this.API_URL}users/`, signupData)
      .subscribe(response => {
        this.loginUser(email, password)

      }, error => {
        console.log(error)
      });
  }


  // logging in existing user
  loginUser(email: string, password: string) {
    const loginData: ILogin = {
      email: email,
      password: password
    };
    this.http.post<{
      tenant: string,
      token: string,
      user: IUser
    }>(`${this.API_URL}users/login/`, loginData)
      .subscribe(response => {
        const _token = response.token;
        this.token = _token;
        if (_token) {
          this.isAuthenticated = true;
          this.tenant = response.tenant;
          this.user = response.user;
          this.authenticationStatusListener.next(true);
          this.saveAuthenticationData(this.tenant, _token, this.user);
          // console.log(this.user.first_login)
          this.notificationsService.success(`Welcome ${response.user.username}`);
          if (this.user.first_login) {
            this.router.navigate(['onboarding']);

          } else {
            this.router.navigate(['dashboard']);
          }
        };
      }, error => {
        console.log(error)
        this.authenticationStatusListener.next(false);

      });
  }


  // Logging user out
  logout() {
    this.tenant = null;
    this.token = null;
    this.isAuthenticated = false;
    this.authenticationStatusListener.next(false);
    this.user = null;
    this.clearAuthenticationData();
    this.notificationsService.success('logged out Successfull');
    this.router.navigate(['auth']);
  }




  // this gets the user authentication data
  private getAuthenticationData() {
    const tenant = localStorage.getItem('tenant');
    const token = localStorage.getItem('token');
    const user = localStorage.getItem('user');

    // checks availability
    if (!token || !tenant) {
      return;
    }
    return {
      tenant,
      token,
      user
    };
  }

  // persists user authentication automatically
  automaticAuthenticateUser() {
    const authenticationInformation = this.getAuthenticationData();
    // console.log(authenticationInformation)
    if (!authenticationInformation) {
      return;
    } else {
      this.tenant = authenticationInformation.tenant;
      this.token = authenticationInformation.token;
      this.isAuthenticated = true;
      this.user = authenticationInformation.user;
      this.authenticationStatusListener.next(true);
    }
  }

  // this saves the authentication datas to the browser
  private saveAuthenticationData(tenant: string, token: string, user: any) {
    localStorage.setItem('tenant', tenant);
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
    // this.router.navigate(['onboarding']);
  }

  // this removes authentication data from the browser
  // this is called during logout
  private clearAuthenticationData() {
    localStorage.removeItem('tenant');
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.removeItem('key');
  }


}
