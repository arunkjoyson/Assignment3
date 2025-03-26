import calculateCanvasPerimeter from "./calculateCanvasPerimeter";

describe("calculateCanvasPerimeter", () => {
  test("should return correct perimeter for valid numeric strings", () => {
    expect(calculateCanvasPerimeter("10", "100")).toBe(220);
    expect(calculateCanvasPerimeter("5", "20")).toBe(50);
  });

  test("should return 0 when both dimensions are 0", () => {
    expect(calculateCanvasPerimeter("0", "0")).toBe(0);
  });

  test("should return correct perimeter when one or both values are negative", () => {
    expect(calculateCanvasPerimeter("-10", "20")).toBe(60);
    expect(calculateCanvasPerimeter("10", "-20")).toBe(60);
    expect(calculateCanvasPerimeter("-10", "-20")).toBe(60);
  });

  test("should return correct perimeter for decimal values", () => {
    expect(calculateCanvasPerimeter("2.5", "4")).toBeCloseTo(13);
  });

  test("should return correct perimeter for inputs with whitespace", () => {
    expect(calculateCanvasPerimeter(" 3 ", " 5 ")).toBe(16);
  });

  test("should return NaN for non-numeric strings", () => {
    expect(calculateCanvasPerimeter("abc", "5")).toBeNaN();
    expect(calculateCanvasPerimeter("10", "xyz")).toBeNaN();
  });

  test("should return NaN for empty string inputs", () => {
    expect(calculateCanvasPerimeter("", "5")).toBeNaN();
    expect(calculateCanvasPerimeter("10", "")).toBeNaN();
  });

  test("should return NaN for special character inputs", () => {
    expect(calculateCanvasPerimeter("!", "4")).toBeNaN();
  });

  test("should return correct perimeter for very large numeric inputs", () => {
    const result = calculateCanvasPerimeter("1000000", "1000000");
    expect(result).toBe(4_000_000);
  });
});
