<template>
  <button
    :class="{ 'cursor-pointer': !disabled }"
    :disabled="disabled"
    class="flex items-center gap-3"
  >
    <img :src="`/svgs/${checkedValue}.svg`" alt="check" class="w-[2rem] h-[2rem]" />

    <span v-if="title" class="capitalize text-sm text-font-3 mb-0">{{ title }}</span>
  </button>
</template>

<script lang="ts" setup>
import { computed } from "vue";
const props = defineProps({
  title: {
    type: String,
    default: "",
  },
  checkValue: {
    type: Boolean,
    default: false,
  },
  intermediate: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});
const checkedValue = computed(() => {
  if (props.intermediate) return "intermediate";
  else if (props.checkValue) return "checked";
  else return "unchecked";
});
</script>

<style></style>
