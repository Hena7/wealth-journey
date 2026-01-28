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
  <div class="p-4 md:p-8 space-y-6">
    <!-- Header -->
    <div class="flex items-center justify-between">
      <!-- አዲስ Header እንደ ምስሉ -->
      <div class="mb-6">
        <h1 class="text-3xl font-bold font-display mb-1">Welcome back, Henok! 👋</h1>
        <p class="text-gray-500 dark:text-slate-400 text-sm">Here's your financial overview</p>
      </div>
    </div>

    <!-- 4 Stat Cards Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-6">
      <!-- Card 1: Total Income -->
      <div class="bg-white dark:bg-slate-card rounded-xl p-5 border-l-4 border-green-500">
        <div class="flex items-center justify-between mb-3">
          <p class="text-gray-500 dark:text-slate-400 text-xs uppercase tracking-wider">
            Total Income
          </p>
          <span class="material-symbols-outlined text-green-500 text-xl">trending_up</span>
        </div>
        <h3 class="text-2xl font-bold text-green-500">
          ${{ financeStore.income.toLocaleString() }}
        </h3>
      </div>

      <!-- Card 2: Total Expenses -->
      <div class="bg-white dark:bg-slate-card rounded-xl p-5 border-l-4 border-red-500">
        <div class="flex items-center justify-between mb-3">
          <p class="text-gray-500 dark:text-slate-400 text-xs uppercase tracking-wider">
            Total Expenses
          </p>
          <span class="material-symbols-outlined text-red-500 text-xl">trending_down</span>
        </div>
        <h3 class="text-2xl font-bold text-red-500">
          ${{ financeStore.expenses.toLocaleString() }}
        </h3>
      </div>

      <!-- Card 3: Balance -->
      <div class="bg-white dark:bg-slate-card rounded-xl p-5 border-l-4 border-blue-500">
        <div class="flex items-center justify-between mb-3">
          <p class="text-gray-500 dark:text-slate-400 text-xs uppercase tracking-wider">Balance</p>
          <span class="material-symbols-outlined text-blue-500 text-xl"
            >account_balance_wallet</span
          >
        </div>
        <h3 class="text-2xl font-bold text-blue-500">
          ${{ financeStore.totalBalance.toLocaleString() }}
        </h3>
      </div>

      <!-- Card 4: This Month -->
      <div class="bg-white dark:bg-slate-card rounded-xl p-5 border-l-4 border-green-500">
        <div class="flex items-center justify-between mb-3">
          <p class="text-gray-500 dark:text-slate-400 text-xs uppercase tracking-wider">
            This Month
          </p>
          <span class="material-symbols-outlined text-green-500 text-xl">bar_chart</span>
        </div>
        <h3 class="text-2xl font-bold text-green-500">
          ${{ financeStore.totalBalance.toLocaleString() }}
        </h3>
      </div>
    </div>
    <!-- Monthly Income & Expenses Section -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-6">
      <!-- Monthly Income Card -->
      <div
        class="bg-white dark:bg-slate-card rounded-xl p-6 border border-gray-200 dark:border-border-muted"
      >
        <h3 class="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Monthly Income</h3>
        <div class="flex items-baseline gap-2">
          <h2 class="text-4xl font-bold text-green-500">
            ${{ financeStore.income.toLocaleString() }}
          </h2>
          <span class="text-sm text-gray-500 dark:text-slate-400">this month</span>
        </div>
      </div>

      <!-- Monthly Expenses Card -->
      <div
        class="bg-white dark:bg-slate-card rounded-xl p-6 border border-gray-200 dark:border-border-muted"
      >
        <h3 class="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Monthly Expenses</h3>
        <div class="flex items-baseline gap-2">
          <h2 class="text-4xl font-bold text-red-500">
            ${{ financeStore.expenses.toLocaleString() }}
          </h2>
          <span class="text-sm text-gray-500 dark:text-slate-400">this month</span>
        </div>
      </div>
    </div>
    <!-- AI Insight Card -->
    <!-- <div
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
    </div> -->

    <!-- Charts Row -->

    <!-- Recent Activity -->
    <!-- Recent Transactions & Quick Actions -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <!-- Recent Transactions (Left) -->
      <div
        class="bg-white dark:bg-slate-card rounded-xl p-6 border border-gray-200 dark:border-border-muted"
      >
        <div class="flex items-center justify-between mb-4">
          <h3 class="font-semibold text-gray-900 dark:text-white">Recent Transactions</h3>
          <a href="#" class="text-primary text-sm hover:underline">View all transactions →</a>
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
                <p class="font-medium text-gray-900 dark:text-white">{{ transaction.title }}</p>
                <p class="text-gray-500 dark:text-slate-400 text-sm">{{ transaction.date }}</p>
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

      <!-- Quick Actions (Right) -->
      <div
        class="bg-white dark:bg-slate-card rounded-xl p-6 border border-gray-200 dark:border-border-muted"
      >
        <h3 class="font-semibold mb-4 text-gray-900 dark:text-white">Quick Actions</h3>

        <div class="space-y-3">
          <!-- Add Income Button -->
          <button
            class="w-full flex items-center gap-3 p-4 bg-green-500/10 hover:bg-green-500/20 border border-green-500/30 rounded-lg transition-colors group"
          >
            <div class="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
              <span class="material-symbols-outlined text-green-500">trending_up</span>
            </div>
            <span class="font-medium text-green-500">Add Income</span>
          </button>

          <!-- Add Expense Button -->
          <button
            class="w-full flex items-center gap-3 p-4 bg-red-500/10 hover:bg-red-500/20 border border-red-500/30 rounded-lg transition-colors group"
          >
            <div class="w-10 h-10 bg-red-500/20 rounded-lg flex items-center justify-center">
              <span class="material-symbols-outlined text-red-500">trending_down</span>
            </div>
            <span class="font-medium text-red-500">Add Expense</span>
          </button>

          <!-- Set Budget Button -->
          <button
            class="w-full flex items-center gap-3 p-4 bg-yellow-500/10 hover:bg-yellow-500/20 border border-yellow-500/30 rounded-lg transition-colors group"
          >
            <div class="w-10 h-10 bg-yellow-500/20 rounded-lg flex items-center justify-center">
              <span class="material-symbols-outlined text-yellow-500">account_balance_wallet</span>
            </div>
            <span class="font-medium text-yellow-500">Set Budget</span>
          </button>

          <!-- View Reports Button -->
          <button
            class="w-full flex items-center gap-3 p-4 bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/30 rounded-lg transition-colors group"
          >
            <div class="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
              <span class="material-symbols-outlined text-blue-500">bar_chart</span>
            </div>
            <span class="font-medium text-blue-500">View Reports</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
