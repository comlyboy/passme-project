import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { NotificationsService } from 'src/app/shared/notifications.service';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class BusinessService {
  API_URL = environment.API_URL
  businesses: any[];

  constructor(
    private http: HttpClient,
    public notificationsService: NotificationsService
  ) { }



  private allBusinessUpdated = new Subject<{
    allBusiness: any[];
  }>();


  getAllBusinessUpdateListener() {
    return this.allBusinessUpdated.asObservable();
  }




  getUserBusiness() {


    this.http
      .get<any>(
        `${this.API_URL}organization/business/`
      )
      .subscribe(businessData => {
        // console.log(businessData)
        this.businesses = businessData;
        this.allBusinessUpdated.next({
          allBusiness: [...this.businesses]

        });
      }, error => {
        console.log(error)

      });

  }

}
