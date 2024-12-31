<template>
  <div>
    <LoadingBar />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <BasePageBlock />
    <StatusToast />
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import toast from "~/composables/toast";
import useEventBus from "~/composables/useEventBus";
const { $gsap: gsap } = useNuxtApp();
const appResourceStore = useAppResourceStore();
const { showSuccess, catchError, showInfo } = toast();
const { on } = useEventBus();
const viewportWidth = ref(0);

function updateViewportWidth() {
  if (process.client && process.browser) {
    const checkValue = 1306;
    viewportWidth.value = window.innerWidth;
    if (viewportWidth.value >= checkValue) {
      appResourceStore.centeredPadding =
        Math.round((viewportWidth.value - checkValue) / 2) + "px";
    } else appResourceStore.centeredPadding = null;
  }
}

onMounted(() => {
  on("success", ({ prop, header }: EventData): void => {
    showSuccess(prop, header);
  });
  on("error", ({ prop, header }: EventData): void => {
    catchError(prop, header);
  });
  on("info", ({ prop, header }: EventData): void => {
    showInfo(prop, header);
  });
  on("updateCenteredPadding", (): void => {
    updateViewportWidth();
  });
  if (process.client && process.browser) {
    viewportWidth.value = window.innerWidth;
    updateViewportWidth();
    window.addEventListener("resize", updateViewportWidth);
    const tl = gsap.timeline();

    tl.to(".overlay-bar", 0.9, {
      delay: 0.1,
      width: 0,
      stagger: {
        amount: 0.5,
      },
      ease: "power4.inOut",
    }).to(".overlay-rap", 1.2, {
      height: 0,
      opacity: 0,
      // transform: "scale(0)",
      display: "none",
    });
  }
});
onUnmounted(() => {
  if (process.client && process.browser) {
    window.removeEventListener("resize", updateViewportWidth);
  }
});
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 500ms;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  /* filter: blur(1rem); */
}
</style>
