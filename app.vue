<template>
  <div class="flex flex-col min-h-screen">
    <Header />
    <main class="flex-grow flex justify-center items-center">
      <NuxtPage />
    </main>
    <Footer />
    <ToastNotification ref="toastRef" />
  </div>
</template>

<script setup lang="ts">
import { ref, provide } from 'vue';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import ToastNotification from '@/components/ToastNotification.vue';

const toastRef = ref();
provide('showToast', () => toastRef.value?.showToast());
</script>