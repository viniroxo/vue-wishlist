<template>
  <div>
    <nav class="breadcrumbs">
      <div v-for="(crumb, index) in items" :key="crumb.path">
        <span
          @click="navigateTo(crumb.path)"
          class="breadcrumb-item"
          :class="{ active: index === items.length - 1 }"
        >
          {{ crumb.text }}
        </span>
        <span v-if="index < items.length - 1"> / </span>
      </div>
    </nav>
    <hr />
  </div>
</template>

<script setup lang="ts">
import './PageBreadcumb.scss';
import { defineProps } from 'vue';
import { useRouter } from 'vue-router';
import type { BreadcrumbItem } from '../../interfaces';

defineProps({
  items: {
    type: Array as () => BreadcrumbItem[],
    required: true,
  },
});

const router = useRouter();

const navigateTo = (path: string) => {
  if (path) router.push(path);
};
</script>
