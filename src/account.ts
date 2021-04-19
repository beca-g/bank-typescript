export class Account {
  currentBalance: number;
  transactions: string[];
  
  constructor() {
    this.currentBalance = 0
    this.transactions = []
  }

  balance(): number {
    return this.currentBalance
  }

  deposit(amount: number) {
    this.currentBalance += amount
  }

  withdraw(amount: number) {
    this.currentBalance -= amount
  }
}