// Import the function to test
import calculatePaintCost from './calculatePaintCost';

describe('calculatePaintCost', () => {
  // ✅ Basic functional case: multiplying paint quantity with cost per liter
  test('should return correct paint cost for valid positive values', () => {
    expect(calculatePaintCost(10, 5)).toBe(50);
    expect(calculatePaintCost(20, 7.5)).toBe(150);
    expect(calculatePaintCost(15, 10)).toBe(150);
  });

  // ❌ Invalid: paint required cannot be zero
  test('should return error message when paint required is 0', () => {
    expect(calculatePaintCost(0, 5)).toBe("Paint and cost must be greater than zero.");
  });

  // ❌ Invalid: cost per liter cannot be zero
  test('should return error message when cost per liter is 0', () => {
    expect(calculatePaintCost(10, 0)).toBe("Paint and cost must be greater than zero.");
  });

  // ❌ Invalid: negative inputs are not allowed
  test('should return error message when one or both values are negative', () => {
    expect(calculatePaintCost(-10, 5)).toBe("Paint and cost must be greater than zero.");
    expect(calculatePaintCost(10, -5)).toBe("Paint and cost must be greater than zero.");
    expect(calculatePaintCost(-10, -5)).toBe("Paint and cost must be greater than zero.");
  });

  // ❌ Invalid: null inputs are not allowed
  test('should return error message when one or both values are null', () => {
    expect(calculatePaintCost(null as any, 5)).toBe("Paint and cost must be greater than zero.");
    expect(calculatePaintCost(10, null as any)).toBe("Paint and cost must be greater than zero.");
  });

  // ❌ Invalid: undefined inputs are not allowed
  test('should return error message when one or both values are undefined', () => {
    expect(calculatePaintCost(undefined as any, 5)).toBe("Paint and cost must be greater than zero.");
    expect(calculatePaintCost(10, undefined as any)).toBe("Paint and cost must be greater than zero.");
  });

  // ❌ Invalid: non-numeric strings should result in NaN
  test('should return NaN when one or both values are not numbers', () => {
    expect(calculatePaintCost("ten" as any, 5)).toBeNaN();
    expect(calculatePaintCost(10, "five" as any)).toBeNaN();
    expect(calculatePaintCost("abc" as any, "xyz" as any)).toBeNaN();
  });

  // ✅ Valid case: decimal values should calculate correctly
  test('should return correct result for decimal values', () => {
    expect(calculatePaintCost(2.5, 4)).toBeCloseTo(10);
  });

  // ✅ Stress test: handles large values without overflow
  test('should return correct result for very large values', () => {
    expect(calculatePaintCost(1_000_000, 50)).toBe(50_000_000);
  });
});
