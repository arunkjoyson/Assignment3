"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const calculateTotalCost_1 = __importDefault(require("./calculateTotalCost"));
describe('calculateTotalCost', () => {
    test('should return correct total cost for valid positive inputs', () => {
        expect((0, calculateTotalCost_1.default)(100, 50)).toBe(150);
        expect((0, calculateTotalCost_1.default)(200, 75)).toBe(275);
        expect((0, calculateTotalCost_1.default)(150, 100)).toBe(250);
    });
    test('should return paint cost if labor cost is 0', () => {
        expect((0, calculateTotalCost_1.default)(100, 0)).toBe(100);
    });
    test('should return labor cost if paint cost is 0', () => {
        expect((0, calculateTotalCost_1.default)(0, 50)).toBe(50);
    });
    test('should return 0 when both paint and labor costs are 0', () => {
        expect((0, calculateTotalCost_1.default)(0, 0)).toBe(0);
    });
    test('should return error message if one or both costs are negative', () => {
        expect((0, calculateTotalCost_1.default)(-100, 50)).toBe("Costs must be greater than zero.");
        expect((0, calculateTotalCost_1.default)(100, -50)).toBe("Costs must be greater than zero.");
        expect((0, calculateTotalCost_1.default)(-100, -50)).toBe("Costs must be greater than zero.");
    });
    test('should return error message if one or both costs are null', () => {
        expect((0, calculateTotalCost_1.default)(null, 50)).toBe("Costs must be greater than zero.");
        expect((0, calculateTotalCost_1.default)(100, null)).toBe("Costs must be greater than zero.");
        expect((0, calculateTotalCost_1.default)(null, null)).toBe("Costs must be greater than zero.");
    });
    test('should return error message if one or both costs are undefined', () => {
        expect((0, calculateTotalCost_1.default)(undefined, 50)).toBe("Costs must be greater than zero.");
        expect((0, calculateTotalCost_1.default)(100, undefined)).toBe("Costs must be greater than zero.");
        expect((0, calculateTotalCost_1.default)(undefined, undefined)).toBe("Costs must be greater than zero.");
    });
    test('should return NaN if one or both costs are not valid numbers', () => {
        expect((0, calculateTotalCost_1.default)("abc", 50)).toBeNaN();
        expect((0, calculateTotalCost_1.default)(100, "xyz")).toBeNaN();
        expect((0, calculateTotalCost_1.default)("abc", "xyz")).toBeNaN();
    });
    test('should return correct total for decimal values', () => {
        expect((0, calculateTotalCost_1.default)(2.5, 3.5)).toBeCloseTo(6);
    });
    test('should return correct total for very large values', () => {
        expect((0, calculateTotalCost_1.default)(1000000, 1000000)).toBe(2000000);
    });
});
//# sourceMappingURL=calculateTotalCost.test.js.map