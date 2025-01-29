<template>
  <PageBreadcumb
    :items="[
      { text: 'Home', path: '/' },
      { text: 'Wishlist', path: '/wishlist' },
    ]"
  />
  <div class="wishlist">
    <CardProduct
      v-for="product in wishlist"
      :key="product.code"
      :product="product"
    />
  </div>
</template>

<script setup lang="ts">
import './Wishlist.scss';
import PageBreadcumb from '../../components/PageBreadcumb/PageBreadcumb.vue';
import CardProduct from '../../components/CardProduct/CardProduct.vue';
import { computed, onMounted } from 'vue';
import { useProductStore } from '../../stores/productStore';

const productStore = useProductStore();

onMounted(() => {
  productStore.loadWishlist();
});

const wishlist = computed(() => {
  return productStore.products.filter((product) =>
    productStore.isInWishlist(product.code),
  );
});
</script>
