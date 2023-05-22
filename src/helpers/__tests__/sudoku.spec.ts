import { Sudoku } from '../sudoku';
import { describe, it, expect } from 'vitest';

describe('Sudoku', () => {
  describe('solve', () => {
    it('should solve a valid Sudoku board', () => {
      const sudoku = new Sudoku([
        [5, 3, 0, 0, 7, 0, 0, 0, 0],
        [6, 0, 0, 1, 9, 5, 0, 0, 0],
        [0, 9, 8, 0, 0, 0, 0, 6, 0],
        [8, 0, 0, 0, 6, 0, 0, 0, 3],
        [4, 0, 0, 8, 0, 3, 0, 0, 1],
        [7, 0, 0, 0, 2, 0, 0, 0, 6],
        [0, 6, 0, 0, 0, 0, 2, 8, 0],
        [0, 0, 0, 4, 1, 9, 0, 0, 5],
        [0, 0, 0, 0, 8, 0, 0, 7, 9]
      ]);
      const result = sudoku.solve();

      expect(result.success).toBe(true);

      // Verify that the solved grid is valid
      expect(new Sudoku(result.grid)['isValidSudoku']()).toBe(true);
    });

    it('should return false for an invalid Sudoku board', () => {
      const grid = [
        [5, 3, 0, 0, 7, 0, 0, 0, 0],
        [6, 0, 0, 1, 9, 5, 0, 0, 0],
        [0, 9, 8, 0, 0, 0, 0, 6, 0],
        [8, 0, 0, 0, 6, 0, 0, 0, 3],
        [4, 0, 0, 8, 0, 3, 0, 0, 1],
        [7, 0, 0, 0, 2, 0, 0, 0, 6],
        [0, 6, 0, 0, 0, 0, 2, 8, 0],
        [0, 0, 0, 4, 1, 9, 0, 0, 5],
        [0, 0, 0, 0, 8, 0, 0, 7, 7] // Invalid duplicate value
      ];
      const sudoku = new Sudoku(grid);
      const result = sudoku.solve();

      expect(result.success).toBe(false);

      // Verify that the grid remains unchanged
      expect(result.grid).toEqual(grid);
    });
  });

  describe('isValidSudoku', () => {
    it('should return true for a valid Sudoku board', () => {
      const sudoku = new Sudoku([
        [5, 3, 0, 0, 7, 0, 0, 0, 0],
        [6, 0, 0, 1, 9, 5, 0, 0, 0],
        [0, 9, 8, 0, 0, 0, 0, 6, 0],
        [8, 0, 0, 0, 6, 0, 0, 0, 3],
        [4, 0, 0, 8, 0, 3, 0, 0, 1],
        [7, 0, 0, 0, 2, 0, 0, 0, 6],
        [0, 6, 0, 0, 0, 0, 2, 8, 0],
        [0, 0, 0, 4, 1, 9, 0, 0, 5],
        [0, 0, 0, 0, 8, 0, 0, 7, 9]
      ]);

      expect(sudoku['isValidSudoku']()).toBe(true);
    });

    it('should return false for an invalid Sudoku board', () => {
      const sudoku = new Sudoku([
        [5, 3, 0, 0, 7, 0, 0, 0, 0],
        [6, 0, 0, 1, 9, 5, 0, 0, 0],
        [0, 9, 8, 0, 0, 0, 0, 6, 0],
        [8, 0, 0, 0, 6, 0, 0, 0, 3],
        [4, 0, 0, 8, 0, 3, 0, 0, 1],
        [7, 0, 0, 0, 2, 0, 0, 0, 6],
        [0, 6, 0, 0, 0, 0, 2, 8, 0],
        [0, 0, 0, 4, 1, 9, 0, 0, 5],
        [0, 0, 0, 0, 8, 0, 0, 7, 7] // Invalid duplicate value
      ]);

      expect(sudoku['isValidSudoku']()).toBe(false);
    });
  });

  describe('backtracking', () => {
    it('should solve a valid Sudoku board', () => {
      const sudoku = new Sudoku([
        [5, 3, 0, 0, 7, 0, 0, 0, 0],
        [6, 0, 0, 1, 9, 5, 0, 0, 0],
        [0, 9, 8, 0, 0, 0, 0, 6, 0],
        [8, 0, 0, 0, 6, 0, 0, 0, 3],
        [4, 0, 0, 8, 0, 3, 0, 0, 1],
        [7, 0, 0, 0, 2, 0, 0, 0, 6],
        [0, 6, 0, 0, 0, 0, 2, 8, 0],
        [0, 0, 0, 4, 1, 9, 0, 0, 5],
        [0, 0, 0, 0, 8, 0, 0, 7, 9]
      ]);
      const result = sudoku['backtracking']();
      expect(result).toBe(true);
      // Verify that the solved grid is valid
      expect(new Sudoku(sudoku['grid'])['isValidSudoku']()).toBe(true);
    });

    it('should return false for an invalid Sudoku board', () => {
      const grid = [
        [5, 3, 0, 0, 7, 0, 0, 0, 0],
        [6, 0, 0, 1, 9, 5, 0, 0, 0],
        [0, 9, 8, 0, 0, 0, 0, 6, 0],
        [8, 0, 0, 0, 6, 0, 0, 0, 3],
        [4, 0, 0, 8, 0, 3, 0, 0, 1],
        [7, 0, 0, 0, 2, 0, 0, 0, 6],
        [0, 6, 0, 0, 0, 0, 2, 8, 0],
        [0, 0, 0, 4, 1, 9, 0, 0, 5],
        [0, 0, 0, 0, 8, 0, 0, 7, 7] // Invalid duplicate value
      ];
      const sudoku = new Sudoku(grid);
      const result = sudoku['backtracking']();
      expect(result).toBe(false);
      // Verify that the grid remains unchanged
      expect(sudoku['grid']).toEqual(grid);
    });
  });

  describe('getBoxIndex', () => {
    it('should return 0 when num is 0', () => {
      expect(new Sudoku([])['getBoxIndex'](0)).toBe(0);
    });

    it('should return 3 when num is 5', () => {
      expect(new Sudoku([])['getBoxIndex'](5)).toBe(3);
    });

    it('should return 6 when num is 8', () => {
      expect(new Sudoku([])['getBoxIndex'](8)).toBe(6);
    });

    it('should return 0 when num is 2', () => {
      expect(new Sudoku([])['getBoxIndex'](2)).toBe(0);
    });

    it('should return 3 when num is 4', () => {
      expect(new Sudoku([])['getBoxIndex'](4)).toBe(3);
    });
  });
});
