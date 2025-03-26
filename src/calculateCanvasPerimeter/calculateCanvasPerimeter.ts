/**
 * Calculates the perimeter of a rectangle canvas.
 * Accepts string inputs, handles edge cases, and returns a number.
 */
export default function calculateCanvasPerimeter(length: string, width: string): number {
  // Trim and parse input values
  const l = parseFloat(length.trim());
  const w = parseFloat(width.trim());

  // Check for invalid input
  if (isNaN(l) || isNaN(w)) {
    return NaN;
  }

  // Use absolute values for safety
  return 2 * (Math.abs(l) + Math.abs(w));
}
