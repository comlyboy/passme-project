import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AccountingComponent } from './accounting.component';
import { ChartsOfAccountsComponent } from './charts-of-accounts/charts-of-accounts.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { TransationDetailComponent } from './transactions/transation-detail/transation-detail.component';
import { JournalBalanceComponent } from './journal-balance/journal-balance.component';
import { NewTransactionComponent } from './transactions/new-transaction/new-transaction.component';
import { TransactionMapComponent } from './transaction-map/transaction-map.component';
// import { TransactionTypeComponent } from './transaction-type/transaction-type.component';


// const key = window.localStorage.getItem("key")
const routes: Routes = [

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountingRoutingModule { }
