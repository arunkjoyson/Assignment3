"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const calculatePaintCost_1 = __importDefault(require("./calculatePaintCost"));
describe('calculatePaintCost', () => {
    test('should return correct paint cost for valid positive values', () => {
        expect((0, calculatePaintCost_1.default)(10, 5)).toBe(50);
        expect((0, calculatePaintCost_1.default)(20, 7.5)).toBe(150);
        expect((0, calculatePaintCost_1.default)(15, 10)).toBe(150);
    });
    test('should return error message when paint required is 0', () => {
        expect((0, calculatePaintCost_1.default)(0, 5)).toBe("Paint and cost must be greater than zero.");
    });
    test('should return error message when cost per liter is 0', () => {
        expect((0, calculatePaintCost_1.default)(10, 0)).toBe("Paint and cost must be greater than zero.");
    });
    test('should return error message when one or both values are negative', () => {
        expect((0, calculatePaintCost_1.default)(-10, 5)).toBe("Paint and cost must be greater than zero.");
        expect((0, calculatePaintCost_1.default)(10, -5)).toBe("Paint and cost must be greater than zero.");
        expect((0, calculatePaintCost_1.default)(-10, -5)).toBe("Paint and cost must be greater than zero.");
    });
    test('should return error message when one or both values are null', () => {
        expect((0, calculatePaintCost_1.default)(null, 5)).toBe("Paint and cost must be greater than zero.");
        expect((0, calculatePaintCost_1.default)(10, null)).toBe("Paint and cost must be greater than zero.");
    });
    test('should return error message when one or both values are undefined', () => {
        expect((0, calculatePaintCost_1.default)(undefined, 5)).toBe("Paint and cost must be greater than zero.");
        expect((0, calculatePaintCost_1.default)(10, undefined)).toBe("Paint and cost must be greater than zero.");
    });
    test('should return NaN when one or both values are not numbers', () => {
        expect((0, calculatePaintCost_1.default)("ten", 5)).toBeNaN();
        expect((0, calculatePaintCost_1.default)(10, "five")).toBeNaN();
        expect((0, calculatePaintCost_1.default)("abc", "xyz")).toBeNaN();
    });
    test('should return correct result for decimal values', () => {
        expect((0, calculatePaintCost_1.default)(2.5, 4)).toBeCloseTo(10);
    });
    test('should return correct result for very large values', () => {
        expect((0, calculatePaintCost_1.default)(1000000, 50)).toBe(50000000);
    });
});
//# sourceMappingURL=calculatePaintCost.test.js.map