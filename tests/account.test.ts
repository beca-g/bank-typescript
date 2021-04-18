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
})