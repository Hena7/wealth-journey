<script setup lang="ts">
import { ref } from 'vue'

const navItems = [
  { label: 'Dashboard', icon: 'dashboard', path: '/dashboard' },
  { label: 'Transactions', icon: 'receipt_long', path: '/transactions' },
  { label: 'Charts', icon: 'bar_chart', path: '/charts' },
  { label: 'Settings', icon: 'settings', path: '/settings' },
]
</script>

<template>
  <div
    class="flex min-h-screen bg-background-light dark:bg-background-dark text-gray-900 dark:text-white"
  >
    <!-- Sidebar -->
    <aside
      class="w-[200px] bg-white dark:bg-slate-card border-r border-gray-200 dark:border-border-muted flex flex-col"
    >
      <!-- Logo -->
      <div class="p-6 border-b border-gray-200 dark:border-border-muted">
        <h1 class="text-primary text-xl font-bold font-display">Wealth Journey</h1>
      </div>

      <!-- Navigation -->
      <nav class="flex-1 p-4 space-y-2">
        <RouterLink
          v-for="item in navItems"
          :key="item.path"
          :to="item.path"
          class="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-600 dark:text-slate-400 hover:bg-gray-100 dark:hover:bg-slate-800/50 hover:text-primary transition-colors"
          active-class="bg-gray-100 dark:bg-slate-800 text-primary"
        >
          <span class="material-symbols-outlined text-xl">{{ item.icon }}</span>
          <span class="text-sm font-medium">{{ item.label }}</span>
        </RouterLink>
      </nav>

      <!-- Add Transaction Button -->
      <div class="p-4 border-t border-gray-200 dark:border-border-muted">
        <button
          class="w-full flex items-center justify-center gap-2 bg-primary/10 text-primary py-3 rounded-lg hover:bg-primary/20 transition-colors"
        >
          <span class="material-symbols-outlined">add</span>
          <span class="text-sm font-semibold">Add Transaction</span>
        </button>
      </div>
    </aside>

    <!-- Main Content Area -->
    <main class="flex-1">
      <!-- This is where child route components will render -->
      <RouterView />
    </main>
  </div>
</template>
