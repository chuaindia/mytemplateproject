const happy = require('./happy-numbers')
const assert = require('assert')

describe('Tests', function () {
  it('happy should be a function.', function () {
    assert(typeof happy === 'function')
  })
  it('happy(1) should return a boolean.', function () {
    assert(typeof happy(1) === 'boolean')
  })
  it('happy(1) should return true.', function () {
    assert(happy(1))
  })
  it('happy(2) should return false.', function () {
    assert(!happy(2))
  })
  it('happy(7) should return true.', function () {
    assert(happy(7))
  })
  it('happy(10) should return true.', function () {
    assert(happy(10))
  })
  it('happy(13) should return true.', function () {
    assert(happy(13))
  })
  it('happy(19) should return true.', function () {
    assert(happy(19))
  })
  it('happy(23) should return true.', function () {
    assert(happy(23))
  })
  it('happy(28) should return true.', function () {
    assert(happy(28))
  })
  it('happy(31) should return true.', function () {
    assert(happy(31))
  })
  it('happy(32) should return true:.', function () {
    assert(happy(32))
  })
  it('happy(33) should return false.', function () {
    assert(!happy(33))
  })
})
