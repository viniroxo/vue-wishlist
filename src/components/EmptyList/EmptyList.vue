<template>
  <div class="empty-list">
    <ShoppingBag class="icon" :size="64" :stroke-width="1.2" />
    <span class="message">Nenhum item na lista</span>
    <span class="message"
      >Retorne para a lista de produtos para adicionar items</span
    >
  </div>
</template>

<script setup lang="ts">
import './EmptyList.scss';
import { ShoppingBag } from 'lucide-vue-next';
</script>
