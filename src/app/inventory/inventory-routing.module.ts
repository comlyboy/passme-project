import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InventoryComponent } from "./inventory.component";

const routes: Routes = [
  {
    path: 'inventory',
    component: InventoryComponent,
    children: [
      {
        path: 'product',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('./product/product.module').then(m => m.ProductModule)
          }
        ]
      },
      // {
      //   path: 'signup',
      //   children: [
      //     {
      //       path: '',
      //       loadChildren: () =>
      //         import('../auth/signup/signup.module').then(m => m.SignupPageModule)
      //     }
      //   ]
      // },
      // {
      //   path: 'home',
      //   children: [
      //     {
      //       path: '',
      //       loadChildren: () =>
      //         import('../home/home.module').then(m => m.HomePageModule)
      //     }
      //   ]
      // },
      // {
      //   path: 'customers',
      //   children: [
      //     {
      //       path: '',
      //       loadChildren: () =>
      //         import('../customers/customers.module').then(m => m.CustomersPageModule)
      //     },
      //     {
      //       path: 'add',
      //       loadChildren: () =>
      //         import('../customers/add-customer/add-customer.module').then(m => m.AddCustomerPageModule)
      //     },
      //     {
      //       path: ':customerId',
      //       loadChildren: () =>
      //         import('../customers/customer-details/customer-details.module').then(m => m.CustomerDetailsPageModule)
      //     }
      //   ]
      // },
      // {
      //   path: 'works',
      //   children: [
      //     {
      //       path: '',
      //       loadChildren: () =>
      //         import('../works/works.module').then(m => m.WorksPageModule)
      //     }
      //   ]
      // },
      // {
      //   path: 'reports',
      //   children: [
      //     {
      //       path: '',
      //       loadChildren: () =>
      //         import('../reports/reports.module').then(m => m.ReportsPageModule)
      //     }
      //   ]
      // },
      // {
      //   path: 'menu',
      //   children: [
      //     {
      //       path: '',
      //       loadChildren: () =>
      //         import('../menu/menu.module').then(m => m.MenuPageModule)
      //     }
      //   ]
      // },
      {
        path: '',
        redirectTo: '/tabs/login',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventoryRoutingModule { }
