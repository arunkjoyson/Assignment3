"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const calculateCanvasPerimeter_1 = __importDefault(require("./calculateCanvasPerimeter"));
describe("calculateCanvasPerimeter", () => {
    test("should return correct perimeter for valid positive numbers", () => {
        expect((0, calculateCanvasPerimeter_1.default)("10", "100")).toBe(220);
        expect((0, calculateCanvasPerimeter_1.default)("5", "20")).toBe(50);
    });
    test("should return correct perimeter for decimal values", () => {
        expect((0, calculateCanvasPerimeter_1.default)("2.5", "4")).toBeCloseTo(13);
    });
    test("should return correct perimeter for inputs with whitespace", () => {
        expect((0, calculateCanvasPerimeter_1.default)(" 3 ", " 5 ")).toBe(16);
    });
    test("should return error message when one or both values are 0", () => {
        expect((0, calculateCanvasPerimeter_1.default)("0", "10")).toBe("Length and width must be greater than zero.");
        expect((0, calculateCanvasPerimeter_1.default)("10", "0")).toBe("Length and width must be greater than zero.");
        expect((0, calculateCanvasPerimeter_1.default)("0", "0")).toBe("Length and width must be greater than zero.");
    });
    test("should return error message when one or both values are negative", () => {
        expect((0, calculateCanvasPerimeter_1.default)("-10", "20")).toBe("Length and width must be greater than zero.");
        expect((0, calculateCanvasPerimeter_1.default)("10", "-20")).toBe("Length and width must be greater than zero.");
        expect((0, calculateCanvasPerimeter_1.default)("-10", "-20")).toBe("Length and width must be greater than zero.");
    });
    test("should return NaN for non-numeric strings", () => {
        expect((0, calculateCanvasPerimeter_1.default)("abc", "5")).toBeNaN();
        expect((0, calculateCanvasPerimeter_1.default)("10", "xyz")).toBeNaN();
    });
    test("should return NaN for empty string inputs", () => {
        expect((0, calculateCanvasPerimeter_1.default)("", "5")).toBeNaN();
        expect((0, calculateCanvasPerimeter_1.default)("10", "")).toBeNaN();
    });
    test("should return NaN for special character inputs", () => {
        expect((0, calculateCanvasPerimeter_1.default)("!", "4")).toBeNaN();
    });
    test("should return correct perimeter for very large numeric inputs", () => {
        const result = (0, calculateCanvasPerimeter_1.default)("1000000", "1000000");
        expect(result).toBe(4000000);
    });
    test("should return NaN if one or both values are null", () => {
        expect((0, calculateCanvasPerimeter_1.default)(null, "10")).toBeNaN();
        expect((0, calculateCanvasPerimeter_1.default)("10", null)).toBeNaN();
        expect((0, calculateCanvasPerimeter_1.default)(null, null)).toBeNaN();
    });
    test("should return NaN if one or both values are undefined", () => {
        expect((0, calculateCanvasPerimeter_1.default)(undefined, "10")).toBeNaN();
        expect((0, calculateCanvasPerimeter_1.default)("10", undefined)).toBeNaN();
        expect((0, calculateCanvasPerimeter_1.default)(undefined, undefined)).toBeNaN();
    });
    test("should return NaN if one or both values are NaN (not string)", () => {
        expect((0, calculateCanvasPerimeter_1.default)(NaN, "10")).toBeNaN();
        expect((0, calculateCanvasPerimeter_1.default)("10", NaN)).toBeNaN();
        expect((0, calculateCanvasPerimeter_1.default)(NaN, NaN)).toBeNaN();
    });
});
//# sourceMappingURL=calculateCanvasPerimeter.test.js.map