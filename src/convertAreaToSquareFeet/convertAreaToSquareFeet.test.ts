// Import the function to be tested
import convertAreaToSquareFeet from './convertAreaToSquareFeet';

describe('convertAreaToSquareFeet', () => {
  // ✅ Valid case: should convert square meters to square feet accurately
  test('should convert area correctly for valid positive numbers', () => {
    expect(convertAreaToSquareFeet(100)).toBeCloseTo(1076.39);
    expect(convertAreaToSquareFeet(200)).toBeCloseTo(2152.78);
    expect(convertAreaToSquareFeet(150)).toBeCloseTo(1614.585);
  });

  // ✅ Edge case: area is 0, result should be 0
  test('should return 0 if area is 0', () => {
    expect(convertAreaToSquareFeet(0)).toBe(0);
  });

  // ❌ Invalid: negative area values are not allowed
  test('should return error message if area is negative', () => {
    expect(convertAreaToSquareFeet(-100)).toBe("Area must be greater than zero.");
    expect(convertAreaToSquareFeet(-1)).toBe("Area must be greater than zero.");
  });

  // ❌ Invalid: null or undefined inputs should return error
  test('should return error message if area is null or undefined', () => {
    expect(convertAreaToSquareFeet(null as any)).toBe("Area must be greater than zero.");
    expect(convertAreaToSquareFeet(undefined as any)).toBe("Area must be greater than zero.");
  });

  // ❌ Invalid: non-numeric string inputs should result in NaN
  test('should return NaN if area is not a number', () => {
    expect(convertAreaToSquareFeet("abc" as any)).toBeNaN();
    expect(convertAreaToSquareFeet("100" as any)).toBeNaN(); // If strict typing is enforced
  });

  // ✅ Valid case: decimal values should calculate correctly
  test('should convert correctly for decimal values', () => {
    expect(convertAreaToSquareFeet(2.5)).toBeCloseTo(26.90975);
  });

  // ✅ Edge case: large numbers should be processed without overflow
  test('should handle very large numbers correctly', () => {
    expect(convertAreaToSquareFeet(1_000_000)).toBeCloseTo(10_763_900);
  });
});
