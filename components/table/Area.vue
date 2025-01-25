<template>
  <TableFilter
    :sort-status-by="sortStatusBy"
    :order-by="orderBy"
    :selected-items="selectedItems"
    @updateInput="searchInput = $event"
    @setFilter="setFilter"
    @duesPaid="(selectedItems = []), calculatePagination()"
  />
  <table class="w-full generic__table">
    <thead>
      <tr class="text-left">
        <th class="">
          <div class="flex_center max-w-max">
            <BaseCheck
              :disabled="!formatedTableData.length"
              :check-value="thCheck()"
              :intermediate="thIntermediateCheck()"
              @click.stop="toggleAll()"
            />
          </div>
        </th>
        <th class="">Name</th>
        <th class="">uSER Status</th>
        <th class="">pAYMENT Status</th>
        <th class="text-right">Amount</th>
        <th class=""></th>
        <th class=""></th>
      </tr>
    </thead>
    <TransitionGroup :name="currentNavigationName">
      <template v-if="formatedTableData.length">
        <!-- looping though tbody as opposed to tr to allow for packaged animated wrt keys -->
        <tbody
          v-for="(items, index) in formatedTableData"
          :key="items.id + 2121 + items.first_name + index"
        >
          <tr
            v-auto-animate
            @click="setCurrentActive(items.id)"
            :class="{ active: isCurrentActive === items.id }"
            class="cursor-pointer"
          >
            <!-- toggle -->
            <td class="">
              <div class="flex_center max-w-max gap-5">
                <BaseCheck
                  :check-value="tdCheck(items.id)"
                  @click.stop="selectAnItem(items.id)"
                />
                <BaseButton
                  :svg="true"
                  style="padding: 0 6px"
                  svg-right="angle/Down"
                  min-width="3rem"
                  max-width="max-content"
                  min-height="3rem"
                  max-height="max-content"
                  height="max-content"
                  class="noScale noBefore hoverViewMore"
                  :class="{ 'rotate-180': isCurrentActive === items.id }"
                  color="var(--transparent)"
                />
              </div>
            </td>
            <!-- name and email -->
            <td class="">
              <div class="max-w-max">
                <p class="text-sm text-dark-1 font-medium">
                  {{ items.first_name + " " + items.last_name }}
                </p>
                <a
                  @click.stop="$doNothing()"
                  class="text-dark-2 text-xs hover:text-main-primary"
                  :href="`mailto:${items.email}`"
                  >{{ items.email }}</a
                >
              </div>
            </td>
            <!-- status and last login -->
            <td class="">
              <div class="max-w-max">
                <TableStatus
                  class="mb-[5px]"
                  :text="items.status"
                  :text-color="getStatusColors(items.status).textColor"
                  :bg-color="getStatusColors(items.status).bgColor"
                  :ball-color="getStatusColors(items.status).ballColor"
                />
                <p class="text-dark-2 text-xs font-medium">
                  Last login: {{ $formatDate(items.last_login) }}
                </p>
              </div>
            </td>
            <!-- payment staus and due_date -->
            <td class="">
              <div class="max-w-max">
                <TableStatus
                  class="mb-[5px]"
                  :text="items.payment.status"
                  :text-color="getStatusColors(items.payment.status).textColor"
                  :bg-color="getStatusColors(items.payment.status).bgColor"
                  :ball-color="getStatusColors(items.payment.status).ballColor"
                />
                <p class="text-dark-1 text-xs font-medium">
                  {{
                    items.payment.status.toLowerCase() === "paid"
                      ? "Paid"
                      : items.payment.status.toLowerCase() === "overdue"
                      ? "Dued"
                      : "Dues"
                  }}
                  on {{ $formatDate(items.payment.due_date) }}
                </p>
              </div>
            </td>
            <!-- amount -->
            <td class="text-right">
              <div class="">
                <p class="text-sm text-dark-1 font-medium">
                  {{ $formatCurrency(items.payment.amount) }}
                </p>
                <p class="text-dark-2 text-xs font-medium">
                  {{ items.payment.currency.toLocaleUpperCase() }}
                </p>
              </div>
            </td>
            <!-- view -->
            <td class="">
              <div class="flex_center max-w-max mx-auto">
                <BaseButton
                  style="padding: 0 6px"
                  text="View More"
                  width="100%"
                  min-width="max-content"
                  max-width="max-content"
                  height="4rem"
                  class="noScale noBefore hoverViewMore"
                  color="var(--transparent)"
                  :text-style="{ color: 'var(--text_dark2)', fontSize: 'var(--text_xs)' }"
                />
              </div>
            </td>
            <!-- action button -->
            <td class="">
              <div class="flex_center max-w-max mx-auto">
                <VMenu
                  location="right"
                  :offset="40"
                  transition="slide-x-reverse-transition"
                >
                  <template v-slot:activator="{ props }">
                    <BaseButton
                      v-bind="props"
                      @click.native.stop="$doNothing()"
                      :svg="true"
                      style="padding: 0 6px"
                      svg-right="Dots"
                      min-width="3rem"
                      max-width="max-content"
                      min-height="3rem"
                      max-height="max-content"
                      height="max-content"
                      class="noScale noBefore hoverViewMore"
                      color="var(--transparent)"
                    />
                  </template>
                  <VList class="dropDownList" :elevation="1" min-width="15.4rem">
                    <VListItem @click="$doNothing()" class="noBefore text-left">
                      <VListItemTitle class=""> Edit </VListItemTitle>
                    </VListItem>
                    <VListItem @click="$doNothing()" class="noBefore text-left">
                      <VListItemTitle class=""> View Profile </VListItemTitle>
                    </VListItem>
                    <VListItem
                      v-if="items.status === 'inactive'"
                      @click="setUserStatus(items.id, 'active')"
                      class="noBefore text-left"
                    >
                      <VListItemTitle style="color: var(--text_dark4)" class="">
                        Activate User
                      </VListItemTitle>
                    </VListItem>
                    <VListItem
                      v-else
                      @click="setUserStatus(items.id, 'inactive')"
                      class="noBefore text-left"
                    >
                      <VListItemTitle style="color: var(--text_dark5)" class="">
                        Dectivate User
                      </VListItemTitle>
                    </VListItem>
                    <VListItem
                      style="
                        margin-block: 15px 10px !important;
                        background: var(--bg_color) !important;
                        height: 1px !important;
                        min-height: 1px !important;
                      "
                      @click="$doNothing()"
                      class="noBefore text-left"
                    >
                    </VListItem>
                    <VListItem @click="deleteUser(items.id)" class="noBefore text-left">
                      <VListItemTitle style="color: var(--text_dark5)" class="">
                        Delete
                      </VListItemTitle>
                    </VListItem>
                  </VList>
                </VMenu>
              </div>
            </td>
          </tr>
          <!-- dropdown section -->
          <tr
            v-auto-animate
            v-if="isCurrentActive === items.id"
            class="transInBasic minitableRow"
          >
            <td style="padding: 0" colspan="7">
              <table class="w-full">
                <thead>
                  <tr class="text-left">
                    <th></th>
                    <th>Date</th>
                    <th>User Activity</th>
                    <th>
                      <div class="flex items-center gap-3">
                        <span>Detail</span>
                        <VTooltip
                          width="100%"
                          max-width="140px"
                          location="right"
                          offset="30"
                          content-class="app__tooltip"
                          text="This is a rather detailed description of the user activity! Might not understand it since its Lorem Ipsum!"
                        >
                          <template v-slot:activator="{ props }">
                            <svg
                              v-bind="props"
                              class="block"
                              width="15"
                              height="15"
                              viewBox="0 0 15 15"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M2.28966 12.8947C1.57334 12.2028 1.00197 11.3752 0.608901 10.4602C0.215834 9.54517 0.0089368 8.56102 0.000283176 7.56517C-0.00837045 6.56933 0.181392 5.58173 0.558499 4.66001C0.935606 3.73828 1.4925 2.90089 2.1967 2.1967C2.90089 1.4925 3.73828 0.935606 4.66001 0.558499C5.58173 0.181392 6.56933 -0.00837045 7.56517 0.000283176C8.56102 0.0089368 9.54517 0.215834 10.4602 0.608901C11.3752 1.00197 12.2028 1.57334 12.8947 2.28966C14.2608 3.70418 15.0168 5.59869 14.9997 7.56517C14.9826 9.53165 14.1939 11.4127 12.8033 12.8033C11.4127 14.1939 9.53165 14.9826 7.56517 14.9997C5.59869 15.0168 3.70418 14.2608 2.28966 12.8947ZM11.8372 11.8372C12.963 10.7113 13.5955 9.18435 13.5955 7.59216C13.5955 5.99998 12.963 4.47301 11.8372 3.34716C10.7113 2.22132 9.18435 1.58882 7.59216 1.58882C5.99998 1.58882 4.47301 2.22132 3.34716 3.34716C2.22132 4.47301 1.58882 5.99998 1.58882 7.59216C1.58882 9.18435 2.22132 10.7113 3.34716 11.8372C4.47301 12.963 5.99998 13.5955 7.59216 13.5955C9.18435 13.5955 10.7113 12.963 11.8372 11.8372ZM6.84216 8.34216V6.84216H8.34216V11.3422H6.84216V8.34216ZM6.84216 3.84216H8.34216V5.34216H6.84216V3.84216Z"
                                fill="#8B83BA"
                              />
                            </svg>
                          </template>
                        </VTooltip>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <template v-if="items.activity_logs.length">
                    <tr
                      v-for="(acti, indexId) in items.activity_logs"
                      :key="items.id + 3313 + items.first_name + acti.action + indexId"
                    >
                      <td></td>
                      <td>
                        <div class="max-w-max">
                          <p class="text-dark-2 text-sm">
                            {{ $formatDate(acti.date) }}
                          </p>
                        </div>
                      </td>
                      <td>
                        <div class="max-w-max">
                          <p class="text-dark-1 text-sm capitalize">
                            {{ acti.action }}
                          </p>
                        </div>
                      </td>
                      <td>
                        <div class="max-w-[42.5rem]">
                          <p class="text-dark-1 text-sm">
                            {{ acti.description }}
                          </p>
                        </div>
                      </td>
                    </tr>
                  </template>
                  <template v-else>
                    <tr class="disabled">
                      <td style="padding-block: 40px" colspan="7">
                        <p
                          class="text-dark-2 text-md font-semibold text-center uppercase"
                        >
                          No records found
                        </p>
                      </td>
                    </tr>
                  </template>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </template>
      <tbody v-else>
        <tr class="disabled">
          <td style="padding-block: 40px" colspan="7">
            <p class="text-dark-2 text-md font-semibold text-center uppercase">
              No records found
            </p>
          </td>
        </tr>
      </tbody>
    </TransitionGroup>
  </table>
  <TablePagination
    :pagination="pagination"
    @next="handlePagination('next')"
    @previous="handlePagination('previous')"
    @perPage="
      ($event) => {
        handlePagination('perPage', $event);
      }
    "
  />
