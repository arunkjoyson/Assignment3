"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const calculateCanvasDiagonal_1 = __importDefault(require("./calculateCanvasDiagonal"));
describe('calculateCanvasDiagonal', () => {
    test('should return correct diagonal for valid positive numeric strings', () => {
        expect((0, calculateCanvasDiagonal_1.default)('3', '4')).toBeCloseTo(5);
        expect((0, calculateCanvasDiagonal_1.default)('6', '8')).toBeCloseTo(10);
    });
    test('should return error message when one or both values are 0', () => {
        expect((0, calculateCanvasDiagonal_1.default)('0', '4')).toBe("Length and width must be greater than zero.");
        expect((0, calculateCanvasDiagonal_1.default)('3', '0')).toBe("Length and width must be greater than zero.");
        expect((0, calculateCanvasDiagonal_1.default)('0', '0')).toBe("Length and width must be greater than zero.");
    });
    test('should return error message when one or both values are negative', () => {
        expect((0, calculateCanvasDiagonal_1.default)('-3', '4')).toBe("Length and width must be greater than zero.");
        expect((0, calculateCanvasDiagonal_1.default)('3', '-4')).toBe("Length and width must be greater than zero.");
        expect((0, calculateCanvasDiagonal_1.default)('-3', '-4')).toBe("Length and width must be greater than zero.");
    });
    test('should return NaN for non-numeric strings', () => {
        expect((0, calculateCanvasDiagonal_1.default)('a', '4')).toBeNaN();
        expect((0, calculateCanvasDiagonal_1.default)('3', 'b')).toBeNaN();
        expect((0, calculateCanvasDiagonal_1.default)('a', 'b')).toBeNaN();
    });
    test('should return NaN for special characters', () => {
        expect((0, calculateCanvasDiagonal_1.default)('#', '4')).toBeNaN();
        expect((0, calculateCanvasDiagonal_1.default)('3', '@')).toBeNaN();
    });
    test('should return NaN for empty string inputs', () => {
        expect((0, calculateCanvasDiagonal_1.default)('', '4')).toBeNaN();
        expect((0, calculateCanvasDiagonal_1.default)('3', '')).toBeNaN();
    });
    test('should return error message for null inputs', () => {
        expect((0, calculateCanvasDiagonal_1.default)(null, '4')).toBe("Length and width must be greater than zero.");
        expect((0, calculateCanvasDiagonal_1.default)('3', null)).toBe("Length and width must be greater than zero.");
    });
    test('should return error message for undefined inputs', () => {
        expect((0, calculateCanvasDiagonal_1.default)(undefined, '4')).toBe("Length and width must be greater than zero.");
        expect((0, calculateCanvasDiagonal_1.default)('3', undefined)).toBe("Length and width must be greater than zero.");
    });
    test('should calculate diagonal correctly for decimal values', () => {
        expect((0, calculateCanvasDiagonal_1.default)('1.5', '2.0')).toBeCloseTo(Math.sqrt(1.5 ** 2 + 2.0 ** 2));
    });
    test('should trim and calculate correctly for inputs with whitespace', () => {
        expect((0, calculateCanvasDiagonal_1.default)(' 3 ', ' 4 ')).toBeCloseTo(5);
    });
    test('should handle very large numbers without crashing', () => {
        const big = '1000000000';
        expect((0, calculateCanvasDiagonal_1.default)(big, big)).toBeCloseTo(Math.sqrt(2 * (1e9 ** 2)));
    });
});
//# sourceMappingURL=calculateCanvasDiagonal.test.js.map