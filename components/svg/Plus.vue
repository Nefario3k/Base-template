<template>
  <svg
    width="20"
    height="21"
    viewBox="0 0 20 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      class="group-hover:stroke-main-6"
      d="M10.0013 4.66699V16.3337M4.16797 10.5003H15.8346"
      :stroke="svgStroke"
      stroke-width="1.66667"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>

<script setup lang="ts">
defineProps({
  svgStroke: {
    type: String,
    default: "var(--text_dark2)",
  },
});
</script>

<style scoped></style>
