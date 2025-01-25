<template>
  <svg
    width="18"
    height="18"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_134_771)">
      <path class="fill" d="M12 12L20 4V0H0V4L8 12V20L12 16V12Z" :fill="svgFIll" />
    </g>
    <defs>
      <clipPath id="clip0_134_771">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
</template>

<script>
export default {
  name: "Filter",
  props: {
    svgFIll: {
      type: String,
      default: "var(--bg_color2)",
    },
  },
};
</script>

<style lang="scss" scoped></style>
