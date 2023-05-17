<script setup lang="ts">
import Btn from './Btn.vue';
import { useI18n } from "vue-i18n";
import { useGridStore } from '@/stores/grid';
import { createGrid } from '@/helpers/createGrid';

const { t } = useI18n();

function reset(): void {
  const store = useGridStore();
  store.$state.grid = createGrid([9, 9], 0);
  store.timeFinished = 0;
}
</script>

<template>
  <Btn @click="reset">{{ t("buttons.reset") }}</Btn>
</template>
