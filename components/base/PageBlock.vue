<template>
  <!-- <div
    class="fixed text-center top-0 left-0 z-[99999999] bg-white flex_center flex-column h-dvh w-dvw gap-[20px]"
  >
    <div class="flex_center transInBasic"><span class="loader-card-loader"></span></div>
    <p class="transOutBasic" style="font-family: var(--theme-primary-font) !important">
      Please wait, We are preparing your card.
    </p>
  </div> -->
  <div class="overlay-rap flex flex-column">
    <div v-for="n in 10" :key="n + Math.random() + 12" class="overlay-bar"></div>
    <Transition name="fade-in">
      <div
        v-if="IsVissible"
        class="absolute w-full h-full top-0 left-0 flex_center kornerLoader"
      >
        <div class="flex_center absolute"><span class="loader-card-loader"></span></div>
        <img
          width="100"
          height="100"
          class="object-cover rounded-full absolute"
          src="/logo.png"
          alt=""
        />
        <p class="transOutBasic text-main absolute -mb-[250px] text-p">
          Now loading <span class="">The Korner.ng</span>
        </p>
      </div>
    </Transition>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
const IsVissible = ref(true);
onMounted(() => {
  if (process.client && process.browser) {
    IsVissible.value = false;
  }
});
</script>

<style scoped lang="scss">
.loader-card-loader {
  border: 5px solid var(--bg_color);
  border-radius: 50%;
  box-sizing: border-box;
  display: inline-block;
  height: 150px;
  width: 150px;
  animation: pulseCard 1s linear infinite;
  position: relative;

  &::after {
    animation: scaleUpCard 1s linear infinite;
    content: "";
    left: 50%;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    border: 5px solid var(--bg_color);
    border-radius: 50%;
    box-sizing: border-box;
    display: inline-block;
    height: 150px;
    width: 150px;
  }
}

@keyframes pulseCard {
  0%,
  60%,
  100% {
    transform: scale(1);
  }
  80% {
    transform: scale(1.2);
  }
}

@keyframes scaleUpCard {
  0% {
    transform: translate(-50%, -50%) scale(0);
  }
  60%,
  100% {
    transform: translate(-50%, -50%) scale(1);
  }
}

.overlay-rap {
  position: fixed;
  width: 100dvw;
  height: 100dvh;
  z-index: 99999;
  top: 0;

  .overlay-bar {
    width: 100%;
    background: var(--bg_color2);
    // background: #1a1a1a;
    height: 10vh;
  }
}
</style>
