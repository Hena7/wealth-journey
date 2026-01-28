<script setup lang="ts">
import { useFinanceStore } from '@/stores/finance'
import { computed } from 'vue'

const financeStore = useFinanceStore()

// Filter only income transactions (amount > 0)
const incomeTransactions = computed(() => {
  return financeStore.transactions.filter((t) => t.amount > 0)
})

// Calculate total income
const totalIncome = computed(() => {
  return incomeTransactions.value.reduce((sum, t) => sum + t.amount, 0)
})

// Count of income transactions
const transactionCount = computed(() => {
  return incomeTransactions.value.length
})
</script>

<template>
  <div class="p-4 md:p-8 space-y-6">
    <!-- Header -->
    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
      <div>
        <h1 class="text-2xl md:text-3xl font-bold font-display mb-1">Income Management</h1>
        <p class="text-gray-500 dark:text-slate-400 text-sm">Track all your income sources</p>
      </div>

      <!-- Add Income Button -->
      <button
        class="flex items-center justify-center gap-2 px-5 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg font-medium transition-colors w-full sm:w-auto"
      >
        <span class="material-symbols-outlined">add</span>
        <span>Add Income</span>
      </button>
    </div>

    <!-- Stat Cards -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-6">
      <!-- Card 1: Total Income -->
      <div
        class="bg-white dark:bg-slate-card rounded-xl p-6 border border-gray-200 dark:border-border-muted"
      >
        <p class="text-gray-500 dark:text-slate-400 text-sm mb-2">Total Income</p>
        <h2 class="text-3xl font-bold text-green-500">${{ totalIncome.toLocaleString() }}</h2>
      </div>

      <!-- Card 2: This Month -->
      <div
        class="bg-white dark:bg-slate-card rounded-xl p-6 border border-gray-200 dark:border-border-muted"
      >
        <p class="text-gray-500 dark:text-slate-400 text-sm mb-2">This Month</p>
        <h2 class="text-3xl font-bold text-green-500">${{ totalIncome.toLocaleString() }}</h2>
      </div>

      <!-- Card 3: Transactions -->
      <div
        class="bg-white dark:bg-slate-card rounded-xl p-6 border border-gray-200 dark:border-border-muted"
      >
        <p class="text-gray-500 dark:text-slate-400 text-sm mb-2">Transactions</p>
        <h2 class="text-3xl font-bold text-blue-500">
          {{ transactionCount }}
        </h2>
      </div>
    </div>
    <div
      class="bg-white dark:bg-slate-card rounded-xl border border-gray-200 dark:border-border-muted overflow-x-auto"
    >
      <table class="w-full text-left min-w-[600px]">
        <thead
          class="bg-gray-50 dark:bg-background-dark/50 border-b border-gray-200 dark:border-border-muted"
        >
          <tr>
            <th
              class="px-6 py-4 text-xs uppercase tracking-wider text-gray-500 dark:text-slate-400 font-semibold"
            >
              Date
            </th>
            <th
              class="px-6 py-4 text-xs uppercase tracking-wider text-gray-500 dark:text-slate-400 font-semibold"
            >
              Category
            </th>
            <th
              class="px-6 py-4 text-xs uppercase tracking-wider text-gray-500 dark:text-slate-400 font-semibold"
            >
              Note
            </th>
            <th
              class="px-6 py-4 text-xs uppercase tracking-wider text-gray-500 dark:text-slate-400 font-semibold text-right"
            >
              Amount
            </th>
            <th
              class="px-6 py-4 text-xs uppercase tracking-wider text-gray-500 dark:text-slate-400 font-semibold text-right"
            >
              Actions
            </th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-100 dark:divide-slate-800">
          <tr
            v-for="transaction in incomeTransactions"
            :key="transaction.id"
            class="hover:bg-gray-50 dark:hover:bg-slate-800/20 transition-colors"
          >
            <td class="px-6 py-4 text-sm text-gray-900 dark:text-white whitespace-nowrap">
              {{
                new Date(transaction.date).toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric',
                  year: 'numeric',
                })
              }}
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <span
                class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400"
              >
                {{ transaction.category }}
              </span>
            </td>
            <td class="px-6 py-4 text-sm text-gray-500 dark:text-slate-400 truncate max-w-[200px]">
              {{ transaction.description || '-' }}
            </td>
            <td class="px-6 py-4 text-sm font-bold text-green-500 text-right whitespace-nowrap">
              ${{
                transaction.amount.toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })
              }}
            </td>
            <td class="px-6 py-4 text-right border-border-muted whitespace-nowrap">
              <div class="flex justify-end gap-2">
                <button class="p-1 hover:text-primary transition-colors">
                  <span class="material-symbols-outlined text-xl">edit_square</span>
                </button>
                <button class="p-1 hover:text-red-500 transition-colors">
                  <span class="material-symbols-outlined text-xl text-red-500">delete</span>
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
