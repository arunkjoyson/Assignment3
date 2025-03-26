import calculateCanvasSize from "./calculateCanvasSize";
import paintRequiredCalculator from "./paintRequiredCalculator";

function main(): void {
  // Dimensions as numbers (TypeScript best practice)
  const width: number = 10;
  const height: number = 20;

  // Calculate canvas area
  const area: number = calculateCanvasSize(width, height);

  // Define coverage per liter
  const coveragePerLiter: number = 11.4;

  // Calculate paint required
  const paintRequired: number = paintRequiredCalculator(area, coveragePerLiter);

  // Output the result
  console.log(`${paintRequired.toFixed(2)} liters of paint is required to cover ${area.toFixed(2)} square meters of canvas.`);
}

main();
