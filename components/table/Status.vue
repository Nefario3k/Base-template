<template>
  <div
    :class="bgColor"
    class="flex_center gap-[5px] rounded-[44px] h-[1.9rem] px-[5px] w-full max-w-max"
  >
    <span
      :class="ballColor"
      class="ball w-[0.6rem] min-w-[0.6rem] h-[0.6rem] rounded-full"
    ></span>
    <span :class="textColor" class="text-xs font-medium capitalize">
      {{ text }}
    </span>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  text: {
    type: String,
    default: "",
    required: true,
  },
  textColor: {
    type: String,
    default: "text-dark-1",
  },
  bgColor: {
    type: String,
    default: "bg-main-primary",
  },
  ballColor: {
    type: String,
    default: "text-dark-1",
  },
});
</script>

<style></style>
