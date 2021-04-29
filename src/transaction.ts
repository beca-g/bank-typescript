export interface TransactionType {
  type: string;
  amount: number;
}

export class Transaction {
  type: string;
  amount: number;
  date: string;

  constructor(type: string, amount: number) {
    this.type = type;
    this.amount = amount;
    this.date = this.getDate();
  }

  getDate(): string {
    const date = Date.now();
    return new Date(date).toLocaleString().split(",")[0];
  }
}
