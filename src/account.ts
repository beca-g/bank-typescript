import { Transaction, TransactionType } from "./transaction";

export class Account {
  currentBalance: number;
  transactionList: TransactionType[];
  
  constructor() {
    this.currentBalance = 0;
    this.transactionList = [];
  }

  balance(): number {
    return this.currentBalance;
  }

  deposit(amount: number): number{
    this.transaction("credit", amount);
    return this.currentBalance += amount;
  }

  withdraw(amount: number): number {
    if(this.currentBalance - amount < amount) { throw "Insufficient funds"; }
    this.transaction("debit", amount);
    return this.currentBalance -= amount;
  }

  transaction(type: string, amount: number): number {
    const transaction: TransactionType = new Transaction(type, amount);
    return this.transactionList.push(transaction);
  }
}