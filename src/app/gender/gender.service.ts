import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

import { NotificationsService } from 'src/app/shared/notifications.service';
import { environment } from 'src/environments/environment';
import { IGender } from '../interfaces';


@Injectable({
  providedIn: 'root'
})
export class GenderService {
  API_URL = environment.API_URL
  genders: any[];

  constructor(
    private http: HttpClient,
    private router: Router,
    public notificationsService: NotificationsService
  ) { }


  private allGenderUpdated = new Subject<{
    allGenders: any[];
  }>();


  // gender ===============================
  getAllGenderUpdateListener() {
    return this.allGenderUpdated.asObservable();
  }



  getGender() {
    const key = localStorage.getItem('key');

    this.http.get<any>(
      `${this.API_URL}/payroll/${key}/genders/`
    )
      .subscribe(genderData => {
        this.genders = genderData.name
        this.allGenderUpdated.next({
          allGenders: [...this.genders]
        });
      }, error => {
        console.log(error)
      });
  }


  // Create Business
  addGender(name: string) {
    const key = localStorage.getItem('key');

    const newGenderData = {
      name: name
    };
    this.http.post<any>(
      `${this.API_URL}/payroll/${key}/genders/`, newGenderData
    )
      .subscribe(response => {
        this.notificationsService.success('Gender added!!');
      }, error => {
        console.log(error)
      });
  }



}
