"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const estimatePaintingTime_1 = __importDefault(require("./estimatePaintingTime"));
describe('estimatePaintingTime', () => {
    test('should return correct painting time for valid positive numbers', () => {
        expect((0, estimatePaintingTime_1.default)(100, 10)).toBe(10);
        expect((0, estimatePaintingTime_1.default)(200, 20)).toBe(10);
        expect((0, estimatePaintingTime_1.default)(150, 15)).toBe(10);
    });
    test('should return 0 when area is 0', () => {
        expect((0, estimatePaintingTime_1.default)(0, 10)).toBe(0);
    });
    test('should return error message when painting speed is 0', () => {
        expect((0, estimatePaintingTime_1.default)(100, 0)).toBe("Painting speed must be greater than zero.");
    });
    test('should return error message when one or both values are negative', () => {
        expect((0, estimatePaintingTime_1.default)(-100, 10)).toBe("Area and speed must be greater than zero.");
        expect((0, estimatePaintingTime_1.default)(100, -10)).toBe("Area and speed must be greater than zero.");
        expect((0, estimatePaintingTime_1.default)(-100, -10)).toBe("Area and speed must be greater than zero.");
    });
    test('should return error message for null values', () => {
        expect((0, estimatePaintingTime_1.default)(null, 10)).toBe("Area and speed must be greater than zero.");
        expect((0, estimatePaintingTime_1.default)(100, null)).toBe("Area and speed must be greater than zero.");
    });
    test('should return error message for undefined values', () => {
        expect((0, estimatePaintingTime_1.default)(undefined, 10)).toBe("Area and speed must be greater than zero.");
        expect((0, estimatePaintingTime_1.default)(100, undefined)).toBe("Area and speed must be greater than zero.");
    });
    test('should return NaN for non-numeric values', () => {
        expect((0, estimatePaintingTime_1.default)("abc", 10)).toBeNaN();
        expect((0, estimatePaintingTime_1.default)(100, "xyz")).toBeNaN();
        expect((0, estimatePaintingTime_1.default)("abc", "xyz")).toBeNaN();
    });
    test('should return correct result for decimal values', () => {
        expect((0, estimatePaintingTime_1.default)(2.5, 0.5)).toBe(5);
    });
    test('should return correct result for very large values', () => {
        expect((0, estimatePaintingTime_1.default)(1000000, 100)).toBe(10000);
    });
});
//# sourceMappingURL=estimatePaintingTime.test.js.map