<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useGridStore } from '../stores/grid';

const gridSize = 9;

const store = useGridStore();
const { grid, selected } = storeToRefs(store);

// Set default grid for testing
store.grid = [
  [9, 0, 3, 0, 0, 8, 4, 0, 0],
  [0, 5, 0, 1, 0, 7, 0, 0, 3],
  [6, 8, 7, 3, 0, 2, 9, 0, 0],
  [0, 0, 0, 6, 0, 0, 0, 0, 0],
  [5, 3, 8, 2, 0, 0, 0, 0, 0],
  [1, 0, 2, 0, 0, 4, 0, 9, 0],
  [3, 0, 0, 9, 0, 6, 0, 7, 0],
  [7, 2, 6, 8, 5, 1, 0, 4, 0],
  [0, 0, 0, 4, 0, 3, 2, 5, 0],
];

/**
 * Updates the selected property of the store with the provided row and column values.
 *
 * @param {number} row - The row index of the selected cell.
 * @param {number} col - The column index of the selected cell.
 * @returns {void}
 */
function select(row: number, col: number): void {
  store.selected = [row, col];
}
</script>

<template>
  <table class="border-collapse">
    <tr v-for="(row, rowIndex) in gridSize" :key="row" class="bg-slate-200 text-center">
      <td @click="select(rowIndex, columnIndex)" v-for="(column, columnIndex) in gridSize" :key="column"
        class="p-2 border border-gray-300 w-12 h-12 cursor-pointer hover:bg-slate-300" :class="[
          `bg-slate-${(selected[0] === rowIndex && selected[1] == columnIndex) ? '400' : '200'}`,
          (row % 3 === 0 && row !== gridSize) ? 'border-b-4' : '',
          (column % 3 === 0 && column !== gridSize) ? 'border-r-4' : '',
        ].join(' ')">
        <span class="text-2xl font-light select-none">
          <!-- Check if the value at the current grid position is 0, if not, render the value -->
          {{ grid[rowIndex][columnIndex] === 0
            ? ''
            : grid[rowIndex][columnIndex] }}</span>
      </td>
    </tr>
  </table>
</template>
