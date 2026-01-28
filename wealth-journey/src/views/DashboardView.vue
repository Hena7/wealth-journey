<script setup lang="ts">
import { useFinanceStore } from '@/stores/finance'
import { computed } from 'vue'

const financeStore = useFinanceStore()

// Get current date
const currentDate = computed(() => {
  const options: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }
  return new Date().toLocaleDateString('en-US', options)
})
</script>

<template>
  <div class="p-8 space-y-6">
    <!-- Header -->
    <div class="flex items-center justify-between mb-8">
      <h1 class="text-3xl font-bold font-display text-gray-900 dark:text-white">
        Welcome Back, Liam !
      </h1>

      <div class="flex items-center gap-3">
        <!-- Send Button (Primary) -->
        <button
          class="flex items-center gap-2 px-5 py-2.5 bg-blue-500 hover:bg-blue-600 text-white rounded-full font-medium transition-colors shadow-lg shadow-blue-500/20"
        >
          <span class="material-symbols-outlined text-sm">open_in_new</span>
          <span>Send</span>
        </button>

        <!-- Other Actions (Secondary) -->
        <button
          v-for="action in ['Request', 'Transfer', 'Deposit', 'Pay Bill', 'Create Invoice']"
          :key="action"
          class="flex items-center gap-2 px-5 py-2.5 bg-white dark:bg-slate-card border border-gray-200 dark:border-border-muted text-gray-700 dark:text-gray-200 rounded-full font-medium hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors"
        >
          <span class="material-symbols-outlined text-sm">
            {{
              action === 'Request'
                ? 'download'
                : action === 'Transfer'
                  ? 'swap_horiz'
                  : action === 'Deposit'
                    ? 'add'
                    : action === 'Pay Bill'
                      ? 'receipt_long'
                      : 'description'
            }}
          </span>
          <span>{{ action }}</span>
        </button>
      </div>
    </div>

    <!-- Total Balance Card -->
    <div
      class="bg-white dark:bg-slate-card rounded-xl p-6 border border-gray-200 dark:border-border-muted"
    >
      <p class="text-gray-500 dark:text-slate-400 text-sm uppercase tracking-wider mb-2">
        Total Balance
      </p>
      <h2 class="text-4xl font-bold mb-4">${{ financeStore.totalBalance.toLocaleString() }}</h2>

      <div class="flex gap-6">
        <div class="flex items-center gap-2">
          <span class="material-symbols-outlined text-green-400 text-sm">trending_up</span>
          <span class="text-green-400 text-sm">Income</span>
          <span class="text-gray-900 dark:text-white font-semibold"
            >+${{ financeStore.income.toLocaleString() }}</span
          >
        </div>
        <div class="flex items-center gap-2">
          <span class="material-symbols-outlined text-red-400 text-sm">trending_down</span>
          <span class="text-red-400 text-sm">Expenses</span>
          <span class="text-gray-900 dark:text-white font-semibold"
            >-${{ financeStore.expenses.toLocaleString() }}</span
          >
        </div>
      </div>
    </div>

    <!-- AI Insight Card -->
    <div
      class="bg-white dark:bg-slate-card rounded-xl p-6 border border-gray-200 dark:border-border-muted"
    >
      <div class="flex items-start gap-3">
        <span class="material-symbols-outlined text-primary">auto_awesome</span>
        <div class="flex-1">
          <h3 class="font-semibold mb-1">AI Financial Insight</h3>
          <p class="text-gray-500 dark:text-slate-400 text-sm mb-3">
            Get personalized advice based on your recent spending habits using Gemini AI.
          </p>
          <button class="text-primary text-sm font-medium hover:underline">Generate Insight</button>
        </div>
      </div>
    </div>

    <!-- Charts Row -->
    <div class="grid grid-cols-2 gap-6">
      <!-- Monthly Trends (Placeholder) -->
      <div
        class="bg-white dark:bg-slate-card rounded-xl p-6 border border-gray-200 dark:border-border-muted"
      >
        <h3 class="font-semibold mb-4">Monthly Trends</h3>
        <div class="h-48 flex items-end justify-center text-gray-400 dark:text-slate-500">
          Chart will go here
        </div>
      </div>

      <!-- Expense Breakdown (Placeholder) -->
      <div
        class="bg-white dark:bg-slate-card rounded-xl p-6 border border-gray-200 dark:border-border-muted"
      >
        <h3 class="font-semibold mb-4">Expense Breakdown</h3>
        <div class="h-48 flex items-center justify-center text-gray-400 dark:text-slate-500">
          Donut chart will go here
        </div>
      </div>
    </div>

    <!-- Recent Activity -->
    <div
      class="bg-white dark:bg-slate-card rounded-xl p-6 border border-gray-200 dark:border-border-muted"
    >
      <div class="flex items-center justify-between mb-4">
        <h3 class="font-semibold">Recent Activity</h3>
        <a href="#" class="text-primary text-sm hover:underline">View All</a>
      </div>

      <div class="space-y-3">
        <div
          v-for="transaction in financeStore.recentTransactions"
          :key="transaction.id"
          class="flex items-center justify-between p-4 bg-gray-50 dark:bg-background-dark rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800/30 transition-colors"
        >
          <div class="flex items-center gap-4">
            <div
              class="w-10 h-10 bg-gray-200 dark:bg-slate-700/50 rounded-lg flex items-center justify-center"
            >
              <span class="material-symbols-outlined text-gray-600 dark:text-slate-400 text-xl">
                {{ transaction.icon }}
              </span>
            </div>
            <div>
              <p class="font-medium">{{ transaction.title }}</p>
              <p class="text-gray-500 dark:text-slate-400 text-sm">
                {{ transaction.date }} • {{ transaction.description }}
              </p>
            </div>
          </div>
          <span
            :class="transaction.amount > 0 ? 'text-green-400' : 'text-red-400'"
            class="font-semibold"
          >
            {{ transaction.amount > 0 ? '+' : '' }}${{ Math.abs(transaction.amount) }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
