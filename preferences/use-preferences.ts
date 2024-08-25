import { preferences } from './config';

function usePreferences() {
  const isShow = computed(() => preferences.show);
  return {
    isShow,
  };
}

export { usePreferences }; 
