"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const paintRequiredCalculator_1 = __importDefault(require("./paintRequiredCalculator"));
describe("paintRequiredCalculator", () => {
    test("should return correct paint required for valid inputs", () => {
        expect((0, paintRequiredCalculator_1.default)(50, 10)).toBe(5);
        expect((0, paintRequiredCalculator_1.default)(100, 20)).toBe(5);
        expect((0, paintRequiredCalculator_1.default)(75, 15)).toBe(5);
    });
    test("should return 0 if area is 0", () => {
        expect((0, paintRequiredCalculator_1.default)(0, 10)).toBe(0);
    });
    test("should return error message if coveragePerLiter is 0", () => {
        expect((0, paintRequiredCalculator_1.default)(100, 0)).toBe("Coverage must be greater than zero.");
    });
    test("should return error message for negative values", () => {
        expect((0, paintRequiredCalculator_1.default)(-100, 10)).toBe("Area and coverage must be greater than zero.");
        expect((0, paintRequiredCalculator_1.default)(100, -10)).toBe("Area and coverage must be greater than zero.");
        expect((0, paintRequiredCalculator_1.default)(-100, -10)).toBe("Area and coverage must be greater than zero.");
    });
    test("should return error message for null inputs", () => {
        expect((0, paintRequiredCalculator_1.default)(null, 10)).toBe("Area and coverage must be greater than zero.");
        expect((0, paintRequiredCalculator_1.default)(100, null)).toBe("Area and coverage must be greater than zero.");
    });
    test("should return error message for undefined inputs", () => {
        expect((0, paintRequiredCalculator_1.default)(undefined, 10)).toBe("Area and coverage must be greater than zero.");
        expect((0, paintRequiredCalculator_1.default)(100, undefined)).toBe("Area and coverage must be greater than zero.");
    });
    test("should return NaN for non-numeric values", () => {
        expect((0, paintRequiredCalculator_1.default)("abc", 10)).toBeNaN();
        expect((0, paintRequiredCalculator_1.default)(100, "xyz")).toBeNaN();
    });
    test("should return correct value for decimal inputs", () => {
        expect((0, paintRequiredCalculator_1.default)(2.5, 0.5)).toBe(5);
    });
    test("should handle very large values correctly", () => {
        expect((0, paintRequiredCalculator_1.default)(1000000, 10)).toBe(100000);
    });
});
//# sourceMappingURL=paintRequiredCalculator.test.js.map