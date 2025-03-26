// Import the function to test
import estimatePaintingTime from './estimatePaintingTime';

describe('estimatePaintingTime', () => {
  // ✅ Valid case: calculates area divided by speed
  test('should return correct painting time for valid positive numbers', () => {
    expect(estimatePaintingTime(100, 10)).toBe(10);
    expect(estimatePaintingTime(200, 20)).toBe(10);
    expect(estimatePaintingTime(150, 15)).toBe(10);
  });

  // ✅ Edge case: area is 0, time should be 0 regardless of speed
  test('should return 0 when area is 0', () => {
    expect(estimatePaintingTime(0, 10)).toBe(0);
  });

  // ❌ Invalid: painting speed cannot be zero
  test('should return error message when painting speed is 0', () => {
    expect(estimatePaintingTime(100, 0)).toBe("Painting speed must be greater than zero.");
  });

  // ❌ Invalid: negative values are not allowed
  test('should return error message when one or both values are negative', () => {
    expect(estimatePaintingTime(-100, 10)).toBe("Area and speed must be greater than zero.");
    expect(estimatePaintingTime(100, -10)).toBe("Area and speed must be greater than zero.");
    expect(estimatePaintingTime(-100, -10)).toBe("Area and speed must be greater than zero.");
  });

  // ❌ Invalid: null values should return error message
  test('should return error message for null values', () => {
    expect(estimatePaintingTime(null as any, 10)).toBe("Area and speed must be greater than zero.");
    expect(estimatePaintingTime(100, null as any)).toBe("Area and speed must be greater than zero.");
  });

  // ❌ Invalid: undefined values should return error message
  test('should return error message for undefined values', () => {
    expect(estimatePaintingTime(undefined as any, 10)).toBe("Area and speed must be greater than zero.");
    expect(estimatePaintingTime(100, undefined as any)).toBe("Area and speed must be greater than zero.");
  });

  // ❌ Invalid: non-numeric strings should return NaN
  test('should return NaN for non-numeric values', () => {
    expect(estimatePaintingTime("abc" as any, 10)).toBeNaN();
    expect(estimatePaintingTime(100, "xyz" as any)).toBeNaN();
    expect(estimatePaintingTime("abc" as any, "xyz" as any)).toBeNaN();
  });

  // ✅ Valid case: decimal input should be processed correctly
  test('should return correct result for decimal values', () => {
    expect(estimatePaintingTime(2.5, 0.5)).toBe(5);
  });

  // ✅ Stress test: handles large input without crashing
  test('should return correct result for very large values', () => {
    expect(estimatePaintingTime(1_000_000, 100)).toBe(10_000);
  });
});
