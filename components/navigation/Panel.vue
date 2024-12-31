<template>
  <VNavigationDrawer
    :elevation="0"
    v-model="drawer"
    location="left"
    :mobile="true"
    :permanent="isPanelPermanent ? false : true"
    :mobile-breakpoint="959"
    color="var(--text_dark3)"
    :width="275"
    border="none"
    :rail="mini"
    rail-width="92"
    class="preventDefaultTransition"
  >
    <div style="grid-gap: 14px" class="h-full overflow-hidden justify_auto gap-0">
      <!-- icon -->
      <div class="h-mc minh-mc pt-6 px-4">
        <div v-if="!mini" class="flex_between gap-[10px]">
          <NuxtLink class="max-w-max block" to="/">
            <img
              class="min-w-max h-[4rem] object-contain"
              src="/logo.png"
              alt="Kent Rentals"
            />
          </NuxtLink>
          <BaseButton
            v-if="!isPanelPermanent"
            style="align-self: flex-end"
            class="pill"
            @click.stop="check"
            :elevation="0"
            width="36px"
            height="36px"
            :svg="true"
            min-height="auto"
            min-width="auto"
            svg-left="Switch"
            color="transparent"
          />
        </div>
        <div v-else class="flex_center transleftBasic">
          <BaseButton
            class="rounded"
            :elevation="3"
            style="padding: 0; overflow: hidden"
            @click.stop="check"
            width="4rem"
            height="4rem"
            :img="true"
            min-height="auto"
            min-width="auto"
            svg-left="/logo.png"
            color="transparent"
          />
        </div>
      </div>
      <!-- urls -->
      <div class="hidden__hover overflow-auto px-4 relative pt-5">
        <VList
          dense
          class="p-0 dropDownList panelList flex flex-col gap-[10px]"
          :class="{ miniVersion: mini }"
        >
          <template v-for="(nav, index) in navItems" :key="index + 221">
            <template v-if="nav.type == 'normal'">
              <VTooltip
                :disabled="!mini"
                offset="30"
                content-class="app__tooltip"
                :text="nav.title"
              >
                <template v-slot:activator="{ props }">
                  <VListItem v-bind="props" :to="nav.link" class="noBefore w-full">
                    <div class="flex items-center gap-3 w-full">
                      <div v-if="nav.svg" class="flex_center max-w-max min-w-max">
                        <Component
                          :is="nav.svg"
                          class="block w-[24px] min-w-[24px] h-[24px]"
                        />
                      </div>
                      <VListItemTitle v-if="!mini" class="elipsis">
                        {{ nav.title }}
                      </VListItemTitle>
                    </div>
                  </VListItem>
                </template>
              </VTooltip>
            </template>
            <template v-else>
              <VListItem
                :class="{
                  activeMenus: isOpenDropDown(index).val || isActiveRoute(nav.submenu),
                }"
                class="noBefore w-full"
                v-if="!mini"
                @click="toggleDropDown(index)"
              >
                <div class="flex_between w-full gap-3">
                  <div class="flex items-center gap-3 w-full">
                    <div v-if="nav.svg" class="flex_center max-w-max min-w-max">
                      <Component
                        :is="nav.svg"
                        class="block w-[24px] min-w-[24px] h-[24px]"
                      />
                    </div>
                    <VListItemTitle class="elipsis">
                      {{ nav.title }}
                    </VListItemTitle>
                  </div>
                  <div class="flex_center max-w-max min-w-max">
                    <SvgAngleDown
                      class="block w-[24px] min-w-[24px] h-[24px] overideTransition"
                      :class="{
                        'rotate-180': isOpenDropDown(index).val,
                      }"
                    />
                  </div>
                </div>
              </VListItem>
              <Transition name="slide-fade">
                <VItemGroup
                  v-if="isOpenDropDown(index).val"
                  class="subMenuItemGroup flex flex-col gap-[10px]"
                >
                  <template
                    v-for="(subnav, subindex) in nav.submenu"
                    :key="`submenu-item${subindex}`"
                  >
                    <VTooltip
                      :disabled="!mini"
                      offset="30"
                      content-class="app__tooltip"
                      :text="subnav.title"
                    >
                      <template v-slot:activator="{ props }">
                        <VListItem
                          v-bind="props"
                          :to="subnav.link"
                          class="noBefore w-full smallVersion"
                        >
                          <div class="flex items-center gap-3 w-full">
                            <div
                              v-if="subnav.svg"
                              class="flex_center max-w-max min-w-max"
                            >
                              <Component
                                :is="subnav.svg"
                                class="block w-[20px] min-w-[20px] h-[20px]"
                              />
                            </div>
                            <VListItemTitle v-if="!mini" class="elipsis">
                              {{ subnav.title }}
                            </VListItemTitle>
                          </div>
                        </VListItem>
                      </template>
                    </VTooltip>
                  </template>
                </VItemGroup>
              </Transition>
            </template>
          </template>
        </VList>
      </div>
      <!-- actions -->
      <div class="h-mc minh-mc p-4 relative border-t-[1px] border-main">
        <VList
          dense
          class="p-0 dropDownList panelList flex flex-col gap-[10px]"
          :class="{ miniVersion: mini }"
        >
          <VTooltip
            :disabled="!mini"
            offset="30"
            content-class="app__tooltip action"
            text="Contact Landlord"
          >
            <template v-slot:activator="{ props }">
              <VListItem
                v-bind="props"
                class="noBefore w-full action"
                @click="$globalEmit('openSupportModal')"
              >
                <div class="flex items-center gap-3 w-full">
                  <div class="flex_center max-w-max min-w-max">
                    <SvgInfo class="block w-[24px] min-w-[24px] h-[24px]" />
                  </div>
                  <VListItemTitle v-if="!mini" class="elipsis">
                    Contact Landlord
                  </VListItemTitle>
                </div>
              </VListItem>
            </template>
          </VTooltip>
          <VTooltip
            :disabled="!mini"
            offset="30"
            content-class="app__tooltip action danger"
            text="Logout"
          >
            <template v-slot:activator="{ props }">
              <VListItem v-bind="props" class="noBefore w-full action danger">
                <div class="flex items-center gap-3 w-full">
                  <div class="flex_center max-w-max min-w-max">
                    <SvgLogout class="block w-[24px] min-w-[24px] h-[24px]" />
                  </div>
                  <VListItemTitle v-if="!mini" class="elipsis"> Logout </VListItemTitle>
                </div>
              </VListItem>
            </template>
          </VTooltip>
        </VList>
      </div>
    </div>
  </VNavigationDrawer>
