// this fies serves as an interceptor to all http requests so as to verify users credentials
// Checks Authentication, Authorization and roles

import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { NotificationsService } from './shared/notifications.service';



@Injectable()


export class ErrorInterceptor implements HttpInterceptor {
    constructor(private notificationsService: NotificationsService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        return next.handle(req).pipe(
            catchError((error: HttpErrorResponse) => {
                // this.notificationsService.error(error.error.message);
                console.log(`Found error: ${JSON.stringify(error)}`)
                return throwError(error)
            })
        );
    };
    //  to be injected in app module ts
}

