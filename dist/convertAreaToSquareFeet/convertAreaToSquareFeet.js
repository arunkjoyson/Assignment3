"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = convertAreaToSquareFeet;
/**
 * Converts area from square meters to square feet (1 m² = 10.7639 ft²).
 * Returns an error message for null, undefined, or negative input.
 * Returns NaN for non-numeric input.
 */
function convertAreaToSquareFeet(area) {
    if (area == null) {
        return "Area must be greater than zero.";
    }
    if (typeof area !== 'number') {
        return NaN;
    }
    if (area < 0) {
        return "Area must be greater than zero.";
    }
    if (area === 0) {
        return 0;
    }
    return area * 10.7639;
}
//# sourceMappingURL=convertAreaToSquareFeet.js.map