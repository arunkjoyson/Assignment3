"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = calculatePaintCost;
/**
 * Calculates the total cost of paint based on paint required and cost per liter.
 * Returns error message if values are null, undefined, zero, or negative.
 * Returns NaN for non-numeric values.
 */
function calculatePaintCost(paintRequired, costPerLiter) {
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
//# sourceMappingURL=calculatePaintCost.js.map