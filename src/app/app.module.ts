import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';

import { AuthInterceptor } from './auth/auth-interceptor';

import { NgxChartsModule } from "@swimlane/ngx-charts";


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


// auth
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ReportsComponent } from './reports/reports.component';
import { HomeComponent } from './home/home.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';




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

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,

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
    MatDatepickerModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    // { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
