// Import the function to be tested
import calculateCanvasPerimeter from "./calculateCanvasPerimeter";

describe("calculateCanvasPerimeter", () => {
  // ✅ Valid numeric strings (positive integers)
  test("should return correct perimeter for valid positive numbers", () => {
    expect(calculateCanvasPerimeter("10", "100")).toBe(220);
    expect(calculateCanvasPerimeter("5", "20")).toBe(50);
  });

  // ✅ Decimal values should be processed accurately
  test("should return correct perimeter for decimal values", () => {
    expect(calculateCanvasPerimeter("2.5", "4")).toBeCloseTo(13);
  });

  // ✅ Whitespace around input should be trimmed
  test("should return correct perimeter for inputs with whitespace", () => {
    expect(calculateCanvasPerimeter(" 3 ", " 5 ")).toBe(16);
  });

  // ❌ Zero values are considered invalid input
  test("should return error message when one or both values are 0", () => {
    expect(calculateCanvasPerimeter("0", "10")).toBe("Length and width must be greater than zero.");
    expect(calculateCanvasPerimeter("10", "0")).toBe("Length and width must be greater than zero.");
    expect(calculateCanvasPerimeter("0", "0")).toBe("Length and width must be greater than zero.");
  });

  // ❌ Negative values are not allowed
  test("should return error message when one or both values are negative", () => {
    expect(calculateCanvasPerimeter("-10", "20")).toBe("Length and width must be greater than zero.");
    expect(calculateCanvasPerimeter("10", "-20")).toBe("Length and width must be greater than zero.");
    expect(calculateCanvasPerimeter("-10", "-20")).toBe("Length and width must be greater than zero.");
  });

  // ❌ Non-numeric strings should return NaN
  test("should return NaN for non-numeric strings", () => {
    expect(calculateCanvasPerimeter("abc", "5")).toBeNaN();
    expect(calculateCanvasPerimeter("10", "xyz")).toBeNaN();
  });

  // ❌ Empty strings are invalid
  test("should return NaN for empty string inputs", () => {
    expect(calculateCanvasPerimeter("", "5")).toBeNaN();
    expect(calculateCanvasPerimeter("10", "")).toBeNaN();
  });

  // ❌ Special characters are invalid input
  test("should return NaN for special character inputs", () => {
    expect(calculateCanvasPerimeter("!", "4")).toBeNaN();
  });

  // ✅ Function should handle very large inputs correctly
  test("should return correct perimeter for very large numeric inputs", () => {
    const result = calculateCanvasPerimeter("1000000", "1000000");
    expect(result).toBe(4_000_000);
  });

  // ❌ Null values are not valid
  test("should return NaN if one or both values are null", () => {
    expect(calculateCanvasPerimeter(null as any, "10")).toBeNaN();
    expect(calculateCanvasPerimeter("10", null as any)).toBeNaN();
    expect(calculateCanvasPerimeter(null as any, null as any)).toBeNaN();
  });

  // ❌ Undefined values are not valid
  test("should return NaN if one or both values are undefined", () => {
    expect(calculateCanvasPerimeter(undefined as any, "10")).toBeNaN();
    expect(calculateCanvasPerimeter("10", undefined as any)).toBeNaN();
    expect(calculateCanvasPerimeter(undefined as any, undefined as any)).toBeNaN();
  });

  // ❌ Non-string NaN values should return NaN
  test("should return NaN if one or both values are NaN (not string)", () => {
    expect(calculateCanvasPerimeter(NaN as any, "10")).toBeNaN();
    expect(calculateCanvasPerimeter("10", NaN as any)).toBeNaN();
    expect(calculateCanvasPerimeter(NaN as any, NaN as any)).toBeNaN();
  });
});
