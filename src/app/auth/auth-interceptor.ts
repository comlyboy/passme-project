// this fies serves as an interceptor to all http requests so as to verify users credentials
// Checks Authentication, Authorization and roles

import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { AuthService } from './auth.service';



@Injectable()


export class AuthInterceptor implements HttpInterceptor {
    constructor(private injector: Injector) { }

    // constructor(private authService: AuthService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        const authSerrvice = this.injector.get(AuthService);

        const tenant = authSerrvice.getTenent();
        const token = authSerrvice.getToken();
        if (token) {
            req = req.clone({
                setHeaders: {
                    Authorization: `Token ${token}`,
                    Tenant: `${tenant}`,
                },
            });
        }
        return next.handle(req);

        // const clonedToken = req.clone({
        //     // Below is authorization string from authservice
        //     // headers: req.headers.set('Authorization', "Token " + token)
        //     setHeaders: {
        //         Authorization: `Token ${token}`,
        //         Tenant: `${tenant}`
        //     },
        // });

        // return next.handle(clonedToken);
    };
    //  to be injected in app module ts
}

