import { TenantManagePageComponent } from "./tenant-manage-page/tenant-manage-page.component";
import { TenantListPageComponent } from "./tenant-list-page/tenant-list-page.component";
import { GuardIsAuthenticated } from "../../services/guard-is-authenticated";
import { AppSharedModule } from "../../shared.module";
import { GuardHasValidParamQuery } from "../../services/guard-has-valid-params-query";
import { RouteExtra } from "../../core/base-types";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { tenant$RoutePaths } from "./tenant-route";
import { LicenseModule } from "../license/license.module";

const routes: RouteExtra[] = [
  {
    path: "",
    component: TenantListPageComponent,
    canActivate: [GuardIsAuthenticated],
  },
  {
    path: tenant$RoutePaths.routes.list.name,
    component: TenantListPageComponent,
    canActivate: [GuardIsAuthenticated],
  },
  {
    path: tenant$RoutePaths.routes.add.name,
    component: TenantManagePageComponent,
    canActivate: [GuardIsAuthenticated],
  },
  {
    path: tenant$RoutePaths.routes.edit.name,
    component: TenantManagePageComponent,
    data: { requiredQuery: ["id"] },
    canActivate: [GuardIsAuthenticated, GuardHasValidParamQuery],
  },
];

const _PAGES: any[] = [TenantListPageComponent, TenantManagePageComponent];
const _COMPONENTS: any[] = [];

@NgModule({
  declarations: [..._PAGES, ..._COMPONENTS],
  imports: [
    RouterModule.forChild(routes),
    //
    LicenseModule,
    AppSharedModule,
  ],
  exports: [..._COMPONENTS],
})
export class TenantModule {}
//
export const TENANT_$_ROUTE_PATH_BASE_URL = tenant$RoutePaths.baseUrl;
