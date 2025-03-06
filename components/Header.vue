<template>
  <header class="fixed top-0 left-0 w-full bg-white shadow-md h-[92px] flex items-center justify-between px-6">
    <NuxtLink to="/" class="text-lg font-bold hover:text-pink-600 transition">
      Brand Name
    </NuxtLink>
    <div class="flex items-center space-x-2">
      <Icon name="material-symbols:shopping-basket-outline" class="text-pink-600" />
      <span>{{ cartCount }} товаров</span>
    </div>
  </header>
</template>

<script setup lang="ts">
import { useCartStore } from '~/store/cart';

const cartStore = useCartStore();
const cartCount = computed(() => cartStore.items.length);
</script>
