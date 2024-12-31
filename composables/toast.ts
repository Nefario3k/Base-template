// composables/appToast.ts
import { ref } from "vue";
import useEventBus from "~/composables/useEventBus";

export default function toast() {
  const toast_duration = ref(4500);
  const permanent = ref(false);
  const reloadData = ref(false);
  const tableLoader = ref(false);
  const searchContents = ref(false);
  const loading = ref(false);
  const errors = ref<string | null>(null);
  const errorsObj = ref<Record<string, any>>({});

  const { emit } = useEventBus();

  function emitShowToastEvent(toastOptions: Record<string, any>) {
    emit("show-toast", { duration: toast_duration, content: toastOptions });
  }

  function showError(res: string | null, head: string | null = null) {
    const toastOptions = {
      absolute: false,
      border: false,
      svg: true,
      header: head || "An Error Occured",
      subtext: res || "Seems something went wrong!",
      headerColor: "#fff",
      subtextColor: "#fff",
      svgStroke: "var(--danger_color)",
      svgType: "danger",
      svgColor: "#fff",
      color: "var(--danger_color)",
      right: 14,
      bottom: 77,
    };

    emitShowToastEvent(toastOptions);
    permanent.value = false;
    tableLoader.value = false;
    loading.value = false;
    reloadData.value = false;
    searchContents.value = false;
    emit("loading-animation-finish"); // You can also emit an event for loading animation finish
  }

  function showSuccess(res: string, head: string | null = null) {
    const toastOptions = {
      header: head || "Success",
      subtext: res || "Action carried out successfully",
      headerColor: "var(--text_light)",
      subtextColor: "var(--text_light)",
      svg: true,
      svgStroke: "var(--bg_dark)",
      svgColor: "var(--green)",
      svgType: "check",
      color: "var(--primary_color)",
      right: 14,
      bottom: 77,
    };

    emitShowToastEvent(toastOptions);
    emit("loading-animation-finish");
  }

  function showInfo(res: string, head: string | null = null) {
    const toastOptions = {
      header: head || "Warning",
      subtext: res || "Something is wrong with your action",
      headerColor: "var(--primary_color)",
      subtextColor: "var(--text_dark2)",
      svg: true,
      svgColor: "var(--primary_color)",
      borderColor: "var(--primary_color)",
      svgType: "info",
      color: "#fff",
      right: 14,
      bottom: 77,
    };

    emitShowToastEvent(toastOptions);
    emit("loading-animation-finish");
  }

  function showTableLoader() {
    tableLoader.value = !tableLoader.value;
  }

  function catchError(err: any, head: string | null = null) {
    let message: string | null = null;
    if (typeof err === "string") {
      message = err;
    } else if (err?.response?._data?.message) {
      message = err.response._data.message;
      if (err.response._data?.errors) {
        errorsObj.value = err.response._data.errors;
      }
    } else if (err?.response?.data?.message) {
      message = err.response.data.message;
      if (err.response.data?.errors) {
        errorsObj.value = err.response.data.errors;
      }
    } else if (err?.response?.message) {
      message = err.response.message;
    } else {
      message = err.message;
    }

    if (message && message.toLowerCase().includes("network error")) {
      showInfo(message, "Connection error");
    } else if (message && message.toLowerCase().includes("failed to")) {
      showInfo(message, head);
    } else {
      showError(message, head);
    }

    errors.value = message;
    loading.value = false;
  }

  return {
    permanent,
    reloadData,
    tableLoader,
    searchContents,
    loading,
    errors,
    errorsObj,
    showError,
    showSuccess,
    showInfo,
    showTableLoader,
    catchError,
  };
}
