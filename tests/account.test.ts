import { Account } from "../src/account"
import { expect } from "chai"

describe("Account", () => {
  let account: Account;
  
  beforeEach(() => {
    account = new Account()
  })

  afterEach(() => {

  })

  describe("when initialized", () => {
    it("should be initialized with no transaction history", () => {
      expect(account.transactions.length).to.equal(0)
    })
  })

  describe("balance", () => {
    it("should be initialized with a balance of zero", () => {
      expect(account.balance()).to.equal(0)
    })
  })

  describe("deposit", () => {
    it("should increase the account balance", () => {
      account.deposit(1000)
      expect(account.balance()).to.equal(1000)
    })

    it("should add a transaction to the transactions array", () => {
      account.deposit(1000)
      expect(account.transactions.length).to.equal(1)
    })
  })

  describe("withdraw", () => {
    it("should decrease the account balance", () => {
      account.deposit(1000)
      account.withdraw(500)
      expect(account.balance()).to.equal(500)
    })
  })
})