<template>
  <div class="loader-animation-container">
    <div
      ref="animationElement"
      class="animation"
      :style="`width: ${size}px !important;`"
    ></div>
  </div>
</template>

<script>
import lottie from 'lottie-web';

export default {
  props: {
    size: {
      type: Number,
      default: 100
    },
    color: {
      type: String,
      default: 'dark'
    },
  },

  mounted() {
    this.loadAnimation()
  },
  methods: {
    loadAnimation() {
      lottie.loadAnimation({
        container: this.$refs.animationElement,
        loop: true,
        autoplay: true,
        path: this.color == 'light' ? '/animations/beezlinq-loader-light.json' : '/animations/beezlinq-loader-dark.json',
      });
    },
  }
}
</script>


<style lang="scss" scoped>
.loader-animation-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  .animation {
    width: 100px;
  }
}
</style>
