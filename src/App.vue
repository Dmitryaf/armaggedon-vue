<template>
  <div>
    TEST⚠
    <router-view></router-view>
  </div>
</template>

<script>
import { getAsteroids } from '@/api/api';


export default {
  name: 'App',
  components: {
  },

  async created() {
    const data = await getAsteroids();
    console.log("🚀 ~ file: App.vue:19 ~ created ~ data:", data)
  },
}
</script>

<style>
</style>
