import { defineStore } from "pinia";
import { getAppResourceState } from "~/stores/default";

export const useAppResourceStore = defineStore("appResource", {
  state: () => {
    return getAppResourceState();
  },

  getters: {},

  actions: {
    resetState() {
      Object.assign(this, getAppResourceState());
    },
  },
});
