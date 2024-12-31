<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      class="stroke group-hover:stroke-font-danger-5"
      d="M15 0.999878L1 14.9999M1 0.999878L15 14.9999"
      :stroke="svgStroke"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>

<script lang="ts" setup>
defineProps({
  size: {
    type: Number || String,
    default: 14,
  },
  svgStroke: {
    type: String,
    default: "var(--text_dark2)",
  },
});
</script>

<style></style>
