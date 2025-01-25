import defaultVals from "~/utils/defaultVals";
// State sections
const getDefaultState = () => ({
  account: getAccountInfoState(),
  appResource: getAppResourceState(),
});

// Individual state getters

const getAccountInfoState = () => ({});

const getAppResourceState = () => ({
  centeredPadding: null,
  apiBase: useRuntimeConfig().public.apiBase,
  tableDataArray: defaultVals.tableDataArray,
});

export { getDefaultState, getAccountInfoState, getAppResourceState };
