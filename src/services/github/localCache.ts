const CACHE_EXPIRY = 60 * 60 * 1000; // 1 hour

export interface CachedData<T> {
  timestamp: number;
  data: T;
}


// ------------------------
// Cache helpers
// ------------------------

export const getCache = <T>(key: string): T | null => {
  const raw = localStorage.getItem(key);
  if (!raw) return null;

  try {
    const parsed: CachedData<T> = JSON.parse(raw);
    if (Date.now() - parsed.timestamp < CACHE_EXPIRY) {
      return parsed.data;
    }
  } catch (err) {
    console.warn("Invalid cache:", err);
  }

  return null;
};

export const setCache = <T>(key: string, data: T) => {
  try {
    const payload: CachedData<T> = {
      timestamp: Date.now(),
      data,
    };
    localStorage.setItem(key, JSON.stringify(payload));
  } catch (err) {
    console.warn("Failed to cache:", err);
  }
};
