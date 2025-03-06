import { generateFakeProduct } from '@/utils/generate';

export default defineEventHandler(async (event) => {
  const cache = useStorage('cache');
  const cacheKey = 'products';
  let products = await cache.getItem(cacheKey);

  if (!products) {
    products = Array.from({ length: 12 }, generateFakeProduct);
    await cache.setItem(cacheKey, products, { ttl: useRuntimeConfig().public.cacheTTL });
  }

  return products;
});
