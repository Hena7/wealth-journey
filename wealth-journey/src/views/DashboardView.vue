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
    <div class="flex items-center justify-between">
      <h1 class="text-3xl font-bold">Welcome Back</h1>
      <p class="text-slate-400 text-sm">{{ currentDate }}</p>
    </div>

    <!-- Total Balance Card -->
    <div class="bg-[#1a2332] rounded-xl p-6 border border-slate-700/50">
      <p class="text-slate-400 text-sm uppercase tracking-wider mb-2">Total Balance</p>
      <h2 class="text-4xl font-bold mb-4">${{ financeStore.totalBalance.toLocaleString() }}</h2>

      <div class="flex gap-6">
        <div class="flex items-center gap-2">
          <span class="material-symbols-outlined text-green-400 text-sm">trending_up</span>
          <span class="text-green-400 text-sm">Income</span>
          <span class="text-white font-semibold">+${{ financeStore.income.toLocaleString() }}</span>
        </div>
        <div class="flex items-center gap-2">
          <span class="material-symbols-outlined text-red-400 text-sm">trending_down</span>
          <span class="text-red-400 text-sm">Expenses</span>
          <span class="text-white font-semibold"
            >-${{ financeStore.expenses.toLocaleString() }}</span
          >
        </div>
      </div>
    </div>

    <!-- AI Insight Card -->
    <div class="bg-[#1a2332] rounded-xl p-6 border border-slate-700/50">
      <div class="flex items-start gap-3">
        <span class="material-symbols-outlined text-primary">auto_awesome</span>
        <div class="flex-1">
          <h3 class="font-semibold mb-1">AI Financial Insight</h3>
          <p class="text-slate-400 text-sm mb-3">
            Get personalized advice based on your recent spending habits using Gemini AI.
          </p>
          <button class="text-primary text-sm font-medium hover:underline">Generate Insight</button>
        </div>
      </div>
    </div>

    <!-- Charts Row -->
    <div class="grid grid-cols-2 gap-6">
      <!-- Monthly Trends (Placeholder) -->
      <div class="bg-[#1a2332] rounded-xl p-6 border border-slate-700/50">
        <h3 class="font-semibold mb-4">Monthly Trends</h3>
        <div class="h-48 flex items-end justify-center text-slate-500">Chart will go here</div>
      </div>

      <!-- Expense Breakdown (Placeholder) -->
      <div class="bg-[#1a2332] rounded-xl p-6 border border-slate-700/50">
        <h3 class="font-semibold mb-4">Expense Breakdown</h3>
        <div class="h-48 flex items-center justify-center text-slate-500">
          Donut chart will go here
        </div>
      </div>
    </div>

    <!-- Recent Activity -->
    <div class="bg-[#1a2332] rounded-xl p-6 border border-slate-700/50">
      <div class="flex items-center justify-between mb-4">
        <h3 class="font-semibold">Recent Activity</h3>
        <a href="#" class="text-primary text-sm hover:underline">View All</a>
      </div>

      <div class="space-y-3">
        <div
          v-for="transaction in financeStore.recentTransactions"
          :key="transaction.id"
          class="flex items-center justify-between p-4 bg-[#0f1419] rounded-lg hover:bg-slate-800/30 transition-colors"
        >
          <div class="flex items-center gap-4">
            <div class="w-10 h-10 bg-slate-700/50 rounded-lg flex items-center justify-center">
              <span class="material-symbols-outlined text-slate-400 text-xl">
                {{ transaction.icon }}
              </span>
            </div>
            <div>
              <p class="font-medium">{{ transaction.title }}</p>
              <p class="text-slate-400 text-sm">
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
