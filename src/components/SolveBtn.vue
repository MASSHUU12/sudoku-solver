<script setup lang="ts">
import Btn from './Btn.vue';
import { Sudoku } from '@/helpers/sudoku';
import { useGridStore } from '@/stores/grid';

function solve(): void {
  const store = useGridStore();
  const sudoku = new Sudoku(store.grid);

  sudoku.solve();
}
</script>

<template>
  <Btn @click="solve">Solve</Btn>
</template>
