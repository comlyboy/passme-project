import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { Subject } from 'rxjs';

import { NotificationsService } from 'src/app/shared/notifications.service';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class OnboardingService {
  API_URL = environment.API_URL
  API_URL2 = "https://restcountries.eu/rest/v2/all"
  currencies: any[] = []
  businessSectors: any[] = []
  businessCountries: any[] = []
  businessTypes: any[] = []

  constructor(
    private http: HttpClient,
    private router: Router,
    public notificationsService: NotificationsService
  ) { }

  private allCurrencyUpdated = new Subject<{
    allCurrencies: any[];
  }>();
  private allBusinesSectorsUpdated = new Subject<{
    allBusinessSectors: any[];
  }>();
  private allBusinessCountriesUpdated = new Subject<{
    allBusinessCountries: any[];
  }>();
  private allBusinessTypesUpdated = new Subject<{
    allBusinessTypes: any[];
  }>();


  getAllCurrencyUpdateListener() {
    return this.allCurrencyUpdated.asObservable();
  }
  getAllBusinessSectorsUpdateListener() {
    return this.allBusinesSectorsUpdated.asObservable();
  }
  getAllbusinessCountriesUpdateListener() {
    return this.allBusinessCountriesUpdated.asObservable();
  }
  getAllBusinessTypesUpdateListener() {
    return this.allBusinessTypesUpdated.asObservable();
  }



  getAll() {


    this.http
      .get<any>(
        `${this.API_URL}organization/sectors/`
      )
      .subscribe(businessSectorsData => {
        // console.log(businessSectorsData)
        this.businessSectors = businessSectorsData;
        this.allBusinesSectorsUpdated.next({
          allBusinessSectors: [...this.businessSectors]

        });
      }, error => {
        console.log(error)

      });


    // this.http.get<any>(
    //   `${this.API_URL}organization/currencies/`
    // )
    //   .subscribe(currencyData => {
    //     // console.log(currencyData)
    //     this.currencies = currencyData;
    //     this.allCurrencyUpdated.next({
    //       allCurrencies: [...this.currencies]
    //     });

    //   }, error => {
    //     console.log(error)

    //   });

    // this.http
    //   .get<any>(
    //     // this.API_URL2
    //     `${this.API_URL}organization/countries/`
    //   )
    //   .subscribe(businessCountriesData => {
    //     console.log(businessCountriesData)
    //     this.businessCountries = businessCountriesData;
    //     this.allBusinessCountriesUpdated.next({
    //       allBusinessCountries: [...this.businessCountries]

    //     });
    //   }, error => {
    //     console.log(error)

    //   });


    this.http
      .get<any>(
        `${this.API_URL}organization/business_types/`
      )
      .subscribe(businessTypesData => {
        // console.log(businessTypesData)
        this.businessTypes = businessTypesData;
        this.allBusinessTypesUpdated.next({
          allBusinessTypes: [...this.businessTypes]

        });

      }, error => {
        console.log(error)

      });
  }


  // Create Business
  createBusiness(businessName: string, sectors: number, currency: string, country: string, businessType: number) {
    const newBusinessData = {
      business_name: businessName,
      sector: sectors,
      primary_currency: currency,
      country: country,
      business_type: businessType
    };
    console.log(newBusinessData)
    this.http.post<any>(`${this.API_URL}organization/business/`, newBusinessData).subscribe(response => {
      console.log(response.key)
      this.router.navigate(['dashboard']);
    }, error => {

    });
  }

  // // Edit Business
  // editBusiness(business) {
  //   return this.Http.put<any>(this.URL + 'organization/business/' + business.id + '/', business);
  // }

  // getBusiness() {
  //   return this.Http.get<any>(this.URL + 'organization/business/');
  // }

  // getSingleBusiness(id: number) {
  //   return this.Http.get<any>(this.URL + 'organization/business/' + id + '/');
  // }


}
