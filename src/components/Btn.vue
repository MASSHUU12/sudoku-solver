<script setup lang="ts">
const props = defineProps({
  disabled: Boolean
});
</script>

<template>
  <button :disabled="props.disabled" class="bg-slate-200 p-4 w-full rounded-md hover:bg-slate-300 disabled:bg-slate-400">
    <span class="text-4xl font-light">
      <slot />
    </span>
  </button>
</template>
