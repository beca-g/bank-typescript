import { Transaction } from "../src/transaction";
import { expect } from "chai";
// import { sinon } from "sinon";


describe("Transaction", () => {
  let transaction: Transaction
  let date = Date.now();
  let today: string;
  
  beforeEach(function() {
    transaction = new Transaction("credit", 1000)
    today = new Date(date).toLocaleString().split(',')[0];
  })
  
  
  it("should store the transaction type", () => {
    expect(transaction.type).to.equal("credit")
  })
  
  it("should store the amount", () => {
    expect(transaction.amount).to.equal(1000)
  })
  
  it("should store the date of the transaction", () => {
    expect(transaction.date).to.equal(today)
  })
})