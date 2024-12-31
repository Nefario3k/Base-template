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
      d="M14 4.66699V8.00033M2 4.66699C2 6.70999 2 11.1831 2 11.4412C2 12.3629 3.29709 12.9108 5.89129 14.0067C6.93347 14.4469 7.45453 14.667 8 14.667V7.57019"
      :stroke="svgStroke"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      class="stroke"
      d="M10 12.6667C10 12.6667 10.5833 12.6667 11.1667 14C11.1667 14 13.0196 10.6667 14.6667 10"
      :stroke="svgStroke"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      class="stroke"
      d="M5.55061 6.46059L3.60315 5.51824C2.53438 5.00107 2 4.74249 2 4.33301C2 3.92352 2.53438 3.66494 3.60315 3.14777L5.55061 2.20542C6.75253 1.62381 7.35353 1.33301 8 1.33301C8.64647 1.33301 9.24747 1.62381 10.4494 2.20542L12.3969 3.14777C13.4656 3.66494 14 3.92352 14 4.33301C14 4.74249 13.4656 5.00107 12.3969 5.51824L10.4494 6.46059C9.24747 7.04221 8.64647 7.33301 8 7.33301C7.35353 7.33301 6.75253 7.04221 5.55061 6.46059Z"
      :stroke="svgStroke"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      class="stroke"
      d="M4 8L5.33333 8.66667"
      :stroke="svgStroke"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      class="stroke"
      d="M11.3334 2.66699L4.66669 6.00033"
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
