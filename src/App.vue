<script setup lang="ts">
import Grid from "./components/Grid.vue";
import Keypad from "./components/Keypad.vue";
import Status from "./components/Status.vue";
import SolveBtn from "./components/SolveBtn.vue";
import ResetBtnVue from "./components/ResetBtn.vue";
</script>

<template>
  <main class="min-h-screen flex flex-col justify-center items-center gap-4 md:flex-row">
    <div class="flex flex-col gap-1">
      <Grid />
      <Status />
    </div>
    <div class="flex flex-col gap-1">
      <Keypad />
      <SolveBtn />
      <ResetBtnVue />
    </div>
  </main>
</template>
