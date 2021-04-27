import { Account } from './account';

export class Statement {
  account: Account;

  constructor(account: Account) {
    this.account = account;
  }

  print() {
    return this.getHeadings();  
  }

  getHeadings() {
    const statementHeadings: string = "date || credit || debit || balance";
    return statementHeadings
  }
}