<template>
  <button v-auto-animate class="flex items-center gap-3 cursor-pointer">
    <svg
      v-if="checkValue"
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M7.5 15C11.6421 15 15 11.6421 15 7.5C15 3.35786 11.6421 0 7.5 0C3.35786 0 0 3.35786 0 7.5C0 11.6421 3.35786 15 7.5 15ZM7.5 9.75C8.74264 9.75 9.75 8.74264 9.75 7.5C9.75 6.25736 8.74264 5.25 7.5 5.25C6.25736 5.25 5.25 6.25736 5.25 7.5C5.25 8.74264 6.25736 9.75 7.5 9.75Z"
        fill="#6D5BD0"
      />
    </svg>

    <svg
      v-else
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="7.5" cy="7.5" r="6.75" stroke="#8B83BA" stroke-width="1.5" />
    </svg>
    <span v-if="title" class="capitalize text-sm text-font-3 mb-0">{{ title }}</span>
  </button>
</template>

<script lang="ts" setup>
import { ref } from "vue";
defineProps({
  title: {
    type: String,
    default: "",
  },
  checkValue: {
    type: Boolean,
    default: false,
  },
});
const isCheck = ref(false);
</script>

<style></style>
