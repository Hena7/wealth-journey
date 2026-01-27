<script setup lang="ts">
import { ref, onMounted } from 'vue'

const isDark = ref(false)

const toggleDarkMode = () => {
  isDark.value = !isDark.value
  if (isDark.value) {
    document.documentElement.classList.add('dark')
    localStorage.setItem('theme', 'dark')
  } else {
    document.documentElement.classList.remove('dark')
    localStorage.setItem('theme', 'light')
  }
}

onMounted(() => {
  const savedTheme = localStorage.getItem('theme')
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

  if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
    isDark.value = true
    document.documentElement.classList.add('dark')
  } else {
    isDark.value = false
    document.documentElement.classList.remove('dark')
  }
})
</script>

<template>
  <button
    @click="toggleDarkMode"
    class="fixed bottom-6 right-6 z-50 flex h-14 w-14 cursor-pointer items-center justify-center rounded-full bg-white shadow-lg ring-1 ring-slate-200 transition-all hover:scale-110 active:scale-95 dark:bg-slate-card dark:ring-border-muted"
    aria-label="Toggle Dark Mode"
  >
    <span v-if="!isDark" class="material-symbols-outlined text-amber-500 text-3xl">light_mode</span>
    <span v-else class="material-symbols-outlined text-primary text-3xl">dark_mode</span>
  </button>
</template>

<style scoped>
button {
  transition:
    transform 0.2s cubic-bezier(0.4, 0, 0.2, 1),
    background-color 0.3s ease;
}
</style>
