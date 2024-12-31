<template>
  <VBtn
    :to="to"
    :variant="variant"
    :href="href"
    :target="target"
    :border="border"
    :type="type"
    :disabled="disabled"
    :elevation="elevation"
    class="Btn"
    :height="height"
    :width="width"
    :min-height="minHeight"
    :min-width="minWidth"
    :max-width="maxWidth"
    :color="color"
    :ripple="ripple"
    :rounded="rounded"
  >
    <template v-if="!loading">
      <!-- svg left  -->
      <template v-if="svg && !img && svgLeft && svgLeftModules">
        <div class="flex_center h-full">
          <Component
            :class="svgClass"
            :is="svgLeftModules"
            :svg-fill="svgFill"
            :svg-stroke="svgStroke"
            :size="svgSize"
          />
        </div>
      </template>
      <!-- icon left  -->
      <template v-if="svgIcon && !svg && svgLeft">
        <div class="flex_center h-full">
          <i :class="`fa-solid fa-${svgLeft}`"></i>
        </div>
      </template>
      <!-- img left  -->
      <template v-if="img && svgLeft">
        <img :class="imgClass" :src="svgLeft" alt="image" />
      </template>
      <slot />
      <span v-if="text" :style="textStyle" :class="textClass" v-html="text"></span>
      <!-- svg right  -->
      <template v-if="svg && svgRight && svgRightModules">
        <div class="flex_center h-full">
          <Component
            :class="svgClass"
            :is="svgRightModules"
            :svg-fill="svgFill"
            :svg-stroke="svgStroke"
            :size="svgSize"
          />
        </div>
      </template>
      <!-- icon right  -->
      <template v-if="svgIcon && !svg && svgRight">
        <div class="flex_center h-full">
          <i :class="`fa-solid fa-${svgRight}`"></i>
        </div>
      </template>
      <!-- img right  -->
      <template v-if="!svgIcon && !svg && img && svgRight">
        <img :src="svgRight" alt="image" />
      </template>
    </template>
    <BaseSpinner :color="loadingColor" v-else />
  </VBtn>
</template>

<script setup lang="ts">
const props = defineProps({
  color: {
    type: String,
  },
  imgClass: {
    type: String,
    default: "",
  },
  text: {
    type: null,
    default: "",
  },
  textClass: {
    type: String,
    default: "",
  },
  svgClass: {
    type: String,
  },
  textStyle: {
    type: Object,
    default: () => {
      return {};
    },
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  ripple: {
    type: Boolean,
    default: true,
  },
  type: {
    type: String,
    default: "button",
  },
  height: {
    type: String || Number,
  },
  width: {
    type: String || Number,
    default: "",
  },
  minHeight: {
    type: String || Number,
  },
  minWidth: {
    type: String || Number,
  },
  maxWidth: {
    type: String || Number,
    default: "100%",
  },
  loading: {
    type: Boolean,
    default: false,
  },
  loadingColor: {
    type: String,
    default: "var(--primary_color)",
  },
  svg: {
    type: Boolean,
    default: false,
  },
  svgFill: {
    type: null,
  },
  svgStroke: {
    type: null,
  },
  svgIcon: {
    type: Boolean,
    default: false,
  },
  img: {
    type: Boolean,
    default: false,
  },
  svgLeft: {
    type: String,
    default: "",
  },
  svgRight: {
    type: String,
    default: "",
  },
  elevation: {
    type: Number || String,
    default: 0,
  },
  svgSize: {
    type: Number,
    default: 14,
  },
  to: {
    type: String || null,
    default: null,
  },
  href: {
    type: String || null,
    default: null,
  },
  target: {
    type: String || null,
    default: null,
  },
  border: {
    type: Boolean || null,
    default: null,
  },
  variant: {
    type: null,
    default: "elevated",
  },
  rounded: {
    type: String || null,
    default: null,
  },
});

const svgLeftModules = shallowRef(null);
const svgRightModules = shallowRef(null);
const getComponent = (string: any) => {
  switch (string.toLowerCase()) {
    case "hamburger":
      return resolveComponent("SvgHamburger");
    case "bin":
      return resolveComponent("SvgBin");
    case "filter/cog":
      return resolveComponent("SvgFilterCog");
    case "pencil":
      return resolveComponent("SvgPencil");
    case "dots":
      return resolveComponent("SvgDots");
    case "bell":
      return resolveComponent("SvgBell");
    case "switch":
      return resolveComponent("SvgSwitch");
    case "plus":
      return resolveComponent("SvgPlus");
    case "xmark":
      return resolveComponent("SvgXMark");
    case "arrow/left":
      return resolveComponent("SvgArrowLeft");
    case "arrow/right":
      return resolveComponent("SvgArrowRight");
    case "angle/down":
      return resolveComponent("SvgAngleDown");
    case "angle/left":
      return resolveComponent("SvgAngleLeft");
    case "angle/right":
      return resolveComponent("SvgAngleRight");

    default:
      console.log(string.toLowerCase());
      return null;
  }
};

function resolveSvgComponents() {
  if (props.svg) {
    if (props.svgLeft && !props.img) svgLeftModules.value = getComponent(props.svgLeft);
    if (props.svgRight) svgRightModules.value = getComponent(props.svgRight);
  }
}

const resolveSvgModules = async () => {
  svgLeftModules.value = null;
  svgRightModules.value = null;
  try {
    if (props.svg && !props.img && props.svgLeft) {
      let comp;
      if (props.svgLeft.includes("/")) {
        const [one, two] = props.svgLeft.split("/");
        comp = await defineAsyncComponent(
          () => import(`~/components/svg/${one}/${two}.vue`)
        );
      } else {
        comp = await defineAsyncComponent(
          () => import(`~/components/svg/${props.svgLeft}.vue`)
        );
      }
      svgLeftModules.value = comp;
    }
    if (props.svg && props.svgRight) {
      let comp;
      if (props.svgRight.includes("/")) {
        const [one, two] = props.svgRight.split("/");
        comp = await defineAsyncComponent(
          () => import(`~/components/svg/${one}/${two}.vue`)
        );
      } else {
        comp = await defineAsyncComponent(
          () => import(`~/components/svg/${props.svgRight}.vue`)
        );
      }
      svgRightModules.value = comp;
    }
  } catch (error) {}
};
watch(
  () => props.svgLeft,
  () => {
    resolveSvgComponents();
  }
);
watch(
  () => props.svgRight,
  () => {
    resolveSvgComponents();
  }
);
resolveSvgComponents();
onMounted(() => {
  resolveSvgComponents();
});
</script>
