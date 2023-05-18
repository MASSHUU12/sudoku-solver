<script setup lang="ts">
import { useGridStore } from '@/stores/grid';
import templates from "@/templates/templates.json";

const store = useGridStore();

interface Templates {
  // This informs TypeScript that any string can be used
  // as an index to retrieve values from the templates object.
  [key: string]: number[][][];
  easy: number[][][];
  medium: number[][][];
  hard: number[][][];
  expert: number[][][];
  evil: number[][][];
}

/**
 * Change the template based on the selected value.
 * @param {Event} e - The event object.
 * @returns {void}
 */
function changeTemplate(e: Event): void {
  const selectedValue = (e.target as HTMLSelectElement).value;
  const selectedTemplate = templates as Templates;

  if (selectedValue === "")
    return;

  // Get the number of templates for the selected value
  const numOfTemplates = selectedTemplate[selectedValue].length;

  // Generate a random index for selecting a template
  const randomTemplateIndex = Math.floor(Math.random() * numOfTemplates);

  // Reset grid to the initial state
  store.$reset();

  // Set the selected template in the grid store
  store.$state.grid = selectedTemplate[selectedValue][randomTemplateIndex];
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
