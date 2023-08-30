<template>
  <div>
    <app-header></app-header>
    <router-view></router-view>
    <div>
      <div v-for="item of asteroidsList" :key="item.name">
        {{ item.name }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';

import { useAsteroids } from './composable/useAsteroids';

import AppHeader from '@/components/AppHeader/AppHeader.vue';

const { asteroidsList, fetchAsteroids } = useAsteroids();

onMounted(async () => {
  await fetchAsteroids();
});
</script>

<style></style>
