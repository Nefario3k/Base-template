<template>
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7.33331 14.666C6.78785 14.666 6.26677 14.4459 5.2246 14.0057C2.63041 12.9098 1.33331 12.3619 1.33331 11.4402C1.33331 11.1821 1.33331 6.70902 1.33331 4.66602M7.33331 14.666V7.56922M7.33331 14.666C7.74445 14.666 8.07998 14.5409 8.66665 14.2908M13.3333 4.66602V7.99935"
      class="stroke"
      :stroke="svgStroke"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M10.6667 10L12.6667 12M12.6667 12L14.6667 14M12.6667 12L10.6667 14M12.6667 12L14.6667 10"
      class="stroke"
      :stroke="svgStroke"
      stroke-linecap="round"
    />
    <path
      d="M4.88393 6.46157L2.93646 5.51922C1.86769 5.00205 1.33331 4.74347 1.33331 4.33398C1.33331 3.9245 1.86769 3.66592 2.93646 3.14875L4.88393 2.2064C6.08587 1.62479 6.68685 1.33398 7.33331 1.33398C7.97978 1.33398 8.58078 1.62478 9.78271 2.2064L11.7302 3.14875C12.7989 3.66592 13.3333 3.9245 13.3333 4.33398C13.3333 4.74347 12.7989 5.00205 11.7302 5.51922L9.78271 6.46157C8.58078 7.04318 7.97978 7.33398 7.33331 7.33398C6.68685 7.33398 6.08587 7.04318 4.88393 6.46157Z"
      class="stroke"
      :stroke="svgStroke"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M3.33331 8L4.66665 8.66667"
      class="stroke"
      :stroke="svgStroke"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M10.6667 2.66602L4 5.99935"
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
    default: "var(--border_color7)",
  },
});
</script>

<style scoped></style>
