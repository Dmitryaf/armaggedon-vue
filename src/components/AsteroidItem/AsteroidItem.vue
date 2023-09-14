<template>
  <div class="asteroid">
    <div class="asteroid__date">
      {{ props.data.closeApproachDate }}
    </div>
    <div class="asteroid__info">
      <div class="asteroid__distance">
        <span>{{ props.data.missDistance.kilometers }} км</span>
        <img :src="arrow" alt="arrow" class="asteroid__arrow" />
      </div>
      <div class="asteroid__parameters"></div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

import arrow from '@/assets/img/Arrow.svg';

const props = defineProps({
  data: { type: Object, required: true, default: () => ({}) },
});

console.log(props.data);
</script>

<style src="./AsteroidItem.css" scoped></style>
