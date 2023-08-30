<template>
  <div class="header">
    <div class="header__info">
      <h1 class="header__title">ARMAGEDDON 2023</h1>
      <p class="header__phrase">ООО “Команда им. Б. Уиллиса”.</p>
      <p class="header__phrase">Взрываем астероиды с 1998 года.</p>
    </div>
    <div class="header__nav">
      <app-navigation></app-navigation>
    </div>
  </div>
</template>

<script setup>
import AppNavigation from '@/components/AppNavigation/AppNavigation.vue';
</script>

<style src="./AppHeader.css" scoped></style>
