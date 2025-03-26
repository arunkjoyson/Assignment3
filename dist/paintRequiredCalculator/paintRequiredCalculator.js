"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = paintRequiredCalculator;
/**
 * Calculates the amount of paint required based on area and coverage.
 * Returns an error if values are zero, negative, null, or undefined.
 * Returns NaN for non-numeric values.
 */
function paintRequiredCalculator(area, coveragePerLiter) {
    // Null/undefined check
    if (area == null || coveragePerLiter == null) {
        return "Area and coverage must be greater than zero.";
    }
    // Type check
    if (typeof area !== "number" || typeof coveragePerLiter !== "number") {
        return NaN;
    }
    if (coveragePerLiter === 0) {
        return "Coverage must be greater than zero.";
    }
    if (area < 0 || coveragePerLiter < 0) {
        return "Area and coverage must be greater than zero.";
    }
    if (area === 0) {
        return 0;
    }
    return area / coveragePerLiter;
}
//# sourceMappingURL=paintRequiredCalculator.js.map