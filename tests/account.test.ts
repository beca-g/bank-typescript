import { Account } from "../src/account"
import { expect } from "chai"

describe("Account", () => {
  let account: Account;
  
  beforeEach(function() {
    account = new Account()
  })

  describe("balance", () => {
    it("should be initialized with a balance of zero", () => {
      expect(account.balance()).to.equal(0)
    })
  })

  describe("deposit", () => {
    it("should increase the account balance by 1000", () => {
      account.deposit(1000)
      expect(account.balance()).to.equal(1000)
    })
  })
})