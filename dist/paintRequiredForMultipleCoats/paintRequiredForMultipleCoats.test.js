"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const paintRequiredForMultipleCoats_1 = __importDefault(require("./paintRequiredForMultipleCoats"));
describe('paintRequiredForMultipleCoats', () => {
    test('should return correct total paint required for valid inputs', () => {
        expect((0, paintRequiredForMultipleCoats_1.default)(100, 10, 2)).toBe(20);
        expect((0, paintRequiredForMultipleCoats_1.default)(200, 20, 3)).toBe(30);
        expect((0, paintRequiredForMultipleCoats_1.default)(150, 15, 4)).toBe(40);
    });
    test('should return 0 if area is 0', () => {
        expect((0, paintRequiredForMultipleCoats_1.default)(0, 10, 2)).toBe(0);
    });
    test('should return 0 if number of coats is 0', () => {
        expect((0, paintRequiredForMultipleCoats_1.default)(100, 10, 0)).toBe(0);
    });
    test('should return error message if coveragePerLiter is 0', () => {
        expect((0, paintRequiredForMultipleCoats_1.default)(100, 0, 2)).toBe("Coverage per liter must be greater than zero.");
    });
    test('should return error message if any value is negative', () => {
        expect((0, paintRequiredForMultipleCoats_1.default)(-100, 10, 2)).toBe("All values must be greater than zero.");
        expect((0, paintRequiredForMultipleCoats_1.default)(100, -10, 2)).toBe("All values must be greater than zero.");
        expect((0, paintRequiredForMultipleCoats_1.default)(100, 10, -2)).toBe("All values must be greater than zero.");
    });
    test('should return error message for null inputs', () => {
        expect((0, paintRequiredForMultipleCoats_1.default)(null, 10, 2)).toBe("All values must be greater than zero.");
        expect((0, paintRequiredForMultipleCoats_1.default)(100, null, 2)).toBe("All values must be greater than zero.");
        expect((0, paintRequiredForMultipleCoats_1.default)(100, 10, null)).toBe("All values must be greater than zero.");
    });
    test('should return error message for undefined inputs', () => {
        expect((0, paintRequiredForMultipleCoats_1.default)(undefined, 10, 2)).toBe("All values must be greater than zero.");
        expect((0, paintRequiredForMultipleCoats_1.default)(100, undefined, 2)).toBe("All values must be greater than zero.");
        expect((0, paintRequiredForMultipleCoats_1.default)(100, 10, undefined)).toBe("All values must be greater than zero.");
    });
    test('should return NaN for non-numeric values', () => {
        expect((0, paintRequiredForMultipleCoats_1.default)("abc", 10, 2)).toBeNaN();
        expect((0, paintRequiredForMultipleCoats_1.default)(100, "xyz", 2)).toBeNaN();
        expect((0, paintRequiredForMultipleCoats_1.default)(100, 10, "???123")).toBeNaN();
    });
    test('should return correct value for decimal inputs', () => {
        expect((0, paintRequiredForMultipleCoats_1.default)(2.5, 0.5, 2)).toBe(10);
    });
    test('should handle very large values correctly', () => {
        expect((0, paintRequiredForMultipleCoats_1.default)(1000000, 10, 5)).toBe(500000);
    });
});
//# sourceMappingURL=paintRequiredForMultipleCoats.test.js.map