</template>

<script lang="ts" setup>
import { onMounted, ref, computed, watch } from "vue";
const props = defineProps({
  paymentStatus: {
    type: null,
    required: true,
    default: null,
  },
});
// const [parent] = useAutoAnimate()
const { $getAppResource, $deepClone, $formatDate } = useNuxtApp();
const appResourceStore = useAppResourceStore();
const mainDataArray = computed(() => appResourceStore.tableDataArray);
const currentNavigationName = ref("list");
const orderBy = ref<null | string>(null);
const sortStatusBy = ref<null | string>(null);
const isCurrentActive = ref<null | number>(null);
const selectedItems = ref<number[]>([]);
const searchInput = ref<string>("");
const pagination = ref({
  currentPage: 1,
  perPage: 10,
  totalItems: 0,
  totalPages: 0,
  count: 0,
});
const paymentStatus = computed(() => props.paymentStatus);
const lowerBoundary = computed(() => {
  return (pagination.value.currentPage - 1) * pagination.value.perPage;
});
const upperBoundary = computed(() => {
  return pagination.value.currentPage * pagination.value.perPage;
});

const filteredTableData = computed(() => {
  let filteredArray = $deepClone(mainDataArray.value);
  const searchTerm = searchInput.value.toLowerCase();

  // Unified search function, makes life easy when broken
  const matchesSearch = (item: TableDataArray) => {
    if (!searchTerm) return true;

    const searchFields = [
      item.first_name,
      item.last_name,
      item.email,
      $formatDate(item.last_login),
      $formatDate(item.payment.due_date),
    ];

    return searchFields.some((field) => field.toLowerCase().includes(searchTerm));
  };

  // Complex filtering logic
  filteredArray = filteredArray.filter((item: TableDataArray) => {
    const matchesPaymentStatus =
      !paymentStatus.value || item.payment.status === paymentStatus.value;

    const matchesUserStatus = !sortStatusBy.value || item.status === sortStatusBy.value;

    return matchesSearch(item) && matchesPaymentStatus && matchesUserStatus;
  });

  // Sorting logic
  if (orderBy.value) {
    filteredArray.sort((a: TableDataArray, b: TableDataArray) => {
      const getCompareValue = (item: TableDataArray) =>
        orderBy.value === "due_date" ? item.payment[orderBy.value] : item[orderBy.value];

      const aValue = getCompareValue(a);
      const bValue = getCompareValue(b);

      return aValue > bValue ? 1 : aValue < bValue ? -1 : 0;
    });
  }

  return filteredArray;
});
const formatedTableData = computed(() => {
  return $deepClone(
    filteredTableData.value.slice(lowerBoundary.value, upperBoundary.value)
  );
});

