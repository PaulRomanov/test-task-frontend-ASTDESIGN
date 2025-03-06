<template>
  <Transition name="fade">
    <div v-if="visible" class="toast">
      Товар добавлен в корзину
    </div>
  </Transition>
</template>

<script setup>
import { ref } from 'vue';

const visible = ref(false);

function showToast() {
  visible.value = true;
  setTimeout(() => (visible.value = false), 2000);
}

defineExpose({ showToast });
</script>

<style scoped>
.toast {
  position: fixed;
  bottom: 40px;
  right: 40px;
  background: pink;
  color: black;
  padding: 10px 20px;
  border-radius: 5px;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>