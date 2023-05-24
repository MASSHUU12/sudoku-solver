<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useGridStore } from '../stores/grid';

const gridSize = 9;

const store = useGridStore();
const { grid, selected } = storeToRefs(store);
</script>

<template>
  <table class="border-collapse">
    <tr v-for="(row, rowIndex) in gridSize" :key="row" class="bg-slate-200 text-center">
      <td @click="store.select([rowIndex, columnIndex])" v-for="(column, columnIndex) in gridSize" :key="column"
        class="p-1 border border-gray-300 w-8 h-8 md:w-12 md:h-12 cursor-pointer hover:bg-slate-300" :class="[
          `slate-${(selected[0] === rowIndex && selected[1] === columnIndex) ? '400' : '200'}`,
          (row % 3 === 0 && row !== gridSize) && 'border-b-4',
          (column % 3 === 0 && column !== gridSize) && 'border-r-4'
        ]">
        <span class="text-lg md:text-2xl font-light select-none">
          <!-- Check if the value at the current grid position is 0, if not, render the value -->
          {{ grid[rowIndex][columnIndex] === 0
            ? ''
            : grid[rowIndex][columnIndex] }}</span>
      </td>
    </tr>
  </table>
</template>
