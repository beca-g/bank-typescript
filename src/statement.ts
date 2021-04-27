import { Account } from './account';

export class Statement {
  account: Account;
  transactions: any;

  constructor(account: Account) {
    this.account = account;
  }

  getHeadings() {
    const statementHeadings: string = "date || credit || debit || balance";
    return statementHeadings
  }
}