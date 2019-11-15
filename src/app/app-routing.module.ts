import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';


import { AuthGuard } from './auth/auth-guard';
import { InventoryComponent } from './inventory/inventory.component';
import { PayrollComponent } from './payroll/payroll.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { LoanComponent } from './loan/loan.component';
import { AssetManagementComponent } from './asset-management/asset-management.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReportsComponent } from './reports/reports.component';
import { HomeComponent } from './home/home.component';
import { AccountingComponent } from './accounting/accounting.component';
import { OnboardingComponent } from './pages/onboarding/onboarding.component';

import { DepartmentComponent } from './payroll/department/department.component';
import { EmployeeComponent } from './payroll/employee/employee.component';
import { NewDepartmentComponent } from './payroll/department/new-department/new-department.component';
import { NewEmployeeComponent } from './payroll/employee/new-employee/new-employee.component';
import { EmployeeDetailsComponent } from './payroll/employee/employee-details/employee-details.component';


const routes: Routes = [

  { path: '', component: HomeComponent },
  { path: 'auth', component: LoginComponent },

  { path: 'onboarding', component: OnboardingComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },

  // {
  //   path: "accounting",
  //   // canActivate: [AuthGuard],
  //   loadChildren: () =>
  //     import("./accounting/accounting.module").then(
  //       m => m.AccountingModule
  //     )
  // },

  {
    path: "inventory",
    // canActivate: [AuthGuard],
    loadChildren: () =>
      import("./inventory/inventory.module").then(
        m => m.InventoryModule
      )
  },

  { path: 'accounting', component: AccountingComponent },
  // { path: 'inventory', component: InventoryComponent },

  { path: 'payroll', component: PayrollComponent, canActivate: [AuthGuard] },
  { path: 'payroll/department', component: DepartmentComponent, canActivate: [AuthGuard] },
  { path: 'payroll/department/new', component: NewDepartmentComponent, canActivate: [AuthGuard] },
  { path: 'payroll/employee', component: EmployeeComponent, canActivate: [AuthGuard] },
  { path: 'payroll/employee/new', component: NewEmployeeComponent, canActivate: [AuthGuard] },
  { path: 'payroll/employee/:employeeId', component: EmployeeDetailsComponent, canActivate: [AuthGuard] },





  { path: 'invoice', component: InvoiceComponent },
  { path: 'loan', component: LoanComponent },
  { path: 'asset-management', component: AssetManagementComponent },
  { path: 'reports', component: ReportsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
