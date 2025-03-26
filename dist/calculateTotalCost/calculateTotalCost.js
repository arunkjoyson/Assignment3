"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = calculateTotalCost;
/**
 * Calculates the total cost by summing paint cost and labor cost.
 * Returns an error message for null, undefined, or negative values.
 * Returns NaN for non-numeric values.
 */
function calculateTotalCost(paintCost, laborCost) {
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
//# sourceMappingURL=calculateTotalCost.js.map