//This file contains the actual unit tests

const sum = require('../assets/scripts/sum'); //this is the file name we are testing the functions for (ex. sum.js)

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3); // Syntax to check equality
  });
  
// Checking that 1 + 2 == 3
test('adds 1 + 2 to equal 3', () => {
  expect(1 + 2).toBe(3); // Syntax to check equality
});

describe("testing", () => {
  
  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3); // Syntax to check equality
  });
  
  // Checking that 1 + 2 == 3
  test('adds 1 + 2 to equal 3', () => {
    expect(1 + 2).toBe(3); // Syntax to check equality
  });

  // Checking that -1 + 2 == 1
  test('adds -1 + 2 to equal 1', () => {
    expect(-1 + 2).toEqual(1); // Syntax to check equality
  });

  test('adds -1 + -1 to equal -2', () => {
    expect(-1 + -1).not.toBe(0); // Syntax to check equality
  });

});
