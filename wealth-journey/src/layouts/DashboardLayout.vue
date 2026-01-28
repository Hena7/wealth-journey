<script setup lang="ts">
import { ref } from 'vue'
import TopHeader from '@/components/TopHeader.vue'

const navItems = [
  { label: 'Dashboard', icon: 'home', path: '/dashboard' },
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
      class="group fixed h-full z-50 flex flex-col bg-white dark:bg-slate-card border-r border-gray-200 dark:border-border-muted transition-all duration-300 ease-in-out w-[88px] hover:w-72 overflow-hidden"
    >
      <!-- Logo -->
      <div class="h-24 flex items-center px-6 transition-all duration-300">
        <div
          class="min-w-[40px] h-10 w-10 bg-primary/10 text-primary rounded-full flex items-center justify-center"
        >
          <span class="material-symbols-outlined">donut_large</span>
        </div>
        <h1
          class="ml-4 text-xl font-bold font-display text-gray-900 dark:text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap delay-100"
        >
          Wealth Journey
        </h1>
      </div>

      <!-- Navigation -->
      <nav class="flex-1 flex flex-col items-center group-hover:items-stretch px-4 gap-6 mt-4">
        <RouterLink
          v-for="item in navItems"
          :key="item.path"
          :to="item.path"
          custom
          v-slot="{ isActive, navigate, href }"
        >
          <a
            :href="href"
            @click="navigate"
            class="flex items-center group/link w-full transition-all duration-300"
          >
            <!-- Icon Circle -->
            <div
              class="relative flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 border-2"
              :class="[
                isActive
                  ? 'bg-blue-500 border-blue-500 text-white shadow-lg shadow-blue-500/30'
                  : 'bg-transparent border-gray-200 dark:border-slate-700 text-gray-400 group-hover/link:border-blue-400 group-hover/link:text-blue-400',
              ]"
            >
              <span class="material-symbols-outlined text-2xl font-light">
                {{ item.icon }}
              </span>
            </div>

            <!-- Label -->
            <span
              class="ml-4 font-medium text-base transition-all duration-300 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 whitespace-nowrap"
              :class="
                isActive ? 'text-gray-900 dark:text-white' : 'text-gray-500 dark:text-slate-400'
              "
            >
              {{ item.label }}
            </span>
          </a>
        </RouterLink>
      </nav>

      <!-- Add Transaction Button -->
      <div class="p-2 border-t border-gray-200 dark:border-border-muted mt-auto">
        <button
          class="w-full flex items-center group-hover:justify-start justify-center gap-4 bg-primary text-slate-900 p-3 group-hover:px-6 rounded-full hover:bg-primary/90 transition-all shadow-lg shadow-primary/25 overflow-hidden"
        >
          <span class="material-symbols-outlined flex-shrink-0">add</span>
          <span
            class="font-bold opacity-0 w-0 group-hover:w-auto group-hover:opacity-100 transition-all duration-300 whitespace-nowrap"
          >
            Add Transaction
          </span>
        </button>
      </div>
    </aside>

    <!-- Main Content Area -->
    <main class="flex-1 ml-[88px] transition-all duration-300">
      <TopHeader />
      <!-- This is where child route components will render -->
      <RouterView />
    </main>
  </div>
</template>
