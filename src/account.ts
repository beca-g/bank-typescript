export class Account {
  currentBalance: number;
  
  constructor() {
    this.currentBalance = 0
  }

  balance(): number {
    return this.currentBalance
  }

  deposit(amount: number) {
    this.currentBalance += amount
  }
}