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

<script setup>
import './PageBreadcumb.scss';
import { defineProps } from 'vue';
import { useRouter } from 'vue-router';

const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
});

const router = useRouter();

const navigateTo = (path) => {
  if (path) router.push(path);
};
</script>
