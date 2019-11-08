import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AccountingRoutingModule } from "./accounting-routing.module";

import { ChartsOfAccountsComponent } from './charts-of-accounts/charts-of-accounts.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { TransationDetailComponent } from './transactions/transation-detail/transation-detail.component';
import { JournalBalanceComponent } from './journal-balance/journal-balance.component';
import { NewTransactionComponent } from './transactions/new-transaction/new-transaction.component';
import { TransactionMapComponent } from './transaction-map/transaction-map.component';
import { TransactionTypeComponent } from './transaction-type/transaction-type.component';


@NgModule({
  declarations: [
    JournalBalanceComponent,
    TransationDetailComponent,
    ChartsOfAccountsComponent,
    TransactionsComponent,
    TransactionMapComponent,
    TransactionTypeComponent,
    NewTransactionComponent
  ],
  imports: [CommonModule, AccountingRoutingModule]
})
export class AccountingModule {}
