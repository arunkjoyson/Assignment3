// Import the function under test
import calculateCanvasDiagonal from './calculateCanvasDiagonal';

describe('calculateCanvasDiagonal', () => {
  // ✅ Valid inputs (Pythagorean triples)
  test('should return correct diagonal for valid positive numeric strings', () => {
    expect(calculateCanvasDiagonal('3', '4')).toBeCloseTo(5);
    expect(calculateCanvasDiagonal('6', '8')).toBeCloseTo(10);
  });

  // ❌ Edge case: Zero values are invalid
  test('should return error message when one or both values are 0', () => {
    expect(calculateCanvasDiagonal('0', '4')).toBe("Length and width must be greater than zero.");
    expect(calculateCanvasDiagonal('3', '0')).toBe("Length and width must be greater than zero.");
    expect(calculateCanvasDiagonal('0', '0')).toBe("Length and width must be greater than zero.");
  });

  // ❌ Edge case: Negative values are not allowed
  test('should return error message when one or both values are negative', () => {
    expect(calculateCanvasDiagonal('-3', '4')).toBe("Length and width must be greater than zero.");
    expect(calculateCanvasDiagonal('3', '-4')).toBe("Length and width must be greater than zero.");
    expect(calculateCanvasDiagonal('-3', '-4')).toBe("Length and width must be greater than zero.");
  });

  // ❌ Invalid input: non-numeric strings
  test('should return NaN for non-numeric strings', () => {
    expect(calculateCanvasDiagonal('a', '4')).toBeNaN();
    expect(calculateCanvasDiagonal('3', 'b')).toBeNaN();
    expect(calculateCanvasDiagonal('a', 'b')).toBeNaN();
  });

  // ❌ Invalid input: special characters
  test('should return NaN for special characters', () => {
    expect(calculateCanvasDiagonal('#', '4')).toBeNaN();
    expect(calculateCanvasDiagonal('3', '@')).toBeNaN();
  });

  // ❌ Invalid input: empty strings
  test('should return NaN for empty string inputs', () => {
    expect(calculateCanvasDiagonal('', '4')).toBeNaN();
    expect(calculateCanvasDiagonal('3', '')).toBeNaN();
  });

  // ❌ Invalid input: null values
  test('should return error message for null inputs', () => {
    expect(calculateCanvasDiagonal(null as any, '4')).toBe("Length and width must be greater than zero.");
    expect(calculateCanvasDiagonal('3', null as any)).toBe("Length and width must be greater than zero.");
  });

  // ❌ Invalid input: undefined values
  test('should return error message for undefined inputs', () => {
    expect(calculateCanvasDiagonal(undefined as any, '4')).toBe("Length and width must be greater than zero.");
    expect(calculateCanvasDiagonal('3', undefined as any)).toBe("Length and width must be greater than zero.");
  });

  // ✅ Decimal values: valid and should work
  test('should calculate diagonal correctly for decimal values', () => {
    expect(calculateCanvasDiagonal('1.5', '2.0')).toBeCloseTo(Math.sqrt(1.5 ** 2 + 2.0 ** 2));
  });

  // ✅ Inputs with whitespace should be trimmed and processed
  test('should trim and calculate correctly for inputs with whitespace', () => {
    expect(calculateCanvasDiagonal(' 3 ', ' 4 ')).toBeCloseTo(5);
  });

  // ✅ Performance test: large values shouldn't crash
  test('should handle very large numbers without crashing', () => {
    const big = '1000000000';
    expect(calculateCanvasDiagonal(big, big)).toBeCloseTo(Math.sqrt(2 * (1e9 ** 2)));
  });
});
