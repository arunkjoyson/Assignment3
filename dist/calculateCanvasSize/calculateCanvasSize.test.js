"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const calculateCanvasSize_1 = __importDefault(require("./calculateCanvasSize"));
describe("calculateCanvasSize", () => {
    test("should return correct area for valid positive numbers", () => {
        expect((0, calculateCanvasSize_1.default)("10", "20")).toBe(200);
        expect((0, calculateCanvasSize_1.default)("3", "3")).toBe(9);
    });
    test("should return an error message when one or both values are 0", () => {
        expect((0, calculateCanvasSize_1.default)("0", "5")).toBe("Length and width must be greater than zero.");
        expect((0, calculateCanvasSize_1.default)("10", "0")).toBe("Length and width must be greater than zero.");
        expect((0, calculateCanvasSize_1.default)("0", "0")).toBe("Length and width must be greater than zero.");
    });
    test("should return an error message when one or both values are negative", () => {
        expect((0, calculateCanvasSize_1.default)("-5", "10")).toBe("Length and width must be greater than zero.");
        expect((0, calculateCanvasSize_1.default)("5", "-10")).toBe("Length and width must be greater than zero.");
        expect((0, calculateCanvasSize_1.default)("-5", "-10")).toBe("Length and width must be greater than zero.");
    });
    test("should return correct area for valid decimal values", () => {
        expect((0, calculateCanvasSize_1.default)("2.5", "4")).toBeCloseTo(10);
    });
    test("should return correct area when input contains whitespace", () => {
        expect((0, calculateCanvasSize_1.default)(" 4 ", " 5 ")).toBe(20);
    });
    test("should return NaN for non-numeric strings", () => {
        expect((0, calculateCanvasSize_1.default)("abc", "5")).toBeNaN();
        expect((0, calculateCanvasSize_1.default)("10", "xyz")).toBeNaN();
    });
    test("should return NaN for empty string inputs", () => {
        expect((0, calculateCanvasSize_1.default)("", "5")).toBeNaN();
        expect((0, calculateCanvasSize_1.default)("10", "")).toBeNaN();
    });
    test("should return NaN for special character inputs", () => {
        expect((0, calculateCanvasSize_1.default)("!", "4")).toBeNaN();
    });
    test("should return correct area for very large numeric inputs", () => {
        expect((0, calculateCanvasSize_1.default)("1000000", "1000000")).toBe(1000000000000);
    });
});
//# sourceMappingURL=calculateCanvasSize.test.js.map