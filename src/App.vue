<script setup lang="ts">
import Grid from "./components/Grid.vue";
import Keypad from "./components/Keypad.vue";
import Status from "./components/Status.vue";
import SolveBtn from "./components/SolveBtn.vue";
import ResetBtnVue from "./components/ResetBtn.vue";
import ExamplesSwitchVue from "./components/ExamplesSwitch.vue";

import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>

<template>
  <main class="min-h-screen flex flex-col justify-center items-center gap-4 md:flex-row">
    <div class="flex flex-col gap-1">
      <ExamplesSwitchVue />
      <Grid />
      <Status />
    </div>
    <div class="flex flex-col gap-1">
      <Keypad />
      <SolveBtn />
      <ResetBtnVue />
    </div>
  </main>
  <footer class="bg-slate-100 p-6">
    <p>{{ t("footer.source_code") }}
      <a class="font-semibold underline" href="https://github.com/MASSHUU12/sudoku-solver" target="_blank"
        rel="noopener noreferrer">{{ t("footer.repository") }}</a>.
    </p>
    <p>{{ t("footer.licensed_under") }}
      <a class="font-semibold underline" href="https://github.com/MASSHUU12/sudoku-solver/blob/master/LICENSE"
        target="_blank" rel="noopener noreferrer">{{ t("footer.license") }}</a>.
    </p>
  </footer>
</template>
