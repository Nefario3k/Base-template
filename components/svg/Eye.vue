<template>
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      class="stroke"
      d="M14.3626 7.36301C14.5653 7.64721 14.6666 7.78934 14.6666 7.99967C14.6666 8.21001 14.5653 8.35214 14.3626 8.63634C13.4519 9.91341 11.1261 12.6663 7.99992 12.6663C4.87377 12.6663 2.54799 9.91341 1.63728 8.63634C1.43459 8.35214 1.33325 8.21001 1.33325 7.99967C1.33325 7.78934 1.43459 7.64721 1.63728 7.36301C2.54799 6.08597 4.87377 3.33301 7.99992 3.33301C11.1261 3.33301 13.4519 6.08597 14.3626 7.36301Z"
      :stroke="svgStroke"
    />
    <path
      class="stroke"
      d="M10 8C10 6.8954 9.1046 6 8 6C6.8954 6 6 6.8954 6 8C6 9.1046 6.8954 10 8 10C9.1046 10 10 9.1046 10 8Z"
      :stroke="svgStroke"
    />
  </svg>
</template>

<script setup lang="ts">
defineProps({
  svgStroke: {
    type: String,
    default: "var(--text_dark15)",
  },
});
</script>

<style scoped></style>
