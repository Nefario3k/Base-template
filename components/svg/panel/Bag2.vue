<template>
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3.22745 14.1828L2.22448 8.19984C2.07283 7.29523 1.99702 6.84293 2.23982 6.54647C2.48262 6.25 2.92888 6.25 3.82141 6.25H16.1787C17.0712 6.25 17.5175 6.25 17.7603 6.54647C18.003 6.84293 17.9272 7.29523 17.7756 8.19984L16.7726 14.1828C16.4402 16.1659 16.274 17.1574 15.5953 17.7454C14.9167 18.3333 13.9384 18.3333 11.9819 18.3333H8.01822C6.06167 18.3333 5.0834 18.3333 4.40475 17.7454C3.7261 17.1574 3.55988 16.1659 3.22745 14.1828Z"
      class="stroke"
      :stroke="svgStroke"
      stroke-width="1.5"
    />
    <path
      d="M14.5833 6.25033C14.5833 3.71902 12.5313 1.66699 9.99996 1.66699C7.46865 1.66699 5.41663 3.71902 5.41663 6.25033"
      class="stroke"
      :stroke="svgStroke"
      stroke-width="1.5"
    />
  </svg>
</template>

<script setup lang="ts">
defineProps({
  svgStroke: {
    type: String,
    default: "var(--border_color2)",
  },
});
</script>

<style scoped></style>
