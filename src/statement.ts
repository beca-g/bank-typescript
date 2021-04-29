import { TransactionType } from "./transaction";

interface Account {
  transactionList: TransactionType;
  currentBalance: number;
}

export class Statement {
  account: Account;

  constructor(account: Account) {
    this.account = account;
    console.log(this.account);
  }

  print(): string {
    return this.getHeadings();
  }

  getHeadings(): string {
    const statementHeadings = "date || credit || debit || balance";
    return statementHeadings;
  }
}