const setCurrentActive = (id: number) => {
  // find item via id
  const arr = $getAppResource("tableDataArray");
  const item = arr.find((item: TableDataArray) => item.id === id);
  if (!item) return (isCurrentActive.value = null);
  if (isCurrentActive.value === id) {
    isCurrentActive.value = null;
  } else {
    isCurrentActive.value = id;
  }
};
const getStatusColors = (val: string) => {
  switch (val.toLocaleLowerCase()) {
    case "active":
      return {
        textColor: "text-dark-3",
        bgColor: "bg-main-4",
        ballColor: "bg-dark-3",
      };
    case "inactive":
      return {
        textColor: "text-dark-2",
        bgColor: "bg-main",
        ballColor: "bg-dark-2",
      };
    case "paid":
      return {
        textColor: "text-dark-4",
        bgColor: "bg-main-5",
        ballColor: "bg-dark-4",
      };
    case "overdue":
      return {
        textColor: "text-dark-5",
        bgColor: "bg-main-6",
        ballColor: "bg-dark-5",
      };
    default:
      return {
        textColor: "text-dark-6",
        bgColor: "bg-main-7",
        ballColor: "bg-dark-6",
      };
  }
};
const selectAnItem = (id: number) => {
  if (selectedItems.value.includes(id)) {
    selectedItems.value = selectedItems.value.filter((item) => item !== id);
  } else {
    selectedItems.value = [...selectedItems.value, id];
  }
};
const tdCheck = (id: number) => {
  return selectedItems.value.includes(id);
};
const thIntermediateCheck = () => {
  if (
    selectedItems.value.length &&
    formatedTableData.value.length.length &&
    selectedItems.value.length !== formatedTableData.value.length
  )
    return true;
  else return false;
};
const thCheck = () => {
  if (selectedItems.value.length && !thIntermediateCheck()) return true;
  else return false;
};
const toggleAll = () => {
  if (thCheck()) selectedItems.value = [];
  else
    selectedItems.value = formatedTableData.value.map((item: TableDataArray) => item.id);
};
const calculatePagination = () => {
  pagination.value.totalItems = filteredTableData.value.length;
  pagination.value.totalPages = Math.ceil(
    pagination.value.totalItems / pagination.value.perPage
  );
  pagination.value.count = filteredTableData.value.slice(
    lowerBoundary.value,
    upperBoundary.value
  ).length;
};
const handlePagination = (type: string, value: number = 0) => {
  switch (type) {
    case "next":
      pagination.value.currentPage++;
      currentNavigationName.value = "list";
      break;
    case "previous":
      pagination.value.currentPage--;
      currentNavigationName.value = "list-reverse";
      break;
    case "perPage":
      pagination.value.perPage = value;
      pagination.value.currentPage = 1;
      currentNavigationName.value = "list-reverse";
      break;
    default:
      break;
  }
  isCurrentActive.value = null;
  selectedItems.value = [];
  calculatePagination();
};
const setFilter = (val: any) => {
  const toSetType = val.type === "sortStatusBy" ? sortStatusBy : orderBy;
  if (toSetType.value === val.val) return;
  else {
    toSetType.value = val.val;
    tableModAnimation();
  }
};
const tableModAnimation = (val: any = null) => {
  if (val) currentNavigationName.value = "list-up";
  else currentNavigationName.value = "list-down";
  pagination.value.currentPage = 1;
  isCurrentActive.value = null;
  calculatePagination();
};
const setUserStatus = (id: number, status: string) => {
  const starterArr = $deepClone(mainDataArray.value);
  const index = starterArr.findIndex((item: TableDataArray) => item.id === id);
  if (index !== -1) {
    starterArr[index].status = status;
    appResourceStore.tableDataArray = $deepClone(starterArr);
  }
};
const deleteUser = (id: number) => {
  const starterArr = $deepClone(mainDataArray.value);
  const index = starterArr.findIndex((item: TableDataArray) => item.id === id);
  if (index !== -1) {
    starterArr.splice(index, 1);
    currentNavigationName.value = "list-reverse";
    appResourceStore.tableDataArray = $deepClone(starterArr);
    calculatePagination();
  }
};
watch([searchInput, paymentStatus], () => {
  tableModAnimation();
});
onMounted(() => {
  calculatePagination();
});
</script>

<style></style>
