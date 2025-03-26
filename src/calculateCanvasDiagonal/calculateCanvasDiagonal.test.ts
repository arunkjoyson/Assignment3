import calculateCanvasDiagonal from './calculateCanvasDiagonal';

describe('calculateCanvasDiagonal', () => {
  test('should calculate diagonal correctly for positive values', () => {
    expect(calculateCanvasDiagonal('3', '4')).toBeCloseTo(5);
    expect(calculateCanvasDiagonal('6', '8')).toBeCloseTo(10);
    expect(calculateCanvasDiagonal('5', '12')).toBeCloseTo(13);
  });

  test('should return 0 for length and width of 0', () => {
    expect(calculateCanvasDiagonal('0', '0')).toBe(0);
  });

  test('should handle negative values correctly', () => {
    expect(calculateCanvasDiagonal('-3', '4')).toBeCloseTo(5);
    expect(calculateCanvasDiagonal('3', '-4')).toBeCloseTo(5);
    expect(calculateCanvasDiagonal('-3', '-4')).toBeCloseTo(5);
  });

  test('should handle non-numeric strings by returning NaN', () => {
    expect(calculateCanvasDiagonal('a', '4')).toBeNaN();
    expect(calculateCanvasDiagonal('3', 'b')).toBeNaN();
    expect(calculateCanvasDiagonal('a', 'b')).toBeNaN();
  });

  test('should correctly calculate diagonal for decimal inputs', () => {
    expect(calculateCanvasDiagonal('1.5', '2.0')).toBeCloseTo(Math.sqrt(1.5 ** 2 + 2.0 ** 2));
  });

  test('should trim and calculate for inputs with whitespace', () => {
    expect(calculateCanvasDiagonal(' 3 ', ' 4 ')).toBeCloseTo(5);
  });

  test('should return NaN for empty string inputs', () => {
    expect(calculateCanvasDiagonal('', '4')).toBeNaN();
    expect(calculateCanvasDiagonal('3', '')).toBeNaN();
  });

  test('should handle very large numbers without crashing', () => {
    const big = '1000000000';
    const result = calculateCanvasDiagonal(big, big);
    expect(result).toBeCloseTo(Math.sqrt(2 * (1e9 ** 2)));
  });

  test('should return NaN for special character inputs', () => {
    expect(calculateCanvasDiagonal('#', '4')).toBeNaN();
    expect(calculateCanvasDiagonal('3', '@')).toBeNaN();
  });
});