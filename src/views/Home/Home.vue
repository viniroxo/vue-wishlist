<template>
  <PageBreadcumb :items="[{ text: 'Home', path: '/' }]" />
  <div class="product-list">
    <CardProduct
      v-for="product in products"
      :key="product.code"
      :product="product"
    />
  </div>
</template>

<script setup lang="ts">
import './Home.scss';
import { computed } from 'vue';
import { useProductStore } from '../../stores/productStore';
import PageBreadcumb from '../../components/PageBreadcumb/PageBreadcumb.vue';
import CardProduct from '../../components/CardProduct/CardProduct.vue';

const productStore = useProductStore();
const products = computed(() => productStore.products);
</script>
