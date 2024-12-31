<template>
  <TransitionGroup name="slide-status">
    <template v-for="(item, id) in statusArr" :key="item.id + 213 + id">
      <template v-if="item.show">
        <div
          ref="statusmessage"
          :style="{
            background: item.color,
            zIndex: item.index,
            borderColor: item.borderColor,
            position: item.fixed ? 'fixed' : 'static',
            bottom: item.bottom + 'px',
            right: item.right + 'px',
            transform: `scale(${item.scale})`,
            height: item.height,
          }"
          :class="`statusWrapper preventDefaultTransition${
            item.border ? ' borderstyled' : ''
          }${item.isActive ? ' isActive' : ''}`"
          @mousemove="onMouseEnter"
          @mouseenter="onMouseEnter"
          @mouseleave="onMouseLeave"
        >
          <!-- icon  -->
          <div class="iconCenter" v-if="item.svg">
            <template v-if="item.svgType == 'danger'">
              <lord-icon
                src="https://cdn.lordicon.com/wtnrotmp.json"
                trigger="loop"
                delay="500"
                stroke="bold"
                state="in-reveal"
                colors="primary:#fff,secondary:#fff"
                style="width: 100%; height: 100%"
              >
              </lord-icon>
              <!-- <svg
                width="24"
                height="24"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0 19.9074C0 8.91285 8.91285 0 19.9074 0C30.902 0 39.8148 8.91285 39.8148 19.9074C39.8148 30.902 30.902 39.8148 19.9074 39.8148C8.91285 39.8148 0 30.902 0 19.9074Z"
                  :fill="item.svgColor"
                />
                <path
                  stroke-width="2.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M20.364 17.95L25.314 13L26.728 14.414L21.778 19.364L26.728 24.314L25.314 25.728L20.364 20.778L15.414 25.728L14 24.314L18.95 19.364L14 14.414L15.414 13L20.364 17.95Z"
                  :fill="item.svgStroke"
                />
              </svg> -->
            </template>
            <template v-else-if="item.svgType == 'info'">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M12 17V11"
                  :stroke="item.svgColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
                <circle
                  cx="1"
                  cy="1"
                  r="1"
                  transform="matrix(1 0 0 -1 11 9)"
                  :fill="item.svgColor"
                />
                <path
                  d="M7 3.33782C8.47087 2.48697 10.1786 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 10.1786 2.48697 8.47087 3.33782 7"
                  :stroke="item.svgColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
              </svg>
            </template>
            <template v-else>
              <svg
                width="38"
                height="38"
                viewBox="0 0 38 38"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g opacity="0.3">
                  <path
                    d="M19 32C11.8203 32 6 26.1797 6 19C6 11.8203 11.8203 6 19 6C26.1797 6 32 11.8203 32 19C32 26.1797 26.1797 32 19 32Z"
                    :stroke="item.svgStroke"
                    stroke-width="2"
                  />
                </g>
                <g opacity="0.1">
                  <path
                    d="M19 37C9.05888 37 1 28.9411 1 19C1 9.05888 9.05888 1 19 1C28.9411 1 37 9.05888 37 19C37 28.9411 28.9411 37 19 37Z"
                    :stroke="item.svgStroke"
                    stroke-width="2"
                  />
                </g>
                <g clip-path="url(#clip0_3212_35448)">
                  <path
                    d="M15.2501 19.0013L17.7501 21.5013L22.7501 16.5013M27.3334 19.0013C27.3334 23.6037 23.6025 27.3346 19.0001 27.3346C14.3977 27.3346 10.6667 23.6037 10.6667 19.0013C10.6667 14.3989 14.3977 10.668 19.0001 10.668C23.6025 10.668 27.3334 14.3989 27.3334 19.0013Z"
                    :stroke="item.svgStroke"
                    stroke-width="1.66667"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_3212_35448">
                    <rect
                      width="20"
                      height="20"
                      fill="white"
                      transform="translate(9 9)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </template>
          </div>
          <!-- text  -->
          <div class="status__text">
            <p
              v-if="item.header"
              v-html="item.header"
              :style="`color: ${item.headerColor}`"
            ></p>
            <span
              v-if="item.subtext"
              v-html="item.subtext"
              :style="`color: ${item.subtextColor}`"
            ></span>
          </div>
          <!-- close button  -->
          <button
            @click="deleteToastByUniqueID(item.id, true)"
            title="Close Toast"
            :class="`closeBtn ${item.svgType}`"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.4 19L5 17.6L10.6 12L5 6.4L6.4 5L12 10.6L17.6 5L19 6.4L13.4 12L19 17.6L17.6 19L12 13.4L6.4 19Z"
                fill="#A48C9F"
              />
            </svg>
          </button>
        </div>
      </template>
    </template>
  </TransitionGroup>
</template>

<script setup lang="ts">
import useEventBus from "~/composables/useEventBus";
import { ref, getCurrentInstance, onMounted } from "vue";
const { on } = useEventBus();
const { $logOutUser } = useNuxtApp();
const instance = getCurrentInstance();
const defaultBottom = ref<number>(44);
const defaultHeights = ref<Array<number>>([]);
const isActive = ref<boolean>(false);

// data
const statusArr = ref<Array<StatusToast>>([]);
const getStatusById = (id: number) => {
  return statusArr.value.findIndex((obj: any) => obj.id === id);
};
// methods
const startTimeout = (duration: number, id: number) => {
  const index = getStatusById(id);
  if (index !== -1) {
    clearTimeout(statusArr.value[index].timeoutId);
    statusArr.value[index].timeoutId = null;
    statusArr.value[index].timeoutId = setTimeout(() => {
      deleteToastByUniqueID(id);
    }, duration);
  }
};
const onMouseEnter = () => {
  isActive.value = true;
  recalculateStatusStylingOnHover();
  statusArr.value.forEach((element: any, index: number) => {
    clearTimeout(statusArr.value[index].timeoutId);
    statusArr.value[index].timeoutId = null;
  });
};
const onMouseLeave = () => {
  isActive.value = false;
  setTimeout(() => {
    if (!isActive.value) {
      recalculateStatusStyling();
      statusArr.value.forEach((element: any, index: number) => {
        clearTimeout(statusArr.value[index].timeoutId);
        statusArr.value[index].timeoutId = null;
        startTimeout(700 * (index + 1), element.id);
      });
    }
  }, 300);
};
const deleteToastByUniqueID = (id: number, resetAll: boolean = false) => {
  const index = getStatusById(id);
  if (index !== -1) {
    statusArr.value[index].show = false;
    clearTimeout(statusArr.value[index].timeoutId);
    statusArr.value[index].timeoutId = null;
    defaultHeights.value.splice(index, 1);
    statusArr.value.splice(index, 1);
    setTimeout(() => {
      if (statusArr.value.length) {
        recalculateStatusStyling();
        if (resetAll) {
          statusArr.value.forEach((element: any) => {
            startTimeout(1000, element.id);
          });
        }
      }
    }, 200);
  }
};
const setDefaultHeights = () => {
  if (instance?.proxy?.$refs?.statusmessage) {
    const lastIndex: number = instance.proxy.$refs.statusmessage?.length - 1;
    const lastHeight: number = instance.proxy.$refs.statusmessage[lastIndex].offsetHeight;
    defaultHeights.value[lastIndex] = lastHeight;
  }
};
const recalculateStatusStyling = () => {
  if (instance?.proxy?.$refs?.statusmessage) {
    const totalLength: number = instance.proxy.$refs.statusmessage?.length;
    if (totalLength) {
      const lastIndex: number = totalLength - 1;
      const lastHeight: number =
        instance.proxy.$refs.statusmessage[lastIndex].offsetHeight;
      statusArr.value.forEach((element: any, index: number) => {
        statusArr.value[index].isActive = false;
        if (index !== lastIndex) {
          statusArr.value[index].height = lastHeight + "px";
          statusArr.value[index].bottom =
            defaultBottom.value + Math.floor(16 * (lastIndex - index));
          statusArr.value[index].scale =
            !index && totalLength !== 3 ? 0.95 : !index && totalLength === 3 ? 0.9 : 0.95;
        } else {
          statusArr.value[index].height = "auto";
          statusArr.value[index].bottom = defaultBottom.value;
          statusArr.value[index].scale = 1;
        }
      });
    }
  }
};
const recalculateStatusStylingOnHover = () => {
  if (instance?.proxy?.$refs?.statusmessage) {
    const totalLength: number = instance.proxy.$refs.statusmessage?.length;
    if (totalLength) {
      const lastIndex: number = totalLength - 1;
      // reset the height
      statusArr.value.forEach((element: any, index: number) => {
        setTimeout(() => {
          if (statusArr.value[index]) statusArr.value[index].height = "auto";
        }, 200);
      });
      // get the true height
      const heightsArray: Array<number> = defaultHeights.value;
      // instance.proxy.$refs.statusmessage.map((element: HTMLElement) => {
      //   return element.offsetHeight;
      // });
      statusArr.value.forEach((element: any, index: number) => {
        statusArr.value[index].isActive = true;

        if (index !== lastIndex) {
          const newBottom: number =
            defaultBottom.value +
            heightsArray
              .slice(index + 1, totalLength)
              .reduce((sum, num) => sum + num, 0) +
            Math.floor(12 * (totalLength - 1 - index));
          statusArr.value[index].bottom = newBottom;
          statusArr.value[index].scale = 1;
        } else {
          statusArr.value[index].bottom = defaultBottom.value;
          statusArr.value[index].scale = 1;
        }
      });
    }
  }
};
const showStyles = (id: number) => {
  let show = false;
  if (statusArr.value) {
    const arr = statusArr.value.filter((element: any) => {
      return element.show;
    });
    if (arr.length) show = true;
  }
  return { show };
};
const addMessages = (item: any) => {
  statusArr.value.push(item);
  setTimeout(() => {
    setDefaultHeights();
    recalculateStatusStyling();
    startTimeout(item.duration, item.id);
  }, 200);
};
onMounted(() => {
  on("show-toast", async (content: StatusToast) => {
    const item: StatusToast = {
      id: Math.random(),
      duration: 4500,
      height: "auto",
      isActive: false,
      show: true,
      timeoutId: null,
      absolute: false,
      svg: true,
      border: false,
      fixed: true,
      right: 12,
      scale: 1,
      opacity: 1,
      bottom: defaultBottom.value,
      index: 9999999999,
      color: "",
      header: "",
      headerColor: "var(--text-light)",
      subtext: "",
      borderColor: "",
      subtextColor: "var(--text-light)",
      svgStroke: "",
      svgColor: "#fff",
      svgType: "check",
    };
    Object.entries(content).forEach(([key, value]) => {
      if (key in item) item[key] = value;
    });
    if (statusArr.value.length === 3) {
      // do some outro stlying
      statusArr.value[0].scale = 0.3;
      statusArr.value[0].opacity = 0;
      // removes the first height element as oposed to using shift()
      setTimeout(() => {
        deleteToastByUniqueID(statusArr.value[0].id);
        addMessages(item);
      }, 200);
    } else {
      addMessages(item);
    }
    if (item.subtext === "Unauthenticated.") {
      return $logOutUser();
    }
  });
});
</script>

<style lang="scss">
body,
.v-application.v-theme--light {
  .statusContainer {
    transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }

  .slide-status-enter-active {
    // transition: all 0.25s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }

  .slide-status-leave-active {
    transition: all 0.25s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }
  .slide-status-enter-from,
  .slide-status-leave-to {
    transform: translateY(600px) !important;
  }

  @keyframes slideStatus {
    from {
      transform: translateY(600px);
    }
    to {
      transform: translateY(0);
    }
  }

  // toast styles
  .statusWrapper {
    display: flex;
    align-items: flex-start;
    grid-gap: 8px;
    width: 100%;
    max-width: 355px !important;
    min-height: 64px;
    padding: 8px 22px 8px 16px;
    border-radius: 16px;
    max-height: 100%;
    transition: overflow 0s, all 500ms ease-in-out;
    overflow: hidden;
    font-size: 62.5%;
    animation: slideStatus 0.5s cubic-bezier(0.25, 0.8, 0.5, 1);
    border: 2px solid transparent;
    box-shadow: 0px 12px 16px -4px rgba(16, 24, 40, 0.08),
      0px 4px 6px -2px rgba(16, 24, 40, 0.03);
    * {
      font-size: 16px;
    }
    &.isActive:not(:last-child) {
      overflow: visible;
      &::after {
        content: "";
        position: absolute;
        bottom: -14px;
        z-index: inherit;
        height: 13px;
        width: 100%;
        // background: #000;
        left: 0;
      }
    }

    &.borderstyled {
      border-bottom-width: 3px;
      border-bottom-style: inset;
    }

    & > * {
      flex: auto;
    }

    .status__text {
      display: flex;
      flex-direction: column;
      grid-gap: 1px;
      height: auto;
      max-width: 370px;
      overflow: hidden;
      max-height: inherit;

      p {
        font-weight: 600;
        font-size: var(--text_sm);
        margin-bottom: 0;
        text-transform: capitalize;
      }

      span,
      strong {
        display: block;
        font-size: var(--text_xs);

        &::first-letter {
          text-transform: capitalize;
        }
      }
    }

    .iconCenter {
      min-width: 32px;
      width: 32px;
      height: 32px;
      flex: none;
      svg {
        width: 100%;
        height: 100%;
      }
    }

    .closeBtn {
      padding: 0 !important;
      margin: 0 !important;
      box-shadow: none !important;
      border-radius: 0 !important;
      box-sizing: border-box;
      display: block;
      min-width: 16px;
      width: 16px;
      height: 16px;
      flex: none;
      svg {
        width: 100%;
        height: 100%;
      }

      &:hover {
        svg path {
          fill: var(--danger_color);
        }
      }

      &.danger {
        svg path {
          fill: #fff !important;
        }
      }

      &.info {
        background-color: transparent !important;

        svg path {
          fill: var(--danger_color) !important;
        }
      }
    }

    * {
      word-wrap: break-word;
      word-break: break-word;
    }
  }
}
</style>
