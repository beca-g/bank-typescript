import { Statement } from "../src/statement"
import { Account } from '../src/account';
import { expect } from "chai"
import sinon = require("sinon")

describe("Statement", () => {
  let statement: Statement;

  beforeEach(() => {
    statement = new Statement()
  })

  describe("getHeader", () => {
    it("should return the statement headings", () => {
      expect(statement.getHeadings()).to.equal("date || credit || debit || balance")
    })
  })
})