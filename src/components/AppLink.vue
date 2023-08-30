<template>
  <router-link class="router-link" :aria-label="props.name" :to="props.path">
    <slot />
  </router-link>
</template>

<script setup>
/* eslint-disable vue/require-default-prop */
import { defineProps } from 'vue';

import { RouterLink } from 'vue-router';

const props = defineProps({ name: String, path: String });
</script>

<style scoped>
.router-link {
  color: var(--white);
  text-decoration: none;
  cursor: pointer;
}

.active {
  color: var(--orange);
}
</style>
