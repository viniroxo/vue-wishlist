<template>
  <div v-if="open" class="popover">
    <div class="popover-options">
      <span>Entrar</span>
      <span>Minha Conta</span>
      <span>Endereços</span>
      <span>Minha Netshoes</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import './Popover.scss';
import { defineProps } from 'vue';

defineProps({
  open: {
    type: Boolean,
    required: true,
  },
});
</script>
