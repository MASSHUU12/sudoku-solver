/**
 * Creates a grid with the specified number of rows and columns,
 * initialized with the given default value.
 *
 * @export
 * @param {[number, number]} [rows, cols] - An array containing the number of rows and columns.
 * @param {unknown} defaultValue - The default value to initialize the grid with.
 * @return {*}  {unknown[][]} The created grid with the specified dimensions and default value.
 */
export function createGrid([rows, cols]: [number, number], defaultValue: unknown): unknown[][] {
  return Array.from({ length: rows }, () => Array(cols).fill(defaultValue));
}
