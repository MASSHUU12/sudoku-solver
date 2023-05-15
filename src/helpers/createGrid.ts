/**
 * Creates a grid with the specified number of rows and columns,
 * initialized with the given default value.
 *
 * @export
 * @template T - The type of the default value and grid elements.
 * @param {[number, number]} [rows, cols] - An array containing the number of rows and columns.
 * @param {T} defaultValue - The default value to initialize the grid with.
 * @return {T[][]} The created grid with the specified dimensions and default value.
 */
export function createGrid<T>([rows, cols]: [number, number], defaultValue: T): T[][] {
  return Array.from({ length: rows }, () => Array(cols).fill(defaultValue));
}
