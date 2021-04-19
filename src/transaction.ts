export class Transaction {
  type: string;
  amount: number;
  date: string;

  constructor(type: string, amount: number) {
    this.type = type;
    this.amount = amount;
    this.date = this.getDate();
  }

  getDate() {
    let date = Date.now();
    return new Date(date).toLocaleString().split(',')[0];
  }
}
