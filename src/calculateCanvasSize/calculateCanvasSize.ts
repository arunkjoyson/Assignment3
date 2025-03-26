/**
 * Calculates the area of a canvas given length and width as strings.
 * Returns an error message if inputs are zero or negative.
 * Returns NaN if inputs are invalid strings.
 */
export default function calculateCanvasSize(length: string, width: string): number | string {
  const l = parseFloat(length.trim());
  const w = parseFloat(width.trim());

  // Return NaN for invalid inputs
  if (isNaN(l) || isNaN(w)) {
    return NaN;
  }

  // Return error message for zero or negative values
  if (l <= 0 || w <= 0) {
    return "Length and width must be greater than zero.";
  }

  return l * w;
}
