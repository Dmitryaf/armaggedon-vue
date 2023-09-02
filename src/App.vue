<template>
  <div class="app">
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script setup>
import AppHeader from '@/components/AppHeader/AppHeader.vue';
</script>

<style>
#app {
  padding: 15px;
}
</style>
