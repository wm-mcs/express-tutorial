const envData = import.meta.env || {};
const apiUrlPath = envData?.VITE_API_URL || '';

export function useEnv() {
  return {
    envData,
    apiUrlPath,
  };
}
