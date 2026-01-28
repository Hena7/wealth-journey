<script setup lang="ts">
import { ref, watch } from 'vue'
import ThemeToggle from './components/ThemeToggle.vue'

const name = ref('Henisha')
watch(name, (newValue, oldValue) => {
  console.log('new value:', newValue, 'old value:', oldValue)
})
</script>
<template>
  <RouterView />
  <ThemeToggle />
</template>

<style scoped></style>
