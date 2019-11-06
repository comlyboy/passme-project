import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'passme';

  userIsAuthenticated: boolean = false;
  private authStatusListenerSub: Subscription;
  constructor(
    private authService: AuthService
  ) { }

  onLogout() {
    this.authService.logout();
  }

  initContents() {
    this.userIsAuthenticated = this.authService.getIsAuthenticated();
    this.authStatusListenerSub = this.authService.getAuthenticationStatusListener().subscribe(isAuthenticated => {
      this.userIsAuthenticated = isAuthenticated;
    });
    this.authService.automaticAuthenticateUser();
    console.log(this.userIsAuthenticated)
  }

  ngOnInit() {
    this.initContents();
  }

  ngOnDestroy() {
    this.authStatusListenerSub.unsubscribe();
  }
}
