import { defineStore } from 'pinia';
import { createGrid } from '@/helpers/createGrid';

export const useGridStore = defineStore('grid', {
  state: () => {
    return {
      grid: createGrid([9, 9], 0),
      selected: [0, 0]
    };
  },
  actions: {
    /**
     * Updates the value at the specified position in the grid array.
     *
     * @param {number[]} data - An array containing the row and column indices.
     * @param {number} val - The new value to set at the specified position.
     * @returns {void}
     */
    update([row, col]: number[], val: number): void {
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
    }
  }
});
