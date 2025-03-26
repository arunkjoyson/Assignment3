export default function calculateCanvasDiagonal(length: string, width: string): number {
  // Trim and parse inputs
  const l = parseFloat(length.trim());
  const w = parseFloat(width.trim());

  // Check for invalid input
  if (isNaN(l) || isNaN(w)) {
    return NaN;
  }

  // Use absolute values to ignore negative inputs
  return Math.sqrt(Math.abs(l) ** 2 + Math.abs(w) ** 2);
}
