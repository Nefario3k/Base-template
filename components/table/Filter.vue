<template>
  <section class="app-filter py-[15px] px-5 flex_between gap-3 flex-wrap">
    <div class="flex items-center gap-5 w-full max-w-[50rem]">
      <VMenu
        location="bottom"
        width="100%"
        :max-width="224"
        :offset="5"
        :close-on-content-click="false"
        v-model="filterDropDown"
        transition="slide-y-transition"
      >
        <template v-slot:activator="{ props }">
          <BaseButton
            v-auto-animate
            v-bind="props"
            :svg="true"
            svg-left="Filter"
            text="Filter"
            width="100%"
            min-width="max-content"
            max-width="max-content"
            height="4rem"
            class="hover_filter noBefore relative"
            :class="{ active: filterDropDown || sortStatusBy || orderBy }"
            :ripple="false"
            color="var(--border_color)"
            variant="outlined"
            :text-style="{ color: 'var(--text_dark)' }"
          >
            <div
              v-if="sortStatusBy || orderBy"
              class="bg-main-primary w-[1.2rem] h-[1.2rem] min-w-[1.2rem] rounded-full absolute -top-2 -right-2"
            ></div>
          </BaseButton>
        </template>
        <VList
          style="padding: 20px !important"
          class="dropDownList"
          :elevation="1"
          width="100%"
        >
          <p class="text-dark-2 text-xs px-[10px] mb-1">Sort by:</p>
          <VListItem
            v-for="items in sortList"
            :key="items.tile + items.title"
            @click="componentEmit('setFilter', { type: 'orderBy', val: items.val })"
            style="margin-bottom: 0 !important"
            class="noBefore text-left"
          >
            <div class="flex_between">
              <VListItemTitle class=""> {{ items.title }} </VListItemTitle>
              <BaseRadio :check-value="items.val === orderBy" />
            </div>
          </VListItem>
          <VListItem
            style="
              margin-block: 15px 10px !important;
              background: var(--bg_color) !important;
              height: 1px !important;
              min-height: 1px !important;
            "
            class="noBefore text-left"
          >
          </VListItem>
          <p class="text-dark-2 text-xs px-[10px] mb-1">Users:</p>
          <VListItem
            v-for="items in statusSortList"
            :key="items.tile + items.title"
            @click="componentEmit('setFilter', { type: 'sortStatusBy', val: items.val })"
            style="margin-bottom: 0 !important"
            class="noBefore text-left"
          >
            <div class="flex_between">
              <VListItemTitle class=""> {{ items.title }} </VListItemTitle>
              <BaseRadio :check-value="items.val === sortStatusBy" />
            </div>
          </VListItem>
        </VList>
      </VMenu>
      <div v-auto-animate class="form w-full relative flex_center">
        <label :for="searchId" class="absolute flex_center m-0 left-[10px]">
          <svg
            width="18"
            height="18"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.4097 14.8822C11.7399 16.1799 9.63851 16.7922 7.53338 16.5942C5.42824 16.3963 3.47766 15.403 2.07881 13.8166C0.679961 12.2303 -0.0619809 10.1701 0.00405863 8.05565C0.0700982 5.94118 0.939153 3.9314 2.43427 2.43552C3.92939 0.939633 5.93814 0.0701341 8.05152 0.00406071C10.1649 -0.0620127 12.224 0.680308 13.8096 2.07987C15.3951 3.47944 16.3879 5.43102 16.5857 7.53723C16.7836 9.64345 16.1717 11.7459 14.8745 13.4166L19.6936 18.2201C20.1016 18.6267 20.1022 19.2872 19.695 19.6946C19.2878 20.1021 18.6273 20.1017 18.2204 19.6939L13.4201 14.8822H13.4097ZM8.31916 14.5495C9.13773 14.5495 9.94829 14.3882 10.7045 14.0748C11.4608 13.7614 12.148 13.302 12.7268 12.7229C13.3056 12.1438 13.7647 11.4563 14.078 10.6996C14.3913 9.94298 14.5525 9.13201 14.5525 8.31302C14.5525 7.49403 14.3913 6.68306 14.078 5.92641C13.7647 5.16976 13.3056 4.48225 12.7268 3.90314C12.148 3.32402 11.4608 2.86465 10.7045 2.55123C9.94829 2.23782 9.13773 2.07651 8.31916 2.07651C6.66598 2.07651 5.08051 2.73356 3.91153 3.90314C2.74256 5.07271 2.08583 6.659 2.08583 8.31302C2.08583 9.96705 2.74256 11.5533 3.91153 12.7229C5.08051 13.8925 6.66598 14.5495 8.31916 14.5495Z"
              fill="#8B83BA"
            />
          </svg>
        </label>

        <input
          :id="searchId"
          type="text"
          class="w-full"
          style="padding-left: 40px"
          required
          placeholder="Search Users by Name, Email or Date"
          v-model="searchInput"
          :class="{ active: searchInput }"
          @input="componentEmit('updateInput', searchInput)"
        />
        <div
          v-if="searchInput"
          class="bg-main-primary w-[1.2rem] h-[1.2rem] min-w-[1.2rem] rounded-full absolute -top-1 -right-1"
        ></div>
      </div>
    </div>
    <BaseButton
      :disabled="!isNotPaid.length"
      text="PAY DUES"
      width="100%"
      min-width="max-content"
      max-width="max-content"
      height="4rem"
      class="ml-auto"
      color="var(--primary_color)"
      :text-style="{ color: 'var(--text_light)' }"
      @click="payDues"
    />
  </section>
</template>

<script lang="ts" setup>
import { ref, onMounted, computed } from "vue";
const searchId = ref();
const props = defineProps({
  sortStatusBy: {
    type: null || String,
    default: null,
  },
  orderBy: {
    type: null || String,
    default: null,
  },
  selectedItems: {
    type: Array<Number>,
    default: () => [],
  },
});
const { $deepClone } = useNuxtApp();
const componentEmit = defineEmits(["updateInput", "setFilter", "duesPaid"]);
const appResourceStore = useAppResourceStore();
const mainDataArray = computed(() => appResourceStore.tableDataArray);
const filterDropDown = ref(false);
const searchInput = ref("");
const isNotPaid = computed(() => {
  if (!props.selectedItems.length) return [];
  return mainDataArray.value.filter((element: TableDataArray) => {
    const include = ["unpaid", "overdue"];
    return (
      props.selectedItems.includes(element.id) && include.includes(element.payment.status)
    );
  });
});
const sortList = ref([
  { title: "Default", val: null },
  { title: "First Name", val: "first_name" },
  { title: "Last Name", val: "last_name" },
  { title: "Due Date", val: "due_date" },
  { title: "Last Login", val: "last_login" },
]);
const statusSortList = ref([
  { title: "All", val: null },
  { title: "Active", val: "active" },
  { title: "Inactive", val: "inactive" },
]);
const payDues = () => {
  const starterArr = $deepClone(mainDataArray.value);
  isNotPaid.value.forEach((element: TableDataArray) => {
    const index = starterArr.findIndex((item: TableDataArray) => item.id === element.id);
    if (index !== -1) starterArr[index].payment.status = "paid";
  });
  appResourceStore.tableDataArray = $deepClone(starterArr);
  componentEmit("duesPaid");
};
onMounted(() => {
  searchId.value = Math.random().toString(36).substring(7);
});
</script>

<style></style>
