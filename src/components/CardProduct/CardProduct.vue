<template>
  <div class="card">
    <img class="photo" :src="product.image" :alt="product.name" />
    <div class="card-content">
      <span class="card-title" :title="product.name">{{ product.name }}</span>
      <Rating :rating="product.rating" />
      <div class="pricing">
        <span class="price">{{ convertToMoney(product.priceInCents) }}</span>
        <span class="salePrice">{{
          convertToMoney(product.salePriceInCents)
        }}</span>
      </div>
    </div>
    <Heart
      class="add-wishlist"
      @click="toggleWishlist"
      color="palevioletred"
      :fill="isInWishlist ? 'palevioletred' : 'transparent'"
    />
  </div>
</template>

<script setup lang="ts">
import './CardProduct.scss';
import type { Product } from '../../interfaces';
import { defineProps, ref, onMounted } from 'vue';
import Rating from '../Rating/Rating.vue';
import { convertToMoney } from '../../utils/convertToMoney';
import { Heart } from 'lucide-vue-next';
import { useProductStore } from '../../stores/productStore';

const props = defineProps({
  product: {
    type: Object as () => Product,
    required: true,
  },
});

const productStore = useProductStore();
const isInWishlist = ref(false);

const checkIfInWishlist = () => {
  isInWishlist.value = productStore.isInWishlist(props.product.code);
};

const toggleWishlist = () => {
  productStore.toggleWishlist(props.product.code);
  checkIfInWishlist();
};

onMounted(() => {
  checkIfInWishlist();
});
</script>
