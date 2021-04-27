import { Statement } from "../src/statement"
import { Account } from '../src/account';
import { expect } from "chai"

describe("Statement", () => {
  let statement: Statement;
  let account: Account;

  beforeEach(() => {
    statement = new Statement(account)
  })

  describe("#constructor", () => {
    it("should be initialized with an account", () => {
      expect(statement.account).to.equal(account)
    })
  })

  describe("#getHeader", () => {
    it("should return the statement headings", () => {
      expect(statement.getHeadings()).to.equal("date || credit || debit || balance")
    })
  })

  describe("#print", () => {
    context("when no transactions have been made", () => {
      it("should return the headings only", () => {
        expect(statement.print()).to.equal("date || credit || debit || balance")
      })
    })
  })
})