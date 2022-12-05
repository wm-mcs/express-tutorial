const envData = import.meta.env || {};

export function useEnv() {
  const apiUrlPath = envData?.VITE_API_URL || '';

  return {
    envData,
    apiUrlPath,
  };
}
