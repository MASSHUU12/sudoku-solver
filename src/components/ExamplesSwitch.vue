<script setup lang="ts">

function changeTemplate(e: Event): void {
  const selectedValue = (e.target as HTMLSelectElement).value;
  console.log(selectedValue);

}
</script>

<template>
  <select @change="(e: Event) => changeTemplate(e)" class="bg-slate-200 p-2 rounded-md mb-2 cursor-pointer">
    <option value="" selected>Templates</option>
    <option value="easy">Easy</option>
    <option value="medium">Medium</option>
    <option value="hard">Hard</option>
    <option value="expert">Expert</option>
    <option value="evil">Evil</option>
  </select>
</template>
