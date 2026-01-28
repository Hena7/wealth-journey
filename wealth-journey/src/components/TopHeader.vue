<script setup lang="ts">
import { ref } from 'vue'

const searchQuery = ref('')
</script>

<template>
  <header class="flex items-center justify-between px-8 py-4 bg-transparent">
    <!-- Left: Logo & Search -->
    <div class="flex items-center gap-4 flex-1">
      <!-- Logo Icon (using a symbol for now or a placeholder) -->
      <div
        class="w-10 h-10 rounded-full bg-white dark:bg-slate-card border border-gray-200 dark:border-border-muted flex items-center justify-center text-gray-900 dark:text-white"
      >
        <span class="material-symbols-outlined">donut_large</span>
      </div>

      <!-- Search Bar -->
      <div class="relative w-96">
        <span
          class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xl"
        >
          search
        </span>
        <input
          v-model="searchQuery"
          type="text"
          placeholder="Search or jump to"
          class="w-full bg-white dark:bg-slate-card border border-gray-200 dark:border-border-muted rounded-full py-2.5 pl-10 pr-12 text-sm text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
        />
        <div
          class="absolute right-3 top-1/2 -translate-y-1/2 px-1.5 py-0.5 rounded border border-gray-200 dark:border-border-muted bg-gray-50 dark:bg-slate-800 text-xs text-gray-400"
        >
          ⌘K
        </div>
      </div>
    </div>

    <!-- Right: Actions & Profile -->
    <div class="flex items-center gap-4">
      <!-- Move Money Button -->
      <button
        class="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-card border border-gray-200 dark:border-border-muted rounded-full text-sm font-medium hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors"
      >
        <span>Move Money</span>
        <span class="material-symbols-outlined text-gray-500 text-lg">expand_more</span>
      </button>

      <!-- Notification Bell -->
      <button
        class="w-10 h-10 rounded-full bg-white dark:bg-slate-card border border-gray-200 dark:border-border-muted flex items-center justify-center hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors"
      >
        <span class="material-symbols-outlined text-gray-500">notifications</span>
      </button>

      <!-- Profile Avatar -->
      <button
        class="w-10 h-10 rounded-full overflow-hidden border border-gray-200 dark:border-border-muted"
      >
        <img
          src="https://i.pravatar.cc/150?u=liam"
          alt="Profile"
          class="w-full h-full object-cover"
        />
      </button>
    </div>
  </header>
</template>
