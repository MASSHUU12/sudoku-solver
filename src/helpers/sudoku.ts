export class Sudoku {
  private grid: number[][];
  private clues: boolean[][] = [];

  constructor(grid: number[][]) {
    this.grid = grid;
    this.findClues();
  }

  public solve(): {
    grid: number[][];
    success: boolean;
  } {
    return {
      grid: this.grid, // Return grid
      success: this.backtracking() // Solve Sudoku
    };
  }

  /**
   * Recursive backtracking algorithm to solve the Sudoku puzzle.
   *
   * @private
   * @return {*}  {boolean} Returns true if a solution is found, false otherwise.
   * @memberof Sudoku
   */
  private backtracking(): boolean {
    for (let row = 0; row < 9; row++) {
      for (let col = 0; col < 9; col++) {
        if (this.grid[row][col] === 0) {
          for (let num = 1; num <= 9; num++) {
            if (this.canBePlaced([row, col], num)) {
              this.grid[row][col] = num;

              // Recursively call backtracking to solve the puzzle
              if (this.backtracking()) return true;

              // Backtrack by resetting the cell to empty if the solution is not found
              this.grid[row][col] = 0;
            }
          }
          // Return false if all numbers from 1 to 9 cannot be placed at the cell
          return false;
        }
      }
    }
    // Return true if all cells in the puzzle are filled (solution found)
    return true;
  }

  /**
   * Check if the specified value can be placed in the given cell coordinates without violating Sudoku rules.
   *
   * @private
   * @param {[number, number]} [row, col] - The coordinates of the cell within the Sudoku grid.
   * @param {number} value - The value to check for placement.
   * @return {boolean} - Returns true if the value can be placed, false otherwise.
   * @memberof Sudoku
   */
  private canBePlaced([row, col]: [number, number], value: number): boolean {
    // Check if the value already exists in the 3x3 grid or the row/column
    if (this.existsInSmallGrid([row, col], value) || this.existsInXY([row, col], value)) {
      return false;
    }

    // If the value does not exist in the 3x3 grid or the row/column, it can be placed
    return true;
  }

  /**
   * Check if the specified value exists in the row or column containing the given cell coordinates.
   *
   * @private
   * @param {[number, number]} [row, col] - The coordinates of the cell within the Sudoku grid.
   * @param {number} valueToFind - The value to search for in the row or column.
   * @return {boolean} - Returns true if the value exists in the row or column, false otherwise.
   * @memberof Sudoku
   */
  private existsInXY([row, col]: [number, number], valueToFind: number): boolean {
    // Check if the value exists in the row
    if (this.grid[row].includes(valueToFind)) {
      return true;
    }

    // Check if the value exists in the column
    return this.grid.some((rowValues) => rowValues[col] === valueToFind);
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

    // Check if the value exists in any cell of the small grid
    return smallGrid.some((row) => row.includes(valueToFind));
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
    const boxRow = Math.floor(x / 3) * 3;
    const boxCol = Math.floor(y / 3) * 3;

    // Create a 3x3 grid initialized with zeros
    const smallGrid: number[][] = Array.from({ length: 3 }, () =>
      Array.from({ length: 3 }, () => 0)
    );

    // Copy the values from the Sudoku grid into the small grid
    for (let i = 0; i < 3; i++) {
      const row = this.grid[boxRow + i];

      for (let j = 0; j < 3; j++) {
        smallGrid[i][j] = row[boxCol + j];
      }
    }

    return smallGrid;
  }

  /**
   * Find originally placed clues
   *
   * @private
   * @memberof Sudoku
   */
  private findClues(): void {
    this.clues = Array.from({ length: 9 }, () => Array.from({ length: 9 }, () => false));

    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (this.grid[i][j] !== 0) this.clues[i][j] = true;
      }
    }
  }
}
