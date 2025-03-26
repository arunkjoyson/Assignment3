import calculatePaintCost from './calculatePaintCost';

describe('calculatePaintCost', () => {
  test('should return correct paint cost for valid positive values', () => {
    expect(calculatePaintCost(10, 5)).toBe(50);
    expect(calculatePaintCost(20, 7.5)).toBe(150);
    expect(calculatePaintCost(15, 10)).toBe(150);
  });

  test('should return error message when paint required is 0', () => {
    expect(calculatePaintCost(0, 5)).toBe("Paint and cost must be greater than zero.");
  });

  test('should return error message when cost per liter is 0', () => {
    expect(calculatePaintCost(10, 0)).toBe("Paint and cost must be greater than zero.");
  });

  test('should return error message when one or both values are negative', () => {
    expect(calculatePaintCost(-10, 5)).toBe("Paint and cost must be greater than zero.");
    expect(calculatePaintCost(10, -5)).toBe("Paint and cost must be greater than zero.");
    expect(calculatePaintCost(-10, -5)).toBe("Paint and cost must be greater than zero.");
  });

  test('should return error message when one or both values are null', () => {
    expect(calculatePaintCost(null as any, 5)).toBe("Paint and cost must be greater than zero.");
    expect(calculatePaintCost(10, null as any)).toBe("Paint and cost must be greater than zero.");
  });

  test('should return error message when one or both values are undefined', () => {
    expect(calculatePaintCost(undefined as any, 5)).toBe("Paint and cost must be greater than zero.");
    expect(calculatePaintCost(10, undefined as any)).toBe("Paint and cost must be greater than zero.");
  });

  test('should return NaN when one or both values are not numbers', () => {
    expect(calculatePaintCost("ten" as any, 5)).toBeNaN();
    expect(calculatePaintCost(10, "five" as any)).toBeNaN();
    expect(calculatePaintCost("abc" as any, "xyz" as any)).toBeNaN();
  });

  test('should return correct result for decimal values', () => {
    expect(calculatePaintCost(2.5, 4)).toBeCloseTo(10);
  });

  test('should return correct result for very large values', () => {
    expect(calculatePaintCost(1_000_000, 50)).toBe(50_000_000);
  });
});
