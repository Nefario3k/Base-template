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
      d="M7.33331 14.667C6.78785 14.667 6.26677 14.4469 5.2246 14.0067C2.63041 12.9108 1.33331 12.3629 1.33331 11.4412C1.33331 11.1831 1.33331 6.70999 1.33331 4.66699M7.33331 14.667V7.57019M7.33331 14.667C7.56025 14.667 7.76418 14.6289 7.99998 14.5527M13.3333 4.66699V7.66699"
      :stroke="svgStroke"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      class="stroke"
      d="M12 12L12.6037 11.3963M14.6666 11.9997C14.6666 10.5269 13.4727 9.33301 12 9.33301C10.5272 9.33301 9.33331 10.5269 9.33331 11.9997C9.33331 13.4724 10.5272 14.6663 12 14.6663C13.4727 14.6663 14.6666 13.4724 14.6666 11.9997Z"
      :stroke="svgStroke"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      class="stroke"
      d="M4.88393 6.46059L2.93646 5.51824C1.86769 5.00107 1.33331 4.74249 1.33331 4.33301C1.33331 3.92352 1.86769 3.66494 2.93646 3.14777L4.88393 2.20542C6.08587 1.62381 6.68685 1.33301 7.33331 1.33301C7.97978 1.33301 8.58078 1.62381 9.78271 2.20542L11.7302 3.14777C12.7989 3.66494 13.3333 3.92352 13.3333 4.33301C13.3333 4.74249 12.7989 5.00107 11.7302 5.51824L9.78271 6.46059C8.58078 7.04221 7.97978 7.33301 7.33331 7.33301C6.68685 7.33301 6.08587 7.04221 4.88393 6.46059Z"
      :stroke="svgStroke"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      class="stroke"
      d="M3.33331 8L4.66665 8.66667"
      :stroke="svgStroke"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      class="stroke"
      d="M10.6667 2.66699L4 6.00033"
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
    default: "var(--text_dark15)",
  },
});
</script>

<style scoped></style>
