import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';


import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  businesses: any[] = [
    {
      "name": "Andela ltd"
    },
    {
      "name": "Leviticus lab ltd"
    },
  ]
  title = 'passme';

  userIsAuthenticated: boolean = true;

  private authStatusListenerSub: Subscription;
  router: string;

  constructor(
    private authService: AuthService,
  ) {
  }

  onLogout() {
    this.authService.logout();
  }

  initContents() {
    this.authService.automaticAuthenticateUser();
    this.userIsAuthenticated = this.authService.getIsAuthenticated();
    this.authStatusListenerSub = this.authService.getAuthenticationStatusListener()
      .subscribe(isAuthenticated => {
        this.userIsAuthenticated = isAuthenticated;
      });
  }

  ngOnInit() {
    // this.initContents();
  }

  ngOnDestroy() {
    this.authStatusListenerSub.unsubscribe();
  }
}
