import { Component, OnInit } from '@angular/core';

import { OnboardingService } from './onboarding.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.component.html',
  styleUrls: ['./onboarding.component.css']
})

export class OnboardingComponent implements OnInit {
  businessSectors: any[] = []
  currencies: any[] = []
  businessCountries: any[] = []
  businessTypes: any[] = []


  private sectorSub: Subscription;
  private currencySub: Subscription;
  private countrySub: Subscription;
  private businesstypeSub: Subscription;

  constructor(
    public onboardingService: OnboardingService,
  ) { }

  onSubmitBusiness(form: NgForm) {
    if (form.invalid) {
      return;
    }

    this.onboardingService.createBusiness
      (
        form.value.inputBusinessName,
        form.value.inputSector,
        form.value.inputCurrency,
        form.value.inputCountry,
        form.value.inputBusinessType
      );
  }


  initContent() {
    this.onboardingService.getAll()

    this.sectorSub = this.onboardingService.getAllBusinessSectorsUpdateListener()
      .subscribe(sectorData => {
        this.businessSectors = sectorData.allBusinessSectors
      })

    this.currencySub = this.onboardingService.getAllCurrencyUpdateListener()
      .subscribe(currencyData => {
        this.currencies = currencyData.allCurrencies
      })
    this.countrySub = this.onboardingService.getAllbusinessCountriesUpdateListener()
      .subscribe(countriesData => {
        // this.businessCountries = sectorData.allBusinessCountries
      })

    this.businesstypeSub = this.onboardingService.getAllBusinessTypesUpdateListener()
      .subscribe(businessTypesData => {
        // console.log(businessTypesData)
        this.businessTypes = businessTypesData.allBusinessTypes
      })

  }

  ngAfterViewInit() {
    this.initContent()

  }

  ngOnInit() {

  }

}
