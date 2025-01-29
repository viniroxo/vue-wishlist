<template>
  <header>
    <img :src="logo" alt="Logo da Empresa" />
    <div class="actions">
      <div class="wishlist-button">
        <Heart />
        <span>Wishlist</span>
      </div>
      <CircleUserRound v-on:click="setOpenOptions" />
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

const isOpenOptions = ref(false);

const setOpenOptions = () => {
  isOpenOptions.value = !isOpenOptions.value;
};
</script>
