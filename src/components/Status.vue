<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { useGridStore } from '@/stores/grid';

const { t } = useI18n();

const store = useGridStore();
</script>

<template>
  <span v-if="store.timeFinished === 0" class="text-slate-700 font-semibold">{{ t("status.normal") }}</span>
  <span v-if="store.timeFinished > 0" class="text-green-700 font-semibold">{{ t("status.solved", {
    time:
      (store.timeFinished /
        1000).toFixed(2)
  }) }}</span>
  <span v-if="store.timeFinished <= -1" class="text-red-700 font-semibold">{{ t("status.invalid") }}</span>
</template>
