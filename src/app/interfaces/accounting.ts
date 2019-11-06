export interface ACCOUNT {
  name: string;
  description: string;
  sector: number;
  account_type: number;
  parent_account: number;
}
export interface TRANSACTION {
  description: "string";
  txn_date: "string";
  amount: 0;
  debit_entries: ["string"];
  counter_party: 0;
  credit_entries: ["string"];
}
