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
  <div class="flex min-h-screen bg-[#0f1419] text-white">
    <!-- Sidebar -->
    <aside class="w-[200px] bg-[#1a1f2e] border-r border-slate-700/50 flex flex-col">
      <!-- Logo -->
      <div class="p-6 border-b border-slate-700/50">
        <h1 class="text-primary text-xl font-bold">Wealth Journey</h1>
      </div>

      <!-- Navigation -->
      <nav class="flex-1 p-4 space-y-2">
        <RouterLink
          v-for="item in navItems"
          :key="item.path"
          :to="item.path"
          class="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-400 hover:bg-slate-800/50 hover:text-primary transition-colors"
          active-class="bg-slate-800 text-primary"
        >
          <span class="material-symbols-outlined text-xl">{{ item.icon }}</span>
          <span class="text-sm font-medium">{{ item.label }}</span>
        </RouterLink>
      </nav>

      <!-- Add Transaction Button -->
      <div class="p-4 border-t border-slate-700/50">
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
      <!-- This is where child pages will render -->
      <slot />
    </main>
  </div>
</template>
