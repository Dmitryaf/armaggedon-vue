<template>
  <nav class="navbar">
    <ul class="navbar__nav">
      <li v-for="link of routes" :key="link.name" class="navbar__item">
        <app-link
          class="navbar__link"
          active-class="active"
          :name="link.name"
          :path="link.path"
        >
          {{ link.name }}
        </app-link>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { routes } from '@/router/index';

import AppLink from '@/components/AppLink.vue';
</script>

<style src="./AppNavigation.css" scoped></style>
