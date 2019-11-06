import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
environment
import { NotificationsService } from '../shared/notifications.service';
import { ILogin } from "../interfaces/login";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  API_URL_USER = environment.API_URL
  tenant: string;
  private authenticationStatusListener = new Subject<boolean>();
  token: string;
  isAuthenticated: boolean = false;
  user: {};
  // private userDataUpdateListener = new Subject<{
  //   user: {};
  // }>();

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

  // getting if user is authenticated
  getIsAuthenticated() {
    return this.isAuthenticated;
  }


  // logging in existing user
  loginUser(username: string, password: string) {
    const loginData: ILogin = {
      username: username,
      password: password
    };
    console.log(loginData)

    this.http.post<{
      tenant: string,
      token: string,
      user: {
        email: string,
        first_login: boolean
        first_name: string
        id: number
        is_employee: boolean
        is_owner: boolean
        last_name: string
        middle_name: string
        username: string
      }
    }>(`${this.API_URL_USER}/users/login/`, loginData)
      .subscribe(response => {
        console.log(response.user)

        const _token = response.token;
        this.token = _token;
        if (_token) {
          this.isAuthenticated = true;
          this.tenant = response.tenant;
          this.user = response.user;
          this.authenticationStatusListener.next(true);
          this.saveAuthenticationData(this.tenant, _token, this.user);
          this.notificationsService.success(`Welcome ${response.user.username}`);
          this.router.navigate(['dashboard']);


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
    this.router.navigate(['login']);

  }


  // this saves the authentication datas to the browser
  private saveAuthenticationData(tenant: string, token: string, user: any) {
    localStorage.setItem('tenant', tenant);
    localStorage.setItem('token', token);
    localStorage.setItem('user', user);
  }

  // this gets the user authentication data
  private getAuthenticationData() {
    const tenant = localStorage.getItem('tenant');
    const token = localStorage.getItem('token');
    const user = localStorage.getItem('user');
    // checks availability
    if (!token || !this.tenant) {
      console.log(tenant, token)
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
    console.log(authenticationInformation)
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



  // this removes authentication data from the browser
  // this is called during logout
  private clearAuthenticationData() {
    localStorage.removeItem('tenant');
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }


}
