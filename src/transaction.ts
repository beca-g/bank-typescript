export class Transaction {
  type: string;
  amount: number;
  date: number;

  constructor(type: string, amount: number) {
    this.type = type;
    this.amount = amount;
    this.date = Date.now();
  }

  getDate() {
    return new Date(this.date).toLocaleString().split(',')[0];
  }
}
