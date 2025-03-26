// Import the function to test
import paintRequiredCalculator from "./paintRequiredCalculator";

describe("paintRequiredCalculator", () => {
  // ✅ Valid case: returns area divided by coverage
  test("should return correct paint required for valid inputs", () => {
    expect(paintRequiredCalculator(50, 10)).toBe(5);
    expect(paintRequiredCalculator(100, 20)).toBe(5);
    expect(paintRequiredCalculator(75, 15)).toBe(5);
  });

  // ✅ Edge case: if area is 0, required paint should also be 0
  test("should return 0 if area is 0", () => {
    expect(paintRequiredCalculator(0, 10)).toBe(0);
  });

  // ❌ Invalid: coverage per liter cannot be 0
  test("should return error message if coveragePerLiter is 0", () => {
    expect(paintRequiredCalculator(100, 0)).toBe("Coverage must be greater than zero.");
  });

  // ❌ Invalid: negative inputs should return error message
  test("should return error message for negative values", () => {
    expect(paintRequiredCalculator(-100, 10)).toBe("Area and coverage must be greater than zero.");
    expect(paintRequiredCalculator(100, -10)).toBe("Area and coverage must be greater than zero.");
    expect(paintRequiredCalculator(-100, -10)).toBe("Area and coverage must be greater than zero.");
  });

  // ❌ Invalid: null values are not allowed
  test("should return error message for null inputs", () => {
    expect(paintRequiredCalculator(null as any, 10)).toBe("Area and coverage must be greater than zero.");
    expect(paintRequiredCalculator(100, null as any)).toBe("Area and coverage must be greater than zero.");
  });

  // ❌ Invalid: undefined inputs should return an error message
  test("should return error message for undefined inputs", () => {
    expect(paintRequiredCalculator(undefined as any, 10)).toBe("Area and coverage must be greater than zero.");
    expect(paintRequiredCalculator(100, undefined as any)).toBe("Area and coverage must be greater than zero.");
  });

  // ❌ Invalid: non-numeric inputs should return NaN
  test("should return NaN for non-numeric values", () => {
    expect(paintRequiredCalculator("abc" as any, 10)).toBeNaN();
    expect(paintRequiredCalculator(100, "xyz" as any)).toBeNaN();
  });

  // ✅ Decimal values should be calculated accurately
  test("should return correct value for decimal inputs", () => {
    expect(paintRequiredCalculator(2.5, 0.5)).toBe(5);
  });

  // ✅ Function should handle large values without error
  test("should handle very large values correctly", () => {
    expect(paintRequiredCalculator(1_000_000, 10)).toBe(100_000);
  });
});
