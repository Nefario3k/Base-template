<template>
  <section class="page_main_section transInBasic">
    <section class="main__container space-y-[20px]">
      <!-- heading -->
      <h2 class="uppercase text-sm font-bold text-dark-2">Table Heading</h2>
      <!-- tab controls -->
      <div class="flex_between gap-5 flex-wrap border-b-[1px] border-bc">
        <VTabs
          v-model="tabIndicator"
          color="var(--text_dark)"
          height="3.7rem"
          class="generic__tabs__header preventDefaultTransition"
        >
          <!-- :to="nav.link" -->
          <VTab
            class="noBefore"
            :ripple="false"
            v-for="(nav, index) in navItems"
            :key="index + 221212"
            :text="nav.title"
          ></VTab>
        </VTabs>
        <p class="text-sm text-dark-1">
          Total payable amount:
          <span class="text-lg"
            ><span v-auto-animate class="font-bold text-main-primary">
              {{ $formatCurrency(payAbleAmount) }}
            </span>
            USD</span
          >
        </p>
      </div>
      <!-- tabItems -->
      <section v-auto-animate class="bg-dark rounded-[8px] shadow-base overflow-hidden">
        <TableArea :payment-status="navItems[tabIndicator].val" />
      </section>
    </section>
  </section>
</template>

<script lang="ts" setup>
import defaultVals from "~/utils/defaultVals";
import { onMounted, ref, computed } from "vue";
const appResourceStore = useAppResourceStore();

const tabIndicator = ref(0);
const mainDataArray = computed(() => appResourceStore.tableDataArray);
const payAbleAmount = computed(() => {
  return mainDataArray.value
    .filter((element: TableDataArray) => {
      const include = ["unpaid", "overdue"];
      return include.includes(element.payment.status);
    })
    .map((element: TableDataArray) => {
      return element.payment.amount;
    })
    .reduce((acc: number, curr: number) => acc + curr, 0);
});
const navItems = computed(() => {
  return [
    { title: "All", val: null, dataArray: mainDataArray.value },
    {
      title: "Paid",
      val: "paid",
      dataArray: mainDataArray.value.filter((item: any) => {
        return item.payment.status === "paid";
      }),
    },
    {
      title: "Unpaid",
      val: "unpaid",
      dataArray: mainDataArray.value.filter((item: any) => {
        return item.payment.status === "unpaid";
      }),
    },
    {
      title: "Overdue",
      val: "overdue",
      dataArray: mainDataArray.value.filter((item: any) => {
        return item.payment.status === "overdue";
      }),
    },
  ];
});
onMounted(() => {
  appResourceStore.tableDataArray = defaultVals.tableDataArray;
});
</script>

<style></style>
