<template>
  <VDialog
    scrim="var(--scrim)"
    transition="dialog-bottom-transition"
    :model-value="showModal"
    :persistent="loading"
    :max-width="maxWidth"
    content-class="generic__modal"
    @update:modelValue="closeModal"
  >
    <VCard class="generic__modal-card">
      <div class="card__wrapper content-area justify_auto ga-0">
        <ModalsCloseBtn @closeModal="closeModal" />
        <div class="card__content__area"></div>
      </div>
    </VCard>
  </VDialog>
</template>

<script lang="ts" setup>
import { onMounted, onUnmounted, ref } from "vue";
import useEventBus from "~/composables/useEventBus";
const { on, off } = useEventBus();
const maxWidth = ref(450);
const loading = ref(false);
const showModal = ref(false);

const openModal = () => {
  showModal.value = true;
};
const closeModal = () => {
  if (loading.value) return;
  showModal.value = false;
  setTimeout(() => {}, 200);
};

onMounted(() => {
  on("openBase", () => {
    openModal();
  });
});
onUnmounted(() => {
  off("openBase");
});
</script>

<style></style>
