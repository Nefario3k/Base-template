<template>
  <!-- <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8.25 9V5.25C8.25 4.65326 8.48705 4.08097 8.90901 3.65901C9.33097 3.23705 9.90326 3 10.5 3H16.5C17.0967 3 17.669 3.23705 18.091 3.65901C18.5129 4.08097 18.75 4.65326 18.75 5.25V18.75C18.75 19.3467 18.5129 19.919 18.091 20.341C17.669 20.7629 17.0967 21 16.5 21H10.5C9.90326 21 9.33097 20.7629 8.90901 20.341C8.48705 19.919 8.25 19.3467 8.25 18.75V15M5.25 15L2.25 12M2.25 12L5.25 9M2.25 12H15"
      class="stroke"
      :stroke="svgStroke"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg> -->
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9.33333 2.06335C9.02867 2.02161 8.717 2 8.4 2C4.86538 2 2 4.68629 2 8C2 11.3137 4.86538 14 8.4 14C8.717 14 9.02867 13.9784 9.33333 13.9367"
      class="stroke"
      :stroke="svgStroke"
      stroke-linecap="round"
    />
    <path
      d="M14 8.00065H7.33331M14 8.00065C14 7.53385 12.6704 6.66167 12.3333 6.33398M14 8.00065C14 8.46745 12.6704 9.33965 12.3333 9.66732"
      class="stroke"
      :stroke="svgStroke"
      stroke-linecap="round"
      stroke-linejoin="round"
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
