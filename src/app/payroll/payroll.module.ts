import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PayrollRoutingModule } from './payroll-routing.module';
import { EmployeeDetailsComponent } from './employee/employee-details/employee-details.component';


@NgModule({
  declarations: [EmployeeDetailsComponent],
  imports: [
    CommonModule,
    PayrollRoutingModule
  ]
})
export class PayrollModule { }
