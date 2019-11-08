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


const key = window.localStorage.getItem("key")
const routes: Routes = [
  {
    path: "",
    redirectTo: key + "/chart-of-accounts"
  },
  {
    path: key + "/transaction",
    children: [
      { path: "", component: TransactionsComponent },
      // { path: "view/:code", component: TransactionsDetailsComponent },
      { path: "create", component: NewTransactionComponent },
      // { path: ":newTrans/:id", component: NewTransactionComponent },

    ]
  },
  {
    path: key + "/journal-balance",
    children: [
      { path: "", component: JournalBalanceComponent },
      // { path: "edit/:id", component: JournalBalanceDetailsComponent }
    ]
  },
  {
    path: key + "/transaction-map",
    children: [
      { path: "", component: TransactionMapComponent },
      // { path: "edit/:id", component: EditAccountComponent },
      // { path: 'report/', component: ProductReportComponent },
      // { path: "create", component: CreateAccountComponent }
    ]
  },
  {
    path: key + "/transaction-type",
    children: [
      // { path: "", component: TransactionTypeComponent },
      // { path: "edit/:id", component: EditAccountComponent },
      // { path: 'report/', component: ProductReportComponent },
      // { path: "create", component: CreateAccountComponent }
    ]
  },
  {
    path: key + "/chart-of-accounts",
    children: [
      { path: "", component: ChartsOfAccountsComponent },
      // { path: "edit/:id", component: EditAccountComponent },
      // { path: 'report/', component: ProductReportComponent },
      // { path: "create", component: CreateAccountComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountingRoutingModule { }
