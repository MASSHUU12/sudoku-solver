export class Sudoku {
  private grid: number[][];

  constructor(grid: number[][]) {
    this.grid = grid;
  }

  public solve(): void {
    console.log(this.canBePlaced([3, 1], 8));
  }

  private canBePlaced([row, col]: [number, number], value: number): boolean {
    console.log(this.getSmallGrid([row, col]));

    return true;
  }

  /**
   * Find and return 3x3 grid.
   *
   * @private
   * @param {[number, number]} [row, col]
   * @return {*}  {number[][]}
   * @memberof Sudoku
   */
  private getSmallGrid([x, y]: [number, number]): number[][] {
    const boxRow = Math.floor(x / 3);
    const boxCol = Math.floor(y / 3);
    const smallGrid: number[][] = [];

    for (let i = 0; i < 3; i++) {
      const row = this.grid[boxRow * 3 + i];

      smallGrid.push([row[boxCol * 3], row[boxCol * 3 + 1], row[boxCol * 3 + 2]]);
    }

    return smallGrid;
  }

  private checkSmallGrid([row, col]: [number, number], valueToFind: number): boolean {
    const smallGrid = this.getSmallGrid([row, col]);

    return true;
  }
}
