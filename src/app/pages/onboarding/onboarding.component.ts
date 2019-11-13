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
  businessSector: any[] = []
  currencies: any[] = []
  businessCountries: any[] = []
  businessType: any[] = []

  
  private boardingSub: Subscription;

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
    // this.onboardingService.getAll()

    this.boardingSub = this.onboardingService.getAllBusinessSectorsUpdateListener().subscribe(sectorData => {

    })

  }

  ngOnInit() {
    this.initContent()

  }

}
