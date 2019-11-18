import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';


import { AuthService } from './auth/auth.service';
import { BusinessService } from './shared/business.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'passme';

  businesses: any[] = [];

  businessKey: string = "";
  userIsAuthenticated: boolean = false;

  private authStatusListenerSub: Subscription;
  private businessSub: Subscription;

  constructor(
    private authService: AuthService,
    private businessService: BusinessService
  ) {
  }

  onBusinessFilter(value) {
    this.businessKey = value
    localStorage.setItem('key', this.businessKey);
  }

  onLogout() {
    this.authService.logout();
  }

  onBusinessClick() {
    if (this.userIsAuthenticated) {
      this.businessService.getUserBusiness()
      this.businessSub = this.businessService.getAllBusinessUpdateListener()
        .subscribe(businessData => {
          this.businesses = businessData.allBusiness
        })
    }
  }

  initContents() {
    this.authService.automaticAuthenticateUser();
    this.userIsAuthenticated = this.authService.getIsAuthenticated();
    this.authStatusListenerSub = this.authService.getAuthenticationStatusListener()
      .subscribe(isAuthenticated => {
        this.userIsAuthenticated = isAuthenticated;
      });
    this.onBusinessClick()
  }

  ngOnInit() {
    this.initContents();
  }

  ngOnDestroy() {
    this.authStatusListenerSub.unsubscribe();
  }
}
