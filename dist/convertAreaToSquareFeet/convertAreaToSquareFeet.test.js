"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const convertAreaToSquareFeet_1 = __importDefault(require("./convertAreaToSquareFeet"));
describe('convertAreaToSquareFeet', () => {
    test('should convert area correctly for valid positive numbers', () => {
        expect((0, convertAreaToSquareFeet_1.default)(100)).toBeCloseTo(1076.39);
        expect((0, convertAreaToSquareFeet_1.default)(200)).toBeCloseTo(2152.78);
        expect((0, convertAreaToSquareFeet_1.default)(150)).toBeCloseTo(1614.585);
    });
    test('should return 0 if area is 0', () => {
        expect((0, convertAreaToSquareFeet_1.default)(0)).toBe(0);
    });
    test('should return error message if area is negative', () => {
        expect((0, convertAreaToSquareFeet_1.default)(-100)).toBe("Area must be greater than zero.");
        expect((0, convertAreaToSquareFeet_1.default)(-1)).toBe("Area must be greater than zero.");
    });
    test('should return error message if area is null or undefined', () => {
        expect((0, convertAreaToSquareFeet_1.default)(null)).toBe("Area must be greater than zero.");
        expect((0, convertAreaToSquareFeet_1.default)(undefined)).toBe("Area must be greater than zero.");
    });
    test('should return NaN if area is not a number', () => {
        expect((0, convertAreaToSquareFeet_1.default)("abc")).toBeNaN();
        expect((0, convertAreaToSquareFeet_1.default)("100")).toBeNaN(); // if strict type expected
    });
    test('should convert correctly for decimal values', () => {
        expect((0, convertAreaToSquareFeet_1.default)(2.5)).toBeCloseTo(26.90975);
    });
    test('should handle very large numbers correctly', () => {
        expect((0, convertAreaToSquareFeet_1.default)(1000000)).toBeCloseTo(10763900);
    });
});
//# sourceMappingURL=convertAreaToSquareFeet.test.js.map