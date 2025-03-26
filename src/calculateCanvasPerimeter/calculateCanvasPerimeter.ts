/**
 * Calculates the perimeter of a rectangle.
 * Returns a string error if values are 0 or negative.
 * Returns NaN for null, undefined, or invalid input.
 */
export default function calculateCanvasPerimeter(length: string | null | undefined, width: string | null | undefined): number | string {
  // Check for null or undefined before proceeding
  if (length == null || width == null) return NaN;

  // Convert to string just in case non-string was passed
  const l = parseFloat(length.toString().trim());
  const w = parseFloat(width.toString().trim());

  // Return NaN for non-numeric values
  if (isNaN(l) || isNaN(w)) {
    return NaN;
  }

  // Return error for zero or negative
  if (l <= 0 || w <= 0) {
    return "Length and width must be greater than zero.";
  }

  return 2 * (l + w);
}
