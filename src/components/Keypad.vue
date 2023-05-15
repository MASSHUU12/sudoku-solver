<script setup lang="ts">
import { useGridStore } from '@/stores/grid';

const store = useGridStore();

function changeNumber(num: number): void {
  store.update(store.selected, num);
}
</script>

<template>
  <div class="grid grid-cols-3 gap-1">
    <button @click="changeNumber(btnIndex + 1)" v-for="(btn, btnIndex) in 9" :key="btn + 1"
      class="bg-slate-200 hover:bg-slate-300 p-8 rounded-md">
      <span class="text-4xl font-light">{{ btnIndex + 1 }}</span>
    </button>
  </div>
</template>
