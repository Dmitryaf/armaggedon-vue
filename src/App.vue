<template>
  <div>
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>
import { getAsteroids } from '@/api/api';

import AppHeader from '@/components/AppHeader.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
  },

  async created() {
    const data = await getAsteroids();
    console.log('🚀 ~ file: App.vue:19 ~ created ~ data:', data);
  },
};
</script>

<style></style>
