<template>
  <div class="rating">
    <div class="stars">
      <Star
        v-for="index in fullStars"
        :key="'full-' + index"
        fill="gold"
        color="gold"
        :size="16"
      />
      <StarHalf
        v-if="halfStar"
        :key="'half'"
        fill="gold"
        color="gold"
        :size="16"
      />
    </div>
    <span>{{ rating }}</span>
  </div>
</template>

<script setup lang="ts">
import './Rating.scss';
import { Star, StarHalf } from 'lucide-vue-next';
import { defineProps, computed } from 'vue';

const props = defineProps({
  rating: {
    type: Number,
    required: true,
  },
});

const fullStars = computed(() => Math.floor(props.rating));
const halfStar = computed(() => (props.rating % 1 >= 0.5 ? 1 : null));
</script>
