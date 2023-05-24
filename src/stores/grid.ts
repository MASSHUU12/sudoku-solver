import { defineStore } from 'pinia';
import type { template } from '@/typings/types';
import { createGrid } from '@/helpers/createGrid';

interface StoreProps {
  grid: number[][];
  selected: [number, number];
  timeFinished: number;
  template: template;
}

export const useGridStore = defineStore('grid', {
  state: (): StoreProps => {
    return {
      grid: createGrid([9, 9], 0),
      selected: [-1, -1],
      timeFinished: 0,
      template: ''
    };
  },
  actions: {
    /**
     * Updates the value at the specified position in the grid array.
     *
     * @param {[number, number]} data - An array containing the row and column indices.
     * @param {number} val - The new value to set at the specified position.
     * @returns {void}
     */
    update([row, col]: [number, number], val: number): void {
      // Get the current value at the specified position
      const currentVal = this.grid[row][col];

      // Check if the row index is out of bounds
      if (row < 0 || row > this.grid.length) return;
      // Check if the column index is out of bounds
      if (col < 0 || col > this.grid[0].length) return;
      // Check if the new value is out of range
      if (val < 0 || val > 9) return;

      // Update the value at the specified position in the grid array
      // If new value is the same as current value set value to 0
      this.grid[row][col] = val === currentVal ? 0 : val;
    },

    /**
     * Updates the selected property of the store with the provided row and column values.
     *
     * @param {number} row - The row index of the selected cell.
     * @param {number} col - The column index of the selected cell.
     * @returns {void}
     */
    select([row, col]: [number, number]): void {
      // Deselect all cells
      if (row === this.selected[0] && col === this.selected[1]) {
        this.selected = [-1, -1];
        return;
      }
      this.selected = [row, col];
    }
  }
});
