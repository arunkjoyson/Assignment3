"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const calculateCanvasSize_1 = __importDefault(require("./calculateCanvasSize"));
const paintRequiredCalculator_1 = __importDefault(require("./paintRequiredCalculator"));
function main() {
    // Dimensions as numbers
    const width = 10;
    const height = 20;
    // Convert dimensions to strings (if function expects strings)
    const area = (0, calculateCanvasSize_1.default)(width.toString(), height.toString());
    // Error handling
    if (typeof area === "string" || isNaN(area)) {
        console.error("Error calculating canvas area:", area);
        return;
    }
    const coveragePerLiter = 11.4;
    const paintRequired = (0, paintRequiredCalculator_1.default)(area, coveragePerLiter);
    if (typeof paintRequired === "string" || isNaN(paintRequired)) {
        console.error("Error calculating paint required:", paintRequired);
        return;
    }
    console.log(`${paintRequired.toFixed(2)} liters of paint is required to cover ${area.toFixed(2)} square meters of canvas.`);
}
main();
//# sourceMappingURL=main.js.map