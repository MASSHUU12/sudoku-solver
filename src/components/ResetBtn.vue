<script setup lang="ts">
import { createGrid } from '@/helpers/createGrid';
import Btn from './Btn.vue';
import { useGridStore } from '@/stores/grid';

function reset(): void {
  const store = useGridStore();
  store.$state.grid = createGrid([9, 9], 0);
}
</script>

<template>
  <Btn @click="reset">Reset</Btn>
</template>
