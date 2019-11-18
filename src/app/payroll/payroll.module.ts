import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PayrollRoutingModule } from './payroll-routing.module';
import { EmployeeDetailsComponent } from './employee/employee-details/employee-details.component';
import { NextOfKinComponent } from './employee/next-of-kin/next-of-kin.component';
import { NewNextKinComponent } from './employee/next-of-kin/new-next-kin/new-next-kin.component';


@NgModule({
  declarations: [EmployeeDetailsComponent, NextOfKinComponent, NewNextKinComponent],
  imports: [
    CommonModule,
    PayrollRoutingModule
  ]
})
export class PayrollModule { }
