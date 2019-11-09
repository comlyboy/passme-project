import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PAYMENT_$_ROUTE_PATH_BASE_URL } from "./pages/payment/payment.module";
import { LICENSE_$_ROUTE_PATH_BASE_URL } from "./pages/license/license.module";
import { SMS_$_ROUTE_PATH_BASE_URL } from "./pages/sms/sms.module";
import { AUTH_$_ROUTE_PATH_BASE_URL } from "./pages/auth/auth.module";
import { HOME_$_ROUTE_PATH_BASE_URL } from "./pages/home/home.module";
import { TENANT_$_ROUTE_PATH_BASE_URL } from "./pages/tenant/tenant.module";

const appRoutes: Routes = [
  {
    path: "",
    redirectTo: "/home",
    pathMatch: "full",
  },
  // {
  //   component: HomeComponent,
  //   path: "home",
  // },
  {
    path: TENANT_$_ROUTE_PATH_BASE_URL,
    loadChildren: () => import("./pages/tenant/tenant.module").then(m => m.TenantModule),
  },
  {
    path: HOME_$_ROUTE_PATH_BASE_URL,
    loadChildren: () => import("./pages/home/home.module").then(m => m.HomeModule),
  },
  {
    path: PAYMENT_$_ROUTE_PATH_BASE_URL,
    loadChildren: () => import("./pages/payment/payment.module").then(m => m.PaymentModule),
  },
  {
    path: LICENSE_$_ROUTE_PATH_BASE_URL,
    loadChildren: () => import("./pages/license/license.module").then(m => m.LicenseModule),
  },
  {
    path: SMS_$_ROUTE_PATH_BASE_URL,
    loadChildren: () => import("./pages/sms/sms.module").then(m => m.SmsModule),
  },
  {
    path: AUTH_$_ROUTE_PATH_BASE_URL,
    loadChildren: () => import("./pages/auth/auth.module").then(m => m.AuthModule),
  },
  // {
  //   component: HomeComponent,
  //   path: "**",
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
