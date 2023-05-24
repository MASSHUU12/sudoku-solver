<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { useGridStore } from '@/stores/grid';
import templates from "@/templates/templates.json";

const { t } = useI18n();
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
 *
 * @param {Event} e - The event object.
 * @returns {void}
 */
function changeTemplate(e: Event): void {
  const selectedValue = (e.target as HTMLSelectElement).value;
  const selectedTemplate = templates as Templates;

  store.$reset();

  // If no template is selected, do nothing
  if (selectedValue === "")
    return;

  // Get the number of templates for the selected value
  const numOfTemplates = selectedTemplate[selectedValue].length;

  // Generate a random index for selecting a template
  const randomTemplateIndex = Math.floor(Math.random() * numOfTemplates);

  // Set the selected template in the grid store
  store.$state.grid = selectedTemplate[selectedValue][randomTemplateIndex];
}
</script>

<template>
  <select @change="(e: Event) => changeTemplate(e)" class="bg-slate-200 p-2 rounded-md mb-2 cursor-pointer">
    <option value="" selected>{{ t("examples.examples") }}</option>
    <option value="easy">{{ t("examples.easy") }}</option>
    <option value="medium">{{ t("examples.medium") }}</option>
    <option value="hard">{{ t("examples.hard") }}</option>
    <option value="expert">{{ t("examples.expert") }}</option>
    <option value="evil">{{ t("examples.evil") }}</option>
  </select>
</template>
