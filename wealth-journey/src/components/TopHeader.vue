E
<script setup lang="ts">
import { ref } from 'vue'

const searchQuery = ref('')
</script>

<template>
  <header class="flex items-center justify-between px-4 md:px-8 py-4 bg-transparent">
    <!-- Left: Logo & Search -->
    <div class="flex items-center gap-4 flex-1">
      <div class="md:hidden flex items-center gap-2">
        <div
          class="w-8 h-8 bg-primary/10 text-primary rounded-full flex items-center justify-center"
        >
          <span class="material-symbols-outlined text-lg">account_balance_wallet</span>
        </div>
        <span class="font-bold text-sm">Wealth Journey</span>
      </div>
    </div>

    <!-- Right: Actions & Profile -->
    <div class="flex items-center gap-2 md:gap-4">
      <!-- Move Money Button -->
      <button
        class="hidden sm:flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-card border border-gray-200 dark:border-border-muted rounded-full text-sm font-medium hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors"
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
