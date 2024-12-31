<template>
  <svg
    width="20"
    height="20"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10.1428 3.9881L11.0773 3.05359C11.5934 2.53748 12.4302 2.53748 12.9463 3.05359C13.4624 3.5697 13.4624 4.40649 12.9463 4.9226L12.0118 5.85711M10.1428 3.9881L4.65357 9.47737C3.9567 10.1742 3.60825 10.5226 3.37099 10.9472C3.13373 11.3718 2.89501 12.3744 2.66675 13.3332C3.62547 13.1049 4.62807 12.8662 5.05267 12.6289C5.47727 12.3916 5.82571 12.0432 6.52258 11.3464L12.0118 5.85711M10.1428 3.9881L12.0118 5.85711"
      class="stroke"
      :stroke="svgStroke"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path d="M7.33325 13.3335H11.3333" :stroke="svgStroke" stroke-linecap="round" />
  </svg>
</template>

<script setup lang="ts">
defineProps({
  svgStroke: {
    type: String,
    default: "var(--text_dark9)",
  },
});
</script>

<style scoped></style>
