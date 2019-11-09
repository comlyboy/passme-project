import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InventoryRoutingModule } from './inventory-routing.module';
import { ProductComponent } from './product/product.component';
import { NewProductComponent } from './product/new-product/new-product.component';
import { SupplierComponent } from './supplier/supplier.component';
// import { NewInventoryComponent } from './supplier/new-inventory/new-inventory.component';
import { NewSupplierComponent } from './supplier/new-supplier/new-supplier.component';
import { SaleRegisterComponent } from './sale-register/sale-register.component';
import { PurchaseRegisterComponent } from './purchase-register/purchase-register.component';
import { NewPurchaseRegisterComponent } from './purchase-register/new-purchase-register/new-purchase-register.component';
import { StockSheetComponent } from './stock-sheet/stock-sheet.component';
import { SalesReturnComponent } from './sales-return/sales-return.component';
import { SalesCreditComponent } from './sales-credit/sales-credit.component';


@NgModule({
  declarations: [ProductComponent, NewProductComponent, SupplierComponent,
    //  NewInventoryComponent,
    NewSupplierComponent, SaleRegisterComponent, PurchaseRegisterComponent, NewPurchaseRegisterComponent, StockSheetComponent, SalesReturnComponent, SalesCreditComponent],
  imports: [
    CommonModule,
    InventoryRoutingModule
  ]
})
export class InventoryModule { }
