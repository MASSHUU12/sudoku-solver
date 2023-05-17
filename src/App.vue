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
  <footer class="bg-slate-100 p-6">
    <p>Source code can be found in the
      <a class="font-semibold underline" href="https://github.com/MASSHUU12/sudoku-solver" target="_blank"
        rel="noopener noreferrer">repository</a>.
    </p>
    <p>This website is licensed under
      <a class="font-semibold underline" href="https://github.com/MASSHUU12/sudoku-solver/blob/master/LICENSE"
        target="_blank" rel="noopener noreferrer">MIT</a> license.
    </p>
  </footer>
</template>
