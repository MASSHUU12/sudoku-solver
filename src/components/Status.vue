<script setup lang="ts">
import { useGridStore } from '@/stores/grid';

const store = useGridStore();
</script>

<template>
  <span v-if="store.timeFinished === 0" class="text-slate-700 font-semibold">Click Solve button, and we will solve Sudoku
    for you!</span>
  <span v-if="store.timeFinished > 0" class="text-green-700 font-semibold">Sudoku solved! Time: {{ (store.timeFinished /
    1000).toFixed(2) }}s</span>
  <span v-if="store.timeFinished <= -1" class="text-red-700 font-semibold">Oops. It's impossible to solve this
    Sudoku!</span>
</template>
