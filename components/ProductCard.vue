<template>
  <div class="product-card">
    <img :src="product.image" alt="Product" />
    <div class="product-card__info">
      <p class="product-card__price">{{ product.price }} ₽ <span class="old-price">{{ product.oldPrice }} ₽</span></p>
      <h3 class="product-card__title">{{ product.name }}</h3>
      <p class="product-card__description">{{ product.description }}</p>
      <button @click="addToCart" class="product-card__btn">В корзину</button>
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from '@/store/cart';
const cartStore = useCartStore();
const props = defineProps(['product']);
const emit = defineEmits(['show-toast']);

function addToCart() {
  cartStore.addToCart(props.product);
  emit('show-toast');
}
</script>

<style scoped>
.product-card {
  position: relative;
  transition: transform 0.3s ease;
}
.product-card:hover {
  transform: scale(1.05);
  z-index: 10;
}
.product-card__btn {
  display: none;
  background: black;
  color: white;
  padding: 10px;
  margin-top: 10px;
  cursor: pointer;
}
.product-card:hover .product-card__btn {
  display: block;
}
</style>