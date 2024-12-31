<template>
  <div
    v-if="!isOnline"
    class="offlineNotificationBanner animate__animated animate__slideInDown"
  >
    offline
  </div>
</template>

<script lang="ts" setup>
const isOnline = true;
</script>

<style></style>
