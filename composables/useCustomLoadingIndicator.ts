import { computed } from 'vue'
export default function useCustomLoadingIndicator() {
  const appResource = useAppResourceStore()
  const loading = computed(() => appResource.isAppLoading)
  const start = () => (appResource.isAppLoading = true);
  const finish = () => (appResource.isAppLoading = false);
  return {
    loading,
    start,
    finish
  }
};
