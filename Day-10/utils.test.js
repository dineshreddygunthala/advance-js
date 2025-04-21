// utils.test.js

const { assignGrade, add, isEven } = require('./utils');

describe('assignGrade()', () => {
  test('returns A for 95', () => {
    expect(assignGrade(95)).toBe("A");
  });

  test('returns C for 75', () => {
    expect(assignGrade(75)).toBe("C");
  });

  test('returns F for 42', () => {
    expect(assignGrade(42)).toBe("F");
  });
});

describe('add()', () => {
  test('adds 2 and 3 to return 5', () => {
    expect(add(2, 3)).toBe(5);
  });

  test('adds negative numbers correctly', () => {
    expect(add(-4, -6)).toBe(-10);
  });
});

describe('isEven()', () => {
  test('returns true for 8', () => {
    expect(isEven(8)).toBe(true);
  });

  test('returns false for 7', () => {
    expect(isEven(7)).toBe(false);
  });
});
