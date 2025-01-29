<template>
  <PageBreadcumb
    :items="[
      { text: 'Home', path: '/' },
      { text: 'Wishlist', path: '/wishlist' },
    ]"
  />
</template>

<script setup>
import PageBreadcumb from '../components/PageBreadcumb/PageBreadcumb.vue';
</script>
