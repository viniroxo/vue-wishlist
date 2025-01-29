<template>
  <Header />
  <div class="page">
    <router-view />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useProductStore } from './stores/productStore';

import Header from './components/Header/Header.vue';

const productStore = useProductStore();

onMounted(() => {
  productStore.fetchProducts();
});
</script>
