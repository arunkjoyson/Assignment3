"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = estimatePaintingTime;
/**
 * Estimates painting time based on area and painting speed.
 * Returns error messages for invalid, null, zero, or negative input.
 * Returns NaN for non-numeric types.
 */
function estimatePaintingTime(area, speed) {
    // Null or undefined check
    if (area == null || speed == null) {
        return "Area and speed must be greater than zero.";
    }
    // Type check
    if (typeof area !== "number" || typeof speed !== "number") {
        return NaN;
    }
    // Zero and negative checks
    if (speed === 0) {
        return "Painting speed must be greater than zero.";
    }
    if (area < 0 || speed < 0) {
        return "Area and speed must be greater than zero.";
    }
    if (area === 0) {
        return 0;
    }
    return area / speed;
}
//# sourceMappingURL=estimatePaintingTime.js.map