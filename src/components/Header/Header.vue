<template>
  <header>
    <img :src="logo" alt="Netshoes logo" class="logo" @click="navigateToHome" />
    <div class="actions">
      <div class="wishlist-button" v-on:click="navigateToWishlist">
        <Heart />
        <span>Wishlist</span>
      </div>
      <CircleUserRound v-on:click="setOpenOptions" class="profile" />
      <Popover :open="isOpenOptions" />
    </div>
  </header>
</template>

<script setup lang="ts">
import './Header.scss';
import logo from '../../assets/logo.svg';
import { Heart, CircleUserRound } from 'lucide-vue-next';
import { ref } from 'vue';
import Popover from '../Popover/Popover.vue';
import { useRouter } from 'vue-router';

const isOpenOptions = ref(false);

const setOpenOptions = () => {
  isOpenOptions.value = !isOpenOptions.value;
};

const router = useRouter();

const navigateToWishlist = () => {
  router.push('/wishlist');
};

const navigateToHome = () => {
  router.push('/');
};
</script>
