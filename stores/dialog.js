import { defineStore } from "pinia"

export const useDialogStore = defineStore("dialog", {
  state: () => ({
    showScannedCardDetailDialog: false,
    editScannedCardDetailDialog: false,
  }),
});