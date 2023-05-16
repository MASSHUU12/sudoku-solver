<script setup lang="ts">
import { ref } from 'vue';
import Btn from './Btn.vue';
import { Sudoku } from '@/helpers/sudoku';
import { useGridStore } from '@/stores/grid';

const solving = ref(false);

function solve(): void {
  const store = useGridStore();

  // Disable button when solving starts
  solving.value = true;
  const sudoku = new Sudoku(store.grid);
  solving.value = false; // Enable button when solving is finished

  // Display solved Sudoku
  store.$state.grid = sudoku.solve();
}
</script>

<template>
  <Btn @click="solve" :disabled="solving">Solve</Btn>
</template>
