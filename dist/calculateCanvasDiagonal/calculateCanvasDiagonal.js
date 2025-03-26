"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = calculateCanvasDiagonal;
/**
 * Calculates the diagonal of a canvas using the Pythagorean theorem.
 * Returns an error message for zero/negative/null/undefined.
 * Returns NaN for invalid strings.
 */
function calculateCanvasDiagonal(length, width) {
    // Null or undefined check
    if (length == null || width == null) {
        return "Length and width must be greater than zero.";
    }
    const l = parseFloat(length.toString().trim());
    const w = parseFloat(width.toString().trim());
    // Check for invalid strings
    if (isNaN(l) || isNaN(w)) {
        return NaN;
    }
    // Check for zero or negative
    if (l <= 0 || w <= 0) {
        return "Length and width must be greater than zero.";
    }
    return Math.sqrt(l ** 2 + w ** 2);
}
//# sourceMappingURL=calculateCanvasDiagonal.js.map