<script setup lang="ts">
import { ref } from 'vue';
import Btn from './Btn.vue';
import { useI18n } from "vue-i18n";
import { Sudoku } from '@/helpers/sudoku';
import { useGridStore } from '@/stores/grid';

const { t } = useI18n();
const solving = ref(false);

function solve(): void {
  const store = useGridStore();
  const sudoku = new Sudoku(store.grid);

  // Disable button when solving starts
  solving.value = true;

  const start = performance.now();

  // Try to solve Sudoku
  const result = sudoku.solve();
  const end = performance.now();

  store.$state.grid = result.grid;

  // Save how long website solved Sudoku
  store.timeFinished = result.success ? end - start : -1;

  solving.value = false; // Enable button when solving is finished
}
</script>

<template>
  <Btn @click="solve" :disabled="solving">{{ t("buttons.solve") }}</Btn>
</template>
