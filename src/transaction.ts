export class Transaction {
  type: string;
  amount: number;

  constructor(type: string, amount: number) {
    this.type = type;
    this.amount = amount
  }
}