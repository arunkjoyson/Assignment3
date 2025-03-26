import calculateTotalCost from './calculateTotalCost';

describe('calculateTotalCost', () => {
  test('should return correct total cost for valid positive inputs', () => {
    expect(calculateTotalCost(100, 50)).toBe(150);
    expect(calculateTotalCost(200, 75)).toBe(275);
    expect(calculateTotalCost(150, 100)).toBe(250);
  });

  test('should return paint cost if labor cost is 0', () => {
    expect(calculateTotalCost(100, 0)).toBe(100);
  });

  test('should return labor cost if paint cost is 0', () => {
    expect(calculateTotalCost(0, 50)).toBe(50);
  });

  test('should return 0 when both paint and labor costs are 0', () => {
    expect(calculateTotalCost(0, 0)).toBe(0);
  });

  test('should return error message if one or both costs are negative', () => {
    expect(calculateTotalCost(-100, 50)).toBe("Costs must be greater than zero.");
    expect(calculateTotalCost(100, -50)).toBe("Costs must be greater than zero.");
    expect(calculateTotalCost(-100, -50)).toBe("Costs must be greater than zero.");
  });

  test('should return error message if one or both costs are null', () => {
    expect(calculateTotalCost(null as any, 50)).toBe("Costs must be greater than zero.");
    expect(calculateTotalCost(100, null as any)).toBe("Costs must be greater than zero.");
    expect(calculateTotalCost(null as any, null as any)).toBe("Costs must be greater than zero.");
  });

  test('should return error message if one or both costs are undefined', () => {
    expect(calculateTotalCost(undefined as any, 50)).toBe("Costs must be greater than zero.");
    expect(calculateTotalCost(100, undefined as any)).toBe("Costs must be greater than zero.");
    expect(calculateTotalCost(undefined as any, undefined as any)).toBe("Costs must be greater than zero.");
  });

  test('should return NaN if one or both costs are not valid numbers', () => {
    expect(calculateTotalCost("abc" as any, 50)).toBeNaN();
    expect(calculateTotalCost(100, "xyz" as any)).toBeNaN();
    expect(calculateTotalCost("abc" as any, "xyz" as any)).toBeNaN();
  });

  test('should return correct total for decimal values', () => {
    expect(calculateTotalCost(2.5, 3.5)).toBeCloseTo(6);
  });

  test('should return correct total for very large values', () => {
    expect(calculateTotalCost(1_000_000, 1_000_000)).toBe(2_000_000);
  });
});
