"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = paintRequiredForMultipleCoats;
/**
 * Calculates total paint required for multiple coats.
 * Returns error for null, undefined, zero coverage, or negative inputs.
 * Returns NaN for non-numeric inputs.
 */
function paintRequiredForMultipleCoats(area, coveragePerLiter, coats) {
    if (area == null || coveragePerLiter == null || coats == null) {
        return "All values must be greater than zero.";
    }
    if (typeof area !== "number" ||
        typeof coveragePerLiter !== "number" ||
        typeof coats !== "number") {
        return NaN;
    }
    if (coveragePerLiter === 0) {
        return "Coverage per liter must be greater than zero.";
    }
    if (area < 0 || coveragePerLiter < 0 || coats < 0) {
        return "All values must be greater than zero.";
    }
    if (area === 0 || coats === 0) {
        return 0;
    }
    return (area / coveragePerLiter) * coats;
}
//# sourceMappingURL=paintRequiredForMultipleCoats.js.map