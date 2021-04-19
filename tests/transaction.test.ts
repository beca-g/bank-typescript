import { Transaction } from "../src/transaction";
import { expect } from "chai";

describe("Transaction", () => {
  let transaction: Transaction

  beforeEach(function() {
    transaction = new Transaction("deposit", 1000)
  })

  it("should store the transaction type", () => {
    expect(transaction.type).to.equal("deposit")
  })

  it("should store the amount", () => {
    expect(transaction.amount).to.equal(1000)
  })
})