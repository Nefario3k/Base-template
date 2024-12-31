<template>
  <VNavigationDrawer
    :elevation="0"
    v-model="drawer"
    location="right"
    temporary
    color="var(--text_light)"
    :width="688"
    :mobile="true"
    border="none"
    :order="-1"
    class="preventDefaultTransition"
  >
    <div style="grid-gap: 0" class="h-full overflow-hidden justify_auto">
      <!-- header -->
      <div
        :class="{ 'activeShadow top': activeShadow }"
        class="relative preventPreventDefaultTransition h-mc minh-mc p-[2.4rem] bg-main-23"
      >
        <div class="flex flex_between gap-5">
          header
          <ModalsCloseBtn @closeModal="drawer = false" />
        </div>
      </div>
      <!-- content -->
      <div
        @scroll="setOnScroll"
        ref="scrollRef"
        class="hidden__hover overflow-auto px-[2.4rem] py-[3.7rem]"
      >
        content
      </div>
      <!-- actions -->
      <div
        :class="{ activeShadow, bottomShadow }"
        class="preventPreventDefaultTransition h-mc minh-mc ] p-[2.4rem] relative"
      >
        actions
      </div>
    </div>
  </VNavigationDrawer>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted, getCurrentInstance } from "vue";
import useEventBus from "~/composables/useEventBus";
const { emit, on, off } = useEventBus();
const appResourceStore = useAppResourceStore();
const drawer = ref(false);
const activeShadow = ref(false);
const bottomShadow = ref(false);
const instance = getCurrentInstance();
const setOnScroll = () => {
  const ref = instance?.proxy?.$refs?.scrollRef as HTMLElement;
  if (ref) {
    const contentHeight = ref.scrollHeight;
    const contentWidth = ref.scrollWidth;
    const clientHeight = ref.clientHeight;
    const clientWidth = ref.clientWidth;
    if (ref.scrollTop) activeShadow.value = true;
    else activeShadow.value = false;
    if (contentHeight > clientHeight || contentWidth > clientWidth) {
      bottomShadow.value = true;
    } else bottomShadow.value = false;
  }
};

const navigatetoCompare = () => {
  appResourceStore.isCompare = true;
  drawer.value = false;
  navigateTo("/property/comparision");
};
onMounted(() => {
  on("openViewProductPanel", () => {
    drawer.value = true;
    setTimeout(() => {
      setOnScroll();
    }, 200);
  });
});
onUnmounted(() => {
  off("openViewProductPanel");
});
</script>

<style lang="scss" scoped>
.justify_auto > .relative {
  box-shadow: none;
  &::before,
  &::after {
    content: "";
    position: absolute;
    max-width: 50%;
    height: 1px;
    width: 0px;
    background: var(--border_color2);
    transition: all 0.4s ease-in-out !important;
  }
  &::before {
    left: 0;
  }
  &::after {
    right: 0;
  }
  &:first-child {
    &::before,
    &::after {
      bottom: 0px;
    }
  }
  &:last-child {
    &::before,
    &::after {
      top: 0px;
    }
  }
  &.activeShadow,
  &.bottomShadow {
    &::before,
    &::after {
      width: 100%;
    }
    box-shadow: 0px -2px 24px 8px rgba(142, 142, 142, 0.08);
  }
}
</style>
