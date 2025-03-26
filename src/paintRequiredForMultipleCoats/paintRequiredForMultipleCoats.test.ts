import paintRequiredForMultipleCoats from './paintRequiredForMultipleCoats';

describe('paintRequiredForMultipleCoats', () => {
  test('should return correct total paint required for valid inputs', () => {
    expect(paintRequiredForMultipleCoats(100, 10, 2)).toBe(20);
    expect(paintRequiredForMultipleCoats(200, 20, 3)).toBe(30);
    expect(paintRequiredForMultipleCoats(150, 15, 4)).toBe(40);
  });

  test('should return 0 if area is 0', () => {
    expect(paintRequiredForMultipleCoats(0, 10, 2)).toBe(0);
  });

  test('should return 0 if number of coats is 0', () => {
    expect(paintRequiredForMultipleCoats(100, 10, 0)).toBe(0);
  });

  test('should return error message if coveragePerLiter is 0', () => {
    expect(paintRequiredForMultipleCoats(100, 0, 2)).toBe("Coverage per liter must be greater than zero.");
  });

  test('should return error message if any value is negative', () => {
    expect(paintRequiredForMultipleCoats(-100, 10, 2)).toBe("All values must be greater than zero.");
    expect(paintRequiredForMultipleCoats(100, -10, 2)).toBe("All values must be greater than zero.");
    expect(paintRequiredForMultipleCoats(100, 10, -2)).toBe("All values must be greater than zero.");
  });

  test('should return error message for null inputs', () => {
    expect(paintRequiredForMultipleCoats(null as any, 10, 2)).toBe("All values must be greater than zero.");
    expect(paintRequiredForMultipleCoats(100, null as any, 2)).toBe("All values must be greater than zero.");
    expect(paintRequiredForMultipleCoats(100, 10, null as any)).toBe("All values must be greater than zero.");
  });

  test('should return error message for undefined inputs', () => {
    expect(paintRequiredForMultipleCoats(undefined as any, 10, 2)).toBe("All values must be greater than zero.");
    expect(paintRequiredForMultipleCoats(100, undefined as any, 2)).toBe("All values must be greater than zero.");
    expect(paintRequiredForMultipleCoats(100, 10, undefined as any)).toBe("All values must be greater than zero.");
  });

  test('should return NaN for non-numeric values', () => {
    expect(paintRequiredForMultipleCoats("abc" as any, 10, 2)).toBeNaN();
    expect(paintRequiredForMultipleCoats(100, "xyz" as any, 2)).toBeNaN();
    expect(paintRequiredForMultipleCoats(100, 10, "???123" as any)).toBeNaN();
  });

  test('should return correct value for decimal inputs', () => {
    expect(paintRequiredForMultipleCoats(2.5, 0.5, 2)).toBe(10);
  });

  test('should handle very large values correctly', () => {
    expect(paintRequiredForMultipleCoats(1_000_000, 10, 5)).toBe(500_000);
  });
});
