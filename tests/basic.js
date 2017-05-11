"use strict";
const assert = require('chai').assert;
const calc = require('../calc');

describe("40 + 2 equals 42", () => {
  let a = 40;
  let b = 2;
  it("should return 42", () => {
    assert.equal(calc.add(a, b) , 42)
  });
});

describe("40 * 2 equals 80", () => {
  let a = 40;
  let b = 2;
  it("should return 80", () => {
    assert.equal(calc.multiply(a, b) , 80)
  });
});


describe("geek value equals 42", () => {
  let geek = 42;
  it("should return 42", () => {
    assert.equal(geek, 42)
  });
});
