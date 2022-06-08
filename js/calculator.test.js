const calculator = require('./calculator');

describe('calculator', () => {
  test('is properly added', () => {
    expect(calculator.addition(3, 6)).toBe(9);
    expect(calculator.addition(3, 6)).toEqual(9);
    expect(calculator.addition(3, 6)).toBeGreaterThan(8);
    expect(calculator.addition(3, 6)).toBeLessThan(10);
    expect(calculator.addition(0.3, 0.6)).toBeCloseTo(0.9);
  });

  test('is properly subtracted', () => {
    expect(calculator.subtraction(2, 9)).toBe(-7);
    expect(calculator.subtraction(9, 2)).toEqual(7);
    expect(calculator.subtraction(9, 2)).toBeGreaterThan(6);
    expect(calculator.subtraction(9, 2)).toBeLessThan(12);
    expect(calculator.subtraction(0.9, 0.2)).toBeCloseTo(0.7);
  });

  test('is properly multiplied', () => {
    expect(calculator.multiplication(5, 5)).toBe(25);
    expect(calculator.multiplication(5, 0)).toEqual(0);
    expect(calculator.multiplication(5, 5)).toBeGreaterThan(20);
    expect(calculator.multiplication(5, 0)).toBeLessThan(1);
    expect(calculator.multiplication(0.4, 0.6)).toBeCloseTo(0.24);
  });

  test('is properly divided', () => {
    expect(calculator.division(2, 10)).toBe(0.2);
    expect(calculator.division(5, 0)).toBe('cannot divide by zero');
    expect(calculator.division(0, 5)).toEqual(0);
    expect(calculator.division(5, 10)).toBeGreaterThan(0.4);
    expect(calculator.division(5, 10)).toBeLessThan(0.6);
    expect(calculator.division(0.2, 0.8)).toBeCloseTo(0.25);
  });
});