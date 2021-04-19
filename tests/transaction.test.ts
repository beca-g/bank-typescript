import { Transaction } from "../src/transaction";
import { expect } from "chai";
// import { sinon } from "sinon";


describe("Transaction", () => {
  let transaction: Transaction
  
  beforeEach(function() {
    transaction = new Transaction("credit", 1000)
    const date = 1618834297723
  })


  it("should store the transaction type", () => {
    expect(transaction.type).to.equal("credit")
  })

  it("should store the amount", () => {
    expect(transaction.amount).to.equal(1000)
  })

  it("should store the date of the transaction", () => {
    expect(transaction.getDate()).to.equal("19/04/2021")
  })
})