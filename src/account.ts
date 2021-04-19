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
    this.transaction("credit", amount)
    this.currentBalance += amount
  }

  withdraw(amount: number) {
    this.transaction("debit", amount)
    this.currentBalance -= amount
  }

  transaction(type: string, amount: number) {
    let transaction: any = new Transaction(type, amount)
    this.transactions.push(transaction)
  }
}