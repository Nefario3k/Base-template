<template>
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12.9382 13.3143H15.6376C16.7036 13.2963 18.3321 13.8573 18.3321 15.8808C18.3321 17.9804 16.3225 18.3324 15.6376 18.3324C14.9527 18.3324 8.48463 18.3324 6.6202 18.3324C4.53188 18.3324 1.66662 17.9094 1.66663 14.3067V6.66895H18.3321V10.4331M12.9382 13.3143C12.9427 13.136 13.0185 12.9593 13.1659 12.8308L14.584 11.6473M12.9382 13.3143C12.9335 13.5044 13.01 13.6963 13.1677 13.8329L14.584 14.9859"
      class="stroke"
      :stroke="svgStroke"
      stroke-width="1.25"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M1.66992 6.65962L2.43786 4.74219C3.06101 3.25204 3.37259 2.50698 4.00413 2.08748C4.63568 1.66797 5.44578 1.66797 7.06597 1.66797H12.9154C14.5356 1.66797 15.3457 1.66797 15.9772 2.08748C16.6088 2.50698 16.9203 3.25204 17.5435 4.74219L18.3317 6.66259"
      class="stroke"
      :stroke="svgStroke"
      stroke-width="1.25"
      stroke-linecap="round"
    />
    <path
      d="M9.96912 6.66797V1.66797"
      class="stroke"
      :stroke="svgStroke"
      stroke-width="1.25"
      stroke-linecap="round"
    />
    <path
      d="M8.30237 10.001H11.6357"
      class="stroke"
      :stroke="svgStroke"
      stroke-width="1.25"
      stroke-linecap="round"
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
