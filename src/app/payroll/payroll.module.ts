import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PayrollRoutingModule } from './payroll-routing.module';
import { EmployeeDetailsComponent } from './employee/employee-details/employee-details.component';
import { CompensationComponent } from './compensation/compensation.component';
import { LoanComponent } from './loan/loan.component';


@NgModule({
  declarations: [EmployeeDetailsComponent, CompensationComponent, LoanComponent],
  imports: [
    CommonModule,
    PayrollRoutingModule
  ]
})
export class PayrollModule { }
