import paintRequiredCalculator from "./paintRequiredCalculator";

describe("paintRequiredCalculator", () => {
  test("should return correct paint required for valid inputs", () => {
    expect(paintRequiredCalculator(50, 10)).toBe(5);
    expect(paintRequiredCalculator(100, 20)).toBe(5);
    expect(paintRequiredCalculator(75, 15)).toBe(5);
  });

  test("should return 0 if area is 0", () => {
    expect(paintRequiredCalculator(0, 10)).toBe(0);
  });

  test("should return error message if coveragePerLiter is 0", () => {
    expect(paintRequiredCalculator(100, 0)).toBe("Coverage must be greater than zero.");
  });

  test("should return error message for negative values", () => {
    expect(paintRequiredCalculator(-100, 10)).toBe("Area and coverage must be greater than zero.");
    expect(paintRequiredCalculator(100, -10)).toBe("Area and coverage must be greater than zero.");
    expect(paintRequiredCalculator(-100, -10)).toBe("Area and coverage must be greater than zero.");
  });

  test("should return error message for null inputs", () => {
    expect(paintRequiredCalculator(null as any, 10)).toBe("Area and coverage must be greater than zero.");
    expect(paintRequiredCalculator(100, null as any)).toBe("Area and coverage must be greater than zero.");
  });

  test("should return error message for undefined inputs", () => {
    expect(paintRequiredCalculator(undefined as any, 10)).toBe("Area and coverage must be greater than zero.");
    expect(paintRequiredCalculator(100, undefined as any)).toBe("Area and coverage must be greater than zero.");
  });

  test("should return NaN for non-numeric values", () => {
    expect(paintRequiredCalculator("abc" as any, 10)).toBeNaN();
    expect(paintRequiredCalculator(100, "xyz" as any)).toBeNaN();
  });

  test("should return correct value for decimal inputs", () => {
    expect(paintRequiredCalculator(2.5, 0.5)).toBe(5);
  });

  test("should handle very large values correctly", () => {
    expect(paintRequiredCalculator(1_000_000, 10)).toBe(100_000);
  });
});