</template>

<script lang="ts" setup>
import { ref, computed, onBeforeMount, watch, onUnmounted, resolveComponent } from "vue";
import useEventBus from "~/composables/useEventBus";
const { $commitToLocalStorage, $removeLocalStorage, $getAppResource } = useNuxtApp();
const { on, off } = useEventBus();
const drawer = ref(true);
const mini = ref(false);
const openDropdowns = ref<Array<Number>>([]);

const navItems = computed<Array<NavItems>>(() => {
  return [];
  return [
    {
      title: "Dashboard",
      link: "/",
      type: "normal",
      svg: resolveComponent("SvgPanelDashboard"),
    },
    {
      title: "Profile",
      link: "/profile",
      type: "normal",
      svg: resolveComponent("SvgPanelSuppliers"),
    },
    {
      title: "Property Management",
      type: "dropdown",
      svg: resolveComponent("SvgPanelOrder"),
      submenu: [
        {
          title: "All Properties",
          link: "/property/view",
          svg: resolveComponent("SvgPanelOrder"),
        },
        {
          title: "My Properties",
          link: "/property/owned",
          svg: resolveComponent("SvgBoxCheck"),
        },
        {
          title: "Compare Properties",
          link: "/property/comparision",
          svg: resolveComponent("SvgBoxInto"),
        },
      ],
    },
  ];
});

function check() {
  mini.value = !mini.value;

  if (mini.value) {
    $commitToLocalStorage("adminPanel", "adminPanel");
  } else {
    $removeLocalStorage("adminPanel");
  }
}
const toggleDropDown = (index: number) => {
  if (isOpenDropDown(index).val) {
    openDropdowns.value = openDropdowns.value.filter((el: Number) => {
      return el !== index;
    });
  } else {
    openDropdowns.value.push(index);
  }
  return openDropdowns.value[index];
};
const isOpenDropDown = (index: number) => {
  return { val: openDropdowns.value.includes(index) };
};
const isActiveRoute = (item: any) => {
  const route = useRoute();
  const itemLinks = item.map((el: any) => {
    return el.link;
  });
  let val = false;
  itemLinks.forEach((el: any) => {
    if (route.path === el) val = true;
  });
  return val;
};
const viewPort = computed(() => $getAppResource("viewportWidth"));
const isPanelPermanent = computed(() => viewPort.value && viewPort.value <= 1200);
const setViewBasedOnViewPort = () => {
  if (isPanelPermanent.value && mini.value) {
    check();
  }
};
onBeforeMount(() => {
  const adminPanel = window.localStorage.getItem("adminPanel");
  if (adminPanel) {
    mini.value = true;
  }
  if (isPanelPermanent.value) {
    drawer.value = false;
  }
  setViewBasedOnViewPort();
  on("openSideBarPanel", () => (drawer.value = true));
});

onUnmounted(() => {
  off("openSideBarPanel");
}),
  watch(mini, (newVal: Boolean) => {
    if (newVal) {
      openDropdowns.value = [];
      navItems.value.forEach((element: NavItems, index: Number) => {
        openDropdowns.value.push(index);
      });
    }
  });
watch(viewPort, (newVal: Number) => {
  setViewBasedOnViewPort();
});
</script>

<style></style>
