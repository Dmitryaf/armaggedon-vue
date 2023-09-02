<template>
  <div class="asteroids-wapp">
    <div class="asteroids">
      <h2 class="asteroids__title">Ближайшие подлёты астероидов</h2>
      <units-switcher class="asteroids__switcher"></units-switcher>
      <div v-if="asteroidsList?.length">
        <asteroid-item
          v-for="item of asteroidsList"
          :key="item.name"
          :data="item"
        ></asteroid-item>
      </div>
      <div v-else>Отсутствуют данные по астеройдам</div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';

import UnitsSwitcher from '@/components/UnitsSwitcher/UnitsSwitcher.vue';
import AsteroidItem from '@/components/AsteroidItem/AsteroidItem.vue';

import { useAsteroids } from '@/composable/useAsteroids';

const { asteroidsList, fetchAsteroids } = useAsteroids();

onMounted(async () => {
  await fetchAsteroids();
});
</script>

<style src="./AsteroidsList.css" scoped></style>
