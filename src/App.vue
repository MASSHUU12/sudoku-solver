<script setup lang="ts">
import { useGridStore } from './stores/grid';

const gridSize = 9;
const store = useGridStore();
</script>

<template>
  <main class="min-h-screen grid place-items-center">
    <table class="border-collapse">
      <tr v-for="(row, rowIndex) in gridSize" :key="row" class="bg-slate-200 text-center">
        <td v-for="(column, columnIndex) in gridSize" :key="column"
          :class="`p-2 border border-gray-300 w-12 h-12 ${(row % 3 === 0 && row !== gridSize) ? 'border-b-4' : ''} ${(column % 3 === 0 && column !== gridSize) ? 'border-r-4' : ''}`">
          <span class="text-2xl">{{ store.grid[rowIndex][columnIndex] }}</span>
        </td>
      </tr>
    </table>
  </main>
</template>
