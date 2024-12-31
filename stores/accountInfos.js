import { defineStore } from "pinia";
import { getAccountInfoState } from "~/stores/default";

export const userAccountInfoStore = defineStore("accountInfo", {
  state: () => {
    return getAccountInfoState();
  },

  getters: {},

  actions: {
    resetState() {
      Object.assign(this, getAccountInfoState());
    },
  },
});
