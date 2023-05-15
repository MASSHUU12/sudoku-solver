<script setup lang="ts">
// import HelloWorld from './components/HelloWorld.vue'
// import TheWelcome from './components/TheWelcome.vue'

const gridSize = 9;
</script>

<template>
  <main class="min-h-screen grid place-items-center">
    <table class="border-collapse">
      <tr v-for="row in gridSize" :key="row" class="bg-slate-200 text-center">
        <td v-for="column in gridSize" :key="column"
          :class="`p-2 border border-gray-300 w-12 h-12 ${(row % 3 === 0 && row !== gridSize) ? 'border-b-4' : ''} ${(column % 3 === 0 && column !== gridSize) ? 'border-r-4' : ''}`">
          <span class="text-2xl"></span>
        </td>
      </tr>
    </table>
  </main>
</template>
