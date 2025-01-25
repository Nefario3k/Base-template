<template>
  <section
    class="app-pagination py-[15px] px-5 flex items-center justify-end md:gap-[50px] sm:gap-[25px] gap-[16px] flex-wrap bg-main-3"
  >
    <!-- per page -->
    <div class="flex_center gap-3">
      <p class="text-dark-2 text-xs font-semibold">Rows per page:</p>
      <VMenu location="bottom center" :offset="5" transition="slide-y-transition">
        <template v-slot:activator="{ props }">
          <BaseButton
            v-bind="props"
            :text="pagination.perPage"
            :svg="true"
            style="padding: 0 6px"
            svg-right="Poly"
            min-width="3rem"
            max-width="max-content"
            min-height="3rem"
            max-height="max-content"
            height="max-content"
            class="noScale spaceBetween"
            color="var(--transparent)"
            :text-style="{ fontSize: 'var(--text_xs)' }"
          />
        </template>
        <VList class="dropDownList" :elevation="1">
          <VListItem
            v-for="(items, index) in itemsPerPage"
            :key="items + index + 32321"
            class="noBefore"
            :class="{ active: items === pagination.perPage }"
            @click="compnentEmit('perPage', items)"
          >
            <VListItemTitle class="">
              {{ items }}
            </VListItemTitle>
          </VListItem>
        </VList>
      </VMenu>
    </div>
    <p class="text-dark-2 text-xs font-semibold">
      {{
        !pagination.count
          ? 0
          : pagination.currentPage === 1
          ? 1
          : !(pagination.count % pagination.perPage)
          ? pagination.perPage * (pagination.currentPage - 1)
          : pagination.perPage * pagination.currentPage - (pagination.perPage - 1)
      }}-{{
        !pagination.count
          ? 0
          : !(pagination.count % pagination.perPage)
          ? pagination.perPage * pagination.currentPage
          : pagination.perPage * (pagination.currentPage - 1) + pagination.count
      }}
      of {{ pagination.totalItems }}
    </p>
    <div class="flex_between gap-[50px]">
      <BaseButton
        :disabled="pagination.currentPage === 1"
        title="Previous"
        :svg="true"
        style="padding: 0"
        svg-left="angle/Left"
        min-width="3rem"
        max-width="max-content"
        min-height="3rem"
        max-height="max-content"
        height="max-content"
        class="noScale rounded"
        color="var(--transparent)"
        @click="compnentEmit('previous')"
      />
      <p class="text-dark-2 text-xs font-semibold text-center min-w-[6rem]">
        {{ pagination.currentPage }} / {{ pagination.totalPages }}
      </p>
      <BaseButton
        :disabled="
          !pagination.totalPages || pagination.currentPage === pagination.totalPages
        "
        title="Next"
        :svg="true"
        style="padding: 0"
        svg-left="angle/Right"
        min-width="3rem"
        max-width="max-content"
        min-height="3rem"
        max-height="max-content"
        height="max-content"
        class="noScale rounded"
        color="var(--transparent)"
        @click="compnentEmit('next')"
      />
    </div>
  </section>
</template>

<script lang="ts" setup>
import { PropType, ref } from "vue";
interface Pagination {
  currentPage: number;
  perPage: number;
  totalItems: number;
  totalPages: number;
  count: number;
}
const compnentEmit = defineEmits(["next", "previous", "perPage"]);
const props = defineProps({
  pagination: {
    type: Object as PropType<Pagination>,
    required: true,
    default: () => ({
      currentPage: 1,
      perPage: 10,
      totalItems: 0,
      totalPages: 1,
      count: 10,
    }),
  },
});
const itemsPerPage = ref([5, 10, 20, 25, 50, 100]);
</script>

<style></style>
