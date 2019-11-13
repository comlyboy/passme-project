import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { AuthInterceptor } from './auth/auth-interceptor';
import { ErrorInterceptor } from './error-interceptor';

import { NgxChartsModule } from "@swimlane/ngx-charts";
import { Angular4PaystackModule } from 'angular4-paystack';


// Material
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatRippleModule } from '@angular/material/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatAutocompleteModule } from '@angular/material/autocomplete';


// auth
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';

import { SidenavComponent } from './sidenav/sidenav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './pages/header/header.component';
import { IconComponent } from './components/icon/icon.component';
import { NewBusinessComponent } from './pages/new-business/new-business.component';
import { OnboardingComponent } from './pages/onboarding/onboarding.component';

import { HomeComponent } from './home/home.component';

import { DashboardComponent } from './dashboard/dashboard.component';

import { AccountingComponent } from './accounting/accounting.component';
import { ChartsOfAccountsComponent } from './accounting/charts-of-accounts/charts-of-accounts.component';
import { TransactionsComponent } from './accounting/transactions/transactions.component';
import { TransationDetailComponent } from './accounting/transactions/transation-detail/transation-detail.component';
import { JournalBalanceComponent } from './accounting/journal-balance/journal-balance.component';
import { NewTransactionComponent } from './accounting/transactions/new-transaction/new-transaction.component';
import { TransactionMapComponent } from './accounting/transaction-map/transaction-map.component';
import { TransactionTypeComponent } from './accounting/transaction-type/transaction-type.component';
import { AccountingReportComponent } from './reports/accounting-report/accounting-report.component';


import { InventoryComponent } from './inventory/inventory.component';
import { ProductComponent } from './inventory/product/product.component';
import { NewProductComponent } from './inventory/product/new-product/new-product.component';
import { NewSupplierComponent } from './inventory/supplier/new-supplier/new-supplier.component';
import { SaleRegisterComponent } from './inventory/sale-register/sale-register.component';
import { PurchaseRegisterComponent } from './inventory/purchase-register/purchase-register.component';
import { NewPurchaseRegisterComponent } from './inventory/purchase-register/new-purchase-register/new-purchase-register.component';
import { StockSheetComponent } from './inventory/stock-sheet/stock-sheet.component';
import { SalesCreditComponent } from './inventory/sales-credit/sales-credit.component';
import { SalesReturnComponent } from './inventory/sales-return/sales-return.component';

import { EmployeeComponent } from './payroll/employee/employee.component';
import { NewEmployeeComponent } from './payroll/employee/new-employee/new-employee.component';
import { DepartmentComponent } from './payroll/department/department.component';
import { PayrollComponent } from './payroll/payroll.component';
import { NewDepartmentComponent } from './payroll/department/new-department/new-department.component';
import { EmploymentTypeComponent } from './payroll/employment-type/employment-type.component';
import { NewEmploymentTypeComponent } from './payroll/employment-type/new-employment-type/new-employment-type.component';
import { EmployeeDeductionComponent } from './payroll/employee-deduction/employee-deduction.component';
import { NewEmployeeDeductionComponent } from './payroll/employee-deduction/new-employee-deduction/new-employee-deduction.component';
import { EmployeeEarningComponent } from './payroll/employee-earning/employee-earning.component';
import { NewEmployeeEarningComponent } from './payroll/employee-earning/new-employee-earning/new-employee-earning.component';
import { EmployeeGradeComponent } from './payroll/employee-grade/employee-grade.component';
import { NewEmployeeGradeComponent } from './payroll/employee-grade/new-employee-grade/new-employee-grade.component';

import { InvoiceComponent } from './invoice/invoice.component';
import { CustomerComponent } from './invoice/customer/customer.component';
import { NewCustomerComponent } from './invoice/customer/new-customer/new-customer.component';
import { RecurringInvoiceComponent } from './invoice/recurring-invoice/recurring-invoice.component';
import { NewInvoiceComponent } from './invoice/invoices/new-invoice/new-invoice.component';

import { LoanUserComponent } from './loan/loan-user/loan-user.component';
import { NewLoanComponent } from './loan/loan-user/new-loan/new-loan.component';
import { LoanRequestComponent } from './loan/loan-request/loan-request.component';
import { RequestLoanComponent } from './loan/loan-request/request-loan/request-loan.component';
import { LoanRepayedComponent } from './loan/loan-repayed/loan-repayed.component';
import { LoanComponent } from './loan/loan.component';

import { AssetManagementComponent } from './asset-management/asset-management.component';
import { AssetCategoryComponent } from './asset-management/asset-category/asset-category.component';
import { NewAssetCategoryComponent } from './asset-management/asset-category/new-asset-category/new-asset-category.component';
import { FixedAssetComponent } from './asset-management/fixed-asset/fixed-asset.component';

import { ReportsComponent } from './reports/reports.component';
import { InventoryRoutingModule } from './inventory/inventory-routing.module';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    ReportsComponent,
    HomeComponent,
    SidenavComponent,
    HeaderComponent,
    ForgotPasswordComponent,

    NewBusinessComponent,
    OnboardingComponent,

    // Acounting
    AccountingReportComponent,
    ChartsOfAccountsComponent,
    TransactionsComponent,
    TransationDetailComponent,
    // JournalBalanceComponent,
    NewTransactionComponent,
    TransactionMapComponent,
    TransactionTypeComponent,
    AccountingComponent,

    // Inventory
    InventoryComponent,
    // ProductComponent,
    // NewProductComponent,
    // NewSupplierComponent,
    // SaleRegisterComponent,
    // PurchaseRegisterComponent,
    // NewPurchaseRegisterComponent,
    // StockSheetComponent,
    // SalesCreditComponent,
    // SalesReturnComponent,

    // Payroll
    EmployeeComponent,
    NewEmployeeComponent,
    DepartmentComponent,
    PayrollComponent,
    NewDepartmentComponent,
    EmploymentTypeComponent,
    NewEmploymentTypeComponent,
    EmployeeDeductionComponent,
    NewEmployeeDeductionComponent,
    EmployeeEarningComponent,
    NewEmployeeEarningComponent,
    EmployeeGradeComponent,
    NewEmployeeGradeComponent,

    // Invoice
    InvoiceComponent,
    CustomerComponent,
    NewCustomerComponent,
    RecurringInvoiceComponent,
    NewInvoiceComponent,

    // Loan
    LoanUserComponent,
    NewLoanComponent,
    LoanRequestComponent,
    RequestLoanComponent,
    LoanRepayedComponent,
    LoanComponent,

    // Asset manage
    AssetManagementComponent,
    AssetCategoryComponent,
    NewAssetCategoryComponent,
    FixedAssetComponent,


    IconComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    InventoryRoutingModule,
    NgxChartsModule,


    // Materials
    MatInputModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatMenuModule,
    MatSnackBarModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatTooltipModule,
    ScrollingModule,
    MatButtonToggleModule,
    MatRippleModule,
    MatTabsModule,
    MatProgressBarModule,
    MatDatepickerModule,
    MatAutocompleteModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
