/**
 * Creates a grid with the specified number of rows and columns,
 * initialized with the given default value.
 *
 * @export
 * @param {number[]} [rows, cols] - An array containing the number of rows and columns.
 * @param {unknown} defaultValue - The default value to initialize the grid with.
 * @return {*}  {unknown[][]} The created grid with the specified dimensions and default value.
 */
export function createGrid([rows, cols]: number[], defaultValue: unknown): unknown[][] {
  let grid: unknown[][] = [];

  for (let i = 0; i < rows; i++) {
    grid[i] = [];

    for (let j = 0; j < cols; j++) {
      grid[i][j] = defaultValue;
    }
  }

  return grid;
}
