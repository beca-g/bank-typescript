import { Transaction } from "../src/transaction";

export class Account {
  currentBalance: number;
  transactions: (string | number)[];
  
  constructor() {
    this.currentBalance = 0
    this.transactions = []
  }

  balance(): number {
    return this.currentBalance
  }

  deposit(amount: number) {
    let transaction: any = new Transaction("credit", amount)
    this.transactions.push(transaction)
    this.currentBalance += amount
  }

  withdraw(amount: number) {
    let transaction: any = new Transaction("debit", amount)
    this.transactions.push(transaction)
    this.currentBalance -= amount
  }
}