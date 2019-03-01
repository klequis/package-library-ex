"use strict"

const expect = require('chai').expect
const subtract = require('../dist/main').subtract

describe('subtract()', () => {
  it('subtract(1, 2) should return -1', () => {
    expect(subtract(1,2)).to.equal(-1)
  })
  it('subtract(1.5,2.2) should return 3.7', () => {
    expect(subtract(10,3)).to.equal(7)
  })
})