import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { SpinnerService } from './spinner.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// @Injectable()
// export class SpinnerInterceptor implements HttpInterceptor {
//     // We need to store the pending requests
//     private requests: HttpRequest[] = [];
//     constructor(private spinnerService: SpinnerService) { }

//     removeRequest(req: HttpRequest) {
//         const i = this.requests.indexOf(req);
//         if (i >= 0) {
//             this.requests.splice(i, 1); // This removes the request from our array
//         }
//         // Let's tell our service of the updated status
//         this.spinnerService.isLoading.next(this.requests.length > 0);
//     }

//     intercept(req: HttpRequest, next: HttpHandler): Observable<HttpEvent> {
//         this.requests.push(req); // Let's store this request
//         this.spinnerService.isLoading.next(true);
//         next.handle(req).map(() => { this.removeRequest(req); });
//     }
// }

// export class SpinnerInterceptor implements HttpInterceptor {
//     private requests: HttpRequest[] = [];

//     constructor(private spinnerService: SpinnerService) { }

//     removeRequest(req: HttpRequest) {
//         const i = this.requests.indexOf(req);
//         if (i >= 0) {
//             this.requests.splice(i, 1);
//         }
//         this.spinnerService.isLoading.next(this.requests.length > 0);
//     }

//     intercept(req: HttpRequest, next: HttpHandler): Observable<HttpEvent> {
//         this.requests.push(req);
//         this.spinnerService.isLoading.next(true);
//         // We create a new observable which we return instead of the original
//         return Observable.create(observer => {
//             // And subscribe to the original observable to ensure the HttpRequest is made
//             const subscription = next.handle(req)
//                 .subscribe(
//                     event => {
//                         if (event instanceof HttpResponse) {
//                             this.removeRequest(req);
//                             observer.next(event);
//                         }
//                     },
//                     err => { this.removeRequest(req); observer.error(err); },
//                     () => { this.removeRequest(req); observer.complete(); });
//             // return teardown logic in case of cancelled requests
//             return () => {
//                 this.removeRequest(req);
//                 subscription.unsubscribe();
//             };
//         });
//     }
// }