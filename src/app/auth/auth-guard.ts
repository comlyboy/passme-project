// This file prevents non authenticated user from accessing some pages

import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { AuthService } from './auth.service';
import { NotificationsService } from 'src/app/shared/notifications.service';



@Injectable({ providedIn: "root" })



export class AuthGuard implements CanActivate {
    constructor(
        private authService: AuthService,
        private router: Router,
        public notificationsService: NotificationsService
    ) { }


    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        const isAuth = this.authService.getIsAuthenticated();
        if (!isAuth) {
            this.notificationsService.notAllowed('Log in to view the page')
            this.router.navigate(["auth"]);
        }
        return isAuth;
        // this method is implemented in app routing module ts
    }

}
