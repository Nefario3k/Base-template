<template>
  <div class="closeBtnWrapper h-mc flex justify-end">
    <BaseButton
      type="button"
      @click="$emit('closeModal')"
      :class="buttonClass"
      class="p-0 card-closeBtn noScale"
      :ripple="ripple"
      :elevation="0"
      width="4rem"
      height="4rem"
      min-width="auto"
      :svg="true"
      svg-left="XMark"
      :svg-stroke="svgStroke"
      color="#00000000"
    />
  </div>
</template>

<script lang="ts" setup>
defineProps({
  buttonClass: {
    type: String,
    default: "",
  },
  svgStroke: {
    type: String,
    default: "var(--text_dark2)",
  },
  ripple: {
    type: Boolean,
    default: true,
  },
});
</script>

<style></style>
