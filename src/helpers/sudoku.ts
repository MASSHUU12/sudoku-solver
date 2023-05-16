export class Sudoku {
  private grid: number[][];

  constructor(grid: number[][]) {
    this.grid = grid;
  }

  public solve(): void {
    this.canBePlaced([3, 1], 8);
  }

  private canBePlaced([row, col]: [number, number], value: number): boolean {
    console.log(this.existsInSmallGrid([row, col], value));

    return true;
  }

  /**
   * Check if the specified value exists in the 3x3 grid containing the given cell coordinates.
   *
   * @private
   * @param {[number, number]} [row, col] - The coordinates of the cell within the Sudoku grid.
   * @param {number} valueToFind - The value to search for in the grid.
   * @return {boolean} - Returns true if the value exists in the grid, false otherwise.
   * @memberof Sudoku
   */
  private existsInSmallGrid([row, col]: [number, number], valueToFind: number): boolean {
    const smallGrid = this.getSmallGrid([row, col]);

    // Iterate through each cell in the small grid
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (smallGrid[i][j] === valueToFind) {
          // If the value is found, return true
          return true;
        }
      }
    }

    // If the value is not found, return false
    return false;
  }

  /**
   * Find and return the 3x3 grid containing the specified coordinates.
   *
   * @private
   * @param {[number, number]} [row, col] - The coordinates of the cell within the Sudoku grid.
   * @return {number[][]} - The 3x3 grid.
   * @memberof Sudoku
   */
  private getSmallGrid([x, y]: [number, number]): number[][] {
    if (x < 0 || x >= 9 || y < 0 || y >= 9) {
      throw new Error('Invalid coordinates.');
    }

    // Calculate the row and column indices of the top-left cell of the 3x3 grid
    const boxRow = Math.floor(x / 3);
    const boxCol = Math.floor(y / 3);

    // Create a 3x3 grid initialized with zeros
    const smallGrid: number[][] = Array.from({ length: 3 }, () =>
      Array.from({ length: 3 }, () => 0)
    );

    // Copy the values from the Sudoku grid into the small grid
    for (let i = 0; i < 3; i++) {
      const row = this.grid[boxRow * 3 + i];

      for (let j = 0; j < 3; j++) {
        smallGrid[i][j] = row[boxCol * 3 + j];
      }
    }

    return smallGrid;
  }
}
