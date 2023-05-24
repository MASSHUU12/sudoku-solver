<script setup lang="ts">
import Btn from './Btn.vue';
import { useI18n } from "vue-i18n";
import { useGridStore } from '@/stores/grid';

const { t } = useI18n();
const store = useGridStore();
</script>

<template>
  <Btn @click="store.$reset()">{{ t("buttons.reset") }}</Btn>
</template>
