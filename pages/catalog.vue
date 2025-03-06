<template>
  <div class="grid grid-cols-2 md:grid-cols-3 gap-4 p-6">
    <ProductCard v-for="product in products" :key="product.id" :product="product" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import ProductCard from '@/components/ProductCard.vue';
const products = ref([]);

onMounted(async () => {
  const res = await fetch('/api/products');
  products.value = await res.json();
});
</script>