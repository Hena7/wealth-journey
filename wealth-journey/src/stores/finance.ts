import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useFinanceStore = defineStore('finance', () => {
  const totalBalance = ref(3990)
  const income = ref(5000)
  const expenses = ref(1010)

  // Recent transactions array
  const transactions = ref([
    {
      id: 1,
      title: 'Shopping',
      date: '2023-10-13',
      description: 'New shirt',
      amount: -80,
      category: 'Shopping',
      icon: 'shopping_bag',
    },
    {
      id: 2,
      title: 'Entertainment',
      date: '2023-10-12',
      description: 'Movie night',
      amount: -85,
      category: 'Entertainment',
      icon: 'movie',
    },
    {
      id: 3,
      title: 'Freelance',
      date: '2023-10-09',
      description: 'Logo design project',
      amount: 300,
      category: 'Income',
      icon: 'work',
    },
    {
      id: 4,
      title: 'Housing',
      date: '2023-10-05',
      description: 'Rent payment',
      amount: -1200,
      category: 'Housing',
      icon: 'home',
    },
  ])
  const recentTransactions = computed(() => {
    return transactions.value.slice(0, 4) // Only show first 4
  })

  return {
    totalBalance,
    income,
    expenses,
    transactions,
    recentTransactions,
  }
})
