<template>
  <RouterLink :aria-label="props.name" :to="props"> <slot /> </RouterLink>
</template>

<script setup>
/* eslint-disable vue/require-default-prop */
import { defineProps, withDefaults } from 'vue-router';

const props = withDefaults(defineProps({ name: String, params: Object }), {
  name: '',
  params: () => ({}),
});
</script>
