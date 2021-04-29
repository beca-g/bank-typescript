import { Account } from "../src/account";
import { expect } from "chai";
// import mocha = require("mocha");

describe("Account", () => {
  let account: Account = new Account();
  
  beforeEach(() => {
    account = new Account();
  });

  describe("when initialized", () => {
    it("should be initialized with no transaction history", () => {
      expect(account.transactionList.length).to.equal(0);
    });
  });

  describe("balance", () => {
    it("should be initialized with a balance of zero", () => {
      expect(account.balance()).to.equal(0);
    });
  });

  describe("deposit", () => {
    it("should increase the account balance", () => {
      account.deposit(1000);
      expect(account.balance()).to.equal(1000);
    });

    it("should add a transaction to the transactions array", () => {
      account.deposit(1000);
      expect(account.transactionList.length).to.equal(1);
    });
  });

  describe("withdraw", () => {
    it("should decrease the account balance", () => {
      account.deposit(1000);
      account.withdraw(500);
      expect(account.balance()).to.equal(500);
    });

    it("should throw an error if the account has insufficient funds", () => {
      expect(() => account.withdraw(500)).to.throw("Insufficient funds");
    });
  });
});