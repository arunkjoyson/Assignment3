/**
 * Calculates the total cost by summing paint cost and labor cost.
 * Returns an error message for null, undefined, or negative values.
 * Returns NaN for non-numeric values.
 */
export default function calculateTotalCost(
  paintCost: number | null | undefined,
  laborCost: number | null | undefined
): number | string {
  // Null/undefined check
  if (paintCost == null || laborCost == null) {
    return "Costs must be greater than zero.";
  }

  // Type validation
  if (typeof paintCost !== "number" || typeof laborCost !== "number") {
    return NaN;
  }

  // Negative values check
  if (paintCost < 0 || laborCost < 0) {
    return "Costs must be greater than zero.";
  }

  return paintCost + laborCost;
}
