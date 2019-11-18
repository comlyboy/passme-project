import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';


import { AuthService } from 'src/app/auth/auth.service';
import { BusinessService } from 'src/app/shared/business.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


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


  ngOnInit() {
  }

}
