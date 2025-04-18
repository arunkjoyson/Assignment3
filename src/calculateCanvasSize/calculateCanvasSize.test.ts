// Import the function to be tested
import calculateCanvasSize from "./calculateCanvasSize";

describe("calculateCanvasSize", () => {
  // ✅ Valid case: positive integers should return correct area
  test("should return correct area for valid positive numbers", () => {
    expect(calculateCanvasSize("10", "20")).toBe(200);
    expect(calculateCanvasSize("3", "3")).toBe(9);
  });

  // ❌ Invalid: zero values are not allowed
  test("should return an error message when one or both values are 0", () => {
    expect(calculateCanvasSize("0", "5")).toBe("Length and width must be greater than zero.");
    expect(calculateCanvasSize("10", "0")).toBe("Length and width must be greater than zero.");
    expect(calculateCanvasSize("0", "0")).toBe("Length and width must be greater than zero.");
  });

  // ❌ Invalid: negative values are not allowed
  test("should return an error message when one or both values are negative", () => {
    expect(calculateCanvasSize("-5", "10")).toBe("Length and width must be greater than zero.");
    expect(calculateCanvasSize("5", "-10")).toBe("Length and width must be greater than zero.");
    expect(calculateCanvasSize("-5", "-10")).toBe("Length and width must be greater than zero.");
  });

  // ✅ Valid case: decimal values should be calculated correctly
  test("should return correct area for valid decimal values", () => {
    expect(calculateCanvasSize("2.5", "4")).toBeCloseTo(10);
  });

  // ✅ Valid case: leading/trailing whitespace should be trimmed
  test("should return correct area when input contains whitespace", () => {
    expect(calculateCanvasSize(" 4 ", " 5 ")).toBe(20);
  });

  // ❌ Invalid: non-numeric strings should return NaN
  test("should return NaN for non-numeric strings", () => {
    expect(calculateCanvasSize("abc", "5")).toBeNaN();
    expect(calculateCanvasSize("10", "xyz")).toBeNaN();
  });

  // ❌ Invalid: empty string inputs should return NaN
  test("should return NaN for empty string inputs", () => {
    expect(calculateCanvasSize("", "5")).toBeNaN();
    expect(calculateCanvasSize("10", "")).toBeNaN();
  });

  // ❌ Invalid: special characters should return NaN
  test("should return NaN for special character inputs", () => {
    expect(calculateCanvasSize("!", "4")).toBeNaN();
  });

  // ✅ Valid edge case: very large values should compute correctly without crashing
  test("should return correct area for very large numeric inputs", () => {
    expect(calculateCanvasSize("1000000", "1000000")).toBe(1_000_000_000_000);
  });
});
