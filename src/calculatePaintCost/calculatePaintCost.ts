/**
 * Calculates the total cost of paint based on paint required and cost per liter.
 * Returns error message if values are null, undefined, zero, or negative.
 * Returns NaN for non-numeric values.
 */
export default function calculatePaintCost(
  paintRequired: number | null | undefined,
  costPerLiter: number | null | undefined
): number | string {
  // Null/undefined check
  if (paintRequired == null || costPerLiter == null) {
    return "Paint and cost must be greater than zero.";
  }

  // Non-numeric check
  if (typeof paintRequired !== "number" || typeof costPerLiter !== "number") {
    return NaN;
  }

  // Check for zero or negative values
  if (paintRequired <= 0 || costPerLiter <= 0) {
    return "Paint and cost must be greater than zero.";
  }

  return paintRequired * costPerLiter;
}
