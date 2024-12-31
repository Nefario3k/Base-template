<template>
  <VAppBar
    :height="64"
    scroll-behavior="elevate"
    class="appBarHeader"
    style="background-color: var(--text_light)"
  >
    <div class="appBarHeader h-full w-full">
      <div class="headerSection h-full w-full">
        <div class="main__container flex_between gap-3 h-full">
          <div class="flex items-center gap-5">
            <BaseButton
              v-if="isPanelPermanent"
              style="align-self: flex-end"
              class="pill"
              @click="$globalEmit('openSideBarPanel')"
              :elevation="0"
              width="36px"
              height="36px"
              :svg="true"
              min-height="auto"
              min-width="auto"
              svg-left="Hamburger"
              color="transparent"
            />
            <Transition name="slide-left">
              <BaseButton
                v-if="showBack"
                :to="showBack"
                color="#00000000"
                :ripple="false"
                :svg="true"
                svg-left="arrow/Left"
                text="Back"
                class="noBefore noScale px-0 py-0 transleftBasic"
                rounded="none"
                :text-style="{
                  fontFamily: `'Red Hat Display' !important`,
                  fontWeight: 600,
                  fontSize: 'var(--text_sm)',
                  color: 'var(--text_dark2)',
                }"
            /></Transition>
          </div>
          <div class="actionSection flex items-center max-w-max h-full gap-[16px]">
            <BaseButton
              color="#00000000"
              rounded="0"
              height="4.4rem"
              min-width="4.4rem"
              width="4.4rem"
              :ripple="true"
              :svg="true"
              svg-right="Bell"
              class="rounded px-0 noScale"
            >
              <div
                class="absolute top-[-2px] right-[2px] flex_center h-[0.8rem] w-[0.8rem] rounded-full block bg-font-danger shadow-lg"
              ></div>
            </BaseButton>
            <VMenu
              v-model="accountMenu"
              location="bottom center"
              :offset="accountOffSet"
              transition="slide-y-transition"
            >
              <template v-slot:activator="{ props }">
                <!-- Account -->
                <BaseButton
                  v-bind="props"
                  color="#00000000"
                  height="4.4rem"
                  max-width="22rem"
                  text-class="elipsis"
                  :ripple="false"
                  :svg="true"
                  svg-right="angle/Down"
                  class="noScale accountBtn noBefore px-0"
                  svg-fill="var(--border_color10)"
                  :text-style="{
                    color: 'var(--border_color10)',
                    fontFamily: 'Red Hat Display, sans-serif',
                  }"
                  @click="accountMenu = true"
                >
                  <div
                    style="
                      box-shadow: 0px 0px 0px 2px var(--text_light),
                        0px 0px 0px 4px var(--bg_color6);
                    "
                    class="rounded-full h-[3rem] w-[3rem] overflow-hidden"
                  >
                    <img
                      class="w-full h-full min-w-full aspect-auto rounded-full object-cover object-top"
                      src="/logo.png"
                      alt="image"
                    />
                  </div>
                </BaseButton>
              </template>
              <VList
                style="
                  padding-inline: 0 !important;
                  border: 1px solid var(--border_color5);
                  border-top: none;
                  border-top-left-radius: 0 !important;
                  border-top-right-radius: 0 !important;
                "
                class="dropDownList dropList dropDownList dropList flex flex-col gap-[1px]"
                min-width="240"
                max-width="240"
              >
                <VListItem
                  style="
                    border-radius: 0 !important;
                    border-bottom: 1px solid var(--border_color5);
                    padding-block: 0 12px !important;
                    height: 100% !important;
                  "
                  class="disabled"
                >
                  <div class="flex items-center gap-3">
                    <div
                      class="userAvatar w-[4rem] min-w-[4rem] h-[4rem] rounded-full relative"
                    >
                      <img
                        class="w-full h-full rounded-full object-top object-cover aspect-auto"
                        src="/logo.png"
                        alt="Kent Rentals"
                      />
                      <div
                        class="online bg-main-success rounded-full aspect-auto w-[1.4rem] h-[1.4rem] absolute bottom-0 right-0"
                      ></div>
                    </div>

                    <div>
                      <h5 class="elipsis text-font-3 text-lg font-medium">
                        Davies Okpeta
                      </h5>
                      <span class="text-main-4 text-sm elipsis font-normal"
                        >thenerfsenpai@gmail.com</span
                      >
                    </div>
                  </div>
                </VListItem>
                <VListItem :ripple="false" class="noBefore Btn mx-1 scaleDown">
                  <div class="flex items-center gap-2">
                    <SvgPerson
                      svg-stroke="var(--text_dark15)"
                      class="w-[1.6rem] min-w-[1.6rem] h-[1.6rem]"
                    />
                    <VListItemTitle>View profile</VListItemTitle>
                  </div>
                </VListItem>
                <VListItem :ripple="false" class="Btn mx-1 deleteItem scaleDown">
                  <div class="flex items-center gap-2">
                    <SvgLogout
                      svg-stroke="var(--text_dark15)"
                      class="w-[1.6rem] min-w-[1.6rem] h-[1.6rem]"
                    />
                    <VListItemTitle>Log out</VListItemTitle>
                  </div>
                </VListItem>
              </VList>
            </VMenu>
          </div>
        </div>
      </div>
    </div>
  </VAppBar>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
const { $deepClone, $getAppResource } = useNuxtApp();
const accountMenu = ref<boolean>(false);
const accountOffSet = ref<number>(10);
const showBack = computed(() => {
  const route = useRoute();
  let params = route.params;
  let matched = route.matched;
  let returnRoute: string = "";
  if (params && Object.keys(params).length && matched?.length) {
    returnRoute = matched[0].path;
  }
  return returnRoute;
});
const viewPort = computed(() => $getAppResource("viewportWidth"));
const isPanelPermanent = computed(() => viewPort.value && viewPort.value <= 1200);
</script>

<style lang="scss">
.appBarHeader.v-toolbar--density-default:not(:is(.v-toolbar--flat)) {
  box-shadow: 0px 2px 5px 0px #0000000d !important;
}
</style>
