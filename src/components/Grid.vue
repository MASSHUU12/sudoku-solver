<script setup lang="ts">
import { useGridStore } from '../stores/grid';

const gridSize = 9;
const store = useGridStore();

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
        :class="`p-2 border border-gray-300 w-12 h-12 cursor-pointer ${(row % 3 === 0 && row !== gridSize) ? 'border-b-4' : ''} ${(column % 3 === 0 && column !== gridSize) ? 'border-r-4' : ''}`">
        <span class="text-2xl font-light">
          <!-- Check if the value at the current grid position is 0, if not, render the value -->
          {{ store.grid[rowIndex][columnIndex] === 0
            ? ''
            : store.grid[rowIndex][columnIndex] }}</span>
      </td>
    </tr>
  </table>
</template>
