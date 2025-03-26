import calculateCanvasSize from "./calculateCanvasSize";
import paintRequiredCalculator from "./paintRequiredCalculator";

function main(): void {
  // Dimensions as numbers
  const width: number = 10;
  const height: number = 20;

  // Convert dimensions to strings (if function expects strings)
  const area: number | string = calculateCanvasSize(width.toString(), height.toString());

  // Error handling
  if (typeof area === "string" || isNaN(area)) {
    console.error("Error calculating canvas area:", area);
    return;
  }

  const coveragePerLiter: number = 11.4;
  const paintRequired: number | string = paintRequiredCalculator(area, coveragePerLiter);

  if (typeof paintRequired === "string" || isNaN(paintRequired)) {
    console.error("Error calculating paint required:", paintRequired);
    return;
  }

  console.log(
    `${paintRequired.toFixed(2)} liters of paint is required to cover ${area.toFixed(2)} square meters of canvas.`
  );
}

main();
