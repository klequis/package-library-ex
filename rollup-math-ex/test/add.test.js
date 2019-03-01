"use strict"

const expect = require('chai').expect
const add = require('../dist/main').add


describe('add()', () => {
  it('add(1,3) should return 4', () => {
    expect(add(1,3)).to.equal(4)
  })
  it('add(1.5,2.2) should return 3.7', () => {
    expect(add(1,3)).to.equal(4)
  })

})