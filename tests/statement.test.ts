import { Statement } from "../src/statement"
import { Account } from '../src/account';
import { expect } from "chai"
import sinon = require("sinon")

describe("Statement", () => {
  let statement: Statement;

  beforeEach(() => {
    statement = new Statement()
  })

  describe("printHeader", () => {
    it("should print the statement headings", () => {
      expect(statement.printHeadings()).to.equal("date || credit || debit || balance")
    })
  })
})