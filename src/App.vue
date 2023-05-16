<script setup lang="ts">
import Grid from "./components/Grid.vue";
import Keypad from "./components/Keypad.vue";
import SolveBtn from "./components/SolveBtn.vue";
</script>

<template>
  <main class="min-h-screen flex flex-row justify-center items-center gap-4">
    <Grid />
    <div class="flex flex-col gap-3">
      <Keypad />
      <SolveBtn />
    </div>
  </main>
</template>
