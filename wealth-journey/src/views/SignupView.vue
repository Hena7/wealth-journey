<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const name = ref('')
const email = ref('')
const password = ref('')
const confirmPassword = ref('')
const showPassword = ref(false)

const handleSignup = () => {
  if (password.value !== confirmPassword.value) {
    alert('Passwords do not match')
    return
  }
  console.log('Signup Attempt:', {
    name: name.value,
    email: email.value,
    password: password.value,
  })
}
</script>

<template>
  <div class="bg-background-light dark:bg-background-dark min-h-screen flex flex-col">
    <!-- Header Section (TopNavBar) -->
    <header
      class="flex items-center justify-between whitespace-nowrap border-b border-solid border-border-muted px-6 md:px-40 py-5 bg-background-light dark:bg-background-dark"
    >
      <div class="flex items-center gap-4 text-charcoal dark:text-white">
        <div class="size-6 text-primary flex items-center justify-center">
          <span class="material-symbols-outlined text-3xl">account_balance_wallet</span>
        </div>
        <h2
          class="text-charcoal dark:text-white text-xl font-bold leading-tight tracking-[-0.015em] font-display"
        >
          Wealth Journey
        </h2>
      </div>
      <div class="flex items-center gap-4">
        <span class="hidden md:block text-sm text-slate-500 dark:text-[#9db9b9] font-medium"
          >Already have an account?</span
        >
        <RouterLink
          to="/login"
          class="flex min-w-[84px] cursor-pointer items-center justify-center rounded-lg h-10 px-4 border border-primary text-primary hover:bg-primary/10 transition-colors text-sm font-bold leading-normal"
        >
          <span class="truncate">Log In</span>
        </RouterLink>
      </div>
    </header>

    <!-- Main Signup Container -->
    <main class="flex-1 flex items-center justify-center p-6 md:p-12">
      <div
        class="w-full max-w-[480px] bg-white dark:bg-slate-card rounded-xl border border-border-muted p-8 md:p-10"
      >
        <!-- Headline & Body Text -->
        <div class="mb-8">
          <h1
            class="text-charcoal dark:text-white text-[32px] font-extrabold leading-tight text-center pb-2 font-display"
          >
            Create account
          </h1>
          <p
            class="text-slate-500 dark:text-[#9db9b9] text-base font-normal leading-normal text-center"
          >
            Start tracking your financial future today.
          </p>
        </div>

        <!-- Signup Form -->
        <form @submit.prevent="handleSignup" class="space-y-5">
          <!-- Full Name Field -->
          <div class="flex flex-col gap-2">
            <label class="text-charcoal dark:text-white text-sm font-semibold leading-normal"
              >Full Name</label
            >
            <input
              v-model="name"
              class="form-input w-full rounded-lg text-charcoal dark:text-white focus:outline-0 focus:ring-1 focus:ring-primary border border-border-muted bg-white dark:bg-[#111818] h-14 placeholder:text-slate-400 dark:placeholder:text-[#9db9b9] px-4 text-base font-normal transition-all"
              placeholder="John Doe"
              type="text"
              required
            />
          </div>

          <!-- Email Address Field -->
          <div class="flex flex-col gap-2">
            <label class="text-charcoal dark:text-white text-sm font-semibold leading-normal"
              >Email Address</label
            >
            <input
              v-model="email"
              class="form-input w-full rounded-lg text-charcoal dark:text-white focus:outline-0 focus:ring-1 focus:ring-primary border border-border-muted bg-white dark:bg-[#111818] h-14 placeholder:text-slate-400 dark:placeholder:text-[#9db9b9] px-4 text-base font-normal transition-all"
              placeholder="name@example.com"
              type="email"
              required
            />
          </div>

          <!-- Password Field -->
          <div class="flex flex-col gap-2">
            <label class="text-charcoal dark:text-white text-sm font-semibold leading-normal"
              >Password</label
            >
            <input
              v-model="password"
              class="form-input w-full rounded-lg text-charcoal dark:text-white focus:outline-0 focus:ring-1 focus:ring-primary border border-border-muted bg-white dark:bg-[#111818] h-14 placeholder:text-slate-400 dark:placeholder:text-[#9db9b9] px-4 text-base font-normal transition-all"
              placeholder="••••••••"
              type="password"
              required
            />
            <p class="text-xs text-slate-400 dark:text-[#9db9b9]/60 px-1">
              Must be at least 8 characters long.
            </p>
          </div>

          <!-- Confirm Password Field -->
          <div class="flex flex-col gap-2 pb-2">
            <label class="text-charcoal dark:text-white text-sm font-semibold leading-normal"
              >Confirm Password</label
            >
            <input
              v-model="confirmPassword"
              class="form-input w-full rounded-lg text-charcoal dark:text-white focus:outline-0 focus:ring-1 focus:ring-primary border border-border-muted bg-white dark:bg-[#111818] h-14 placeholder:text-slate-400 dark:placeholder:text-[#9db9b9] px-4 text-base font-normal transition-all"
              placeholder="••••••••"
              type="password"
              required
            />
          </div>

          <!-- Create Account Button -->
          <button
            type="submit"
            class="w-full flex cursor-pointer items-center justify-center rounded-lg h-14 bg-primary text-charcoal text-base font-bold leading-normal tracking-[0.015em] hover:opacity-90 active:scale-[0.98] transition-all"
          >
            <span>Create Account</span>
          </button>
        </form>

        <!-- Social Signup Divider -->
        <div class="relative my-8">
          <div class="absolute inset-0 flex items-center">
            <div class="w-full border-t border-border-muted"></div>
          </div>
          <div class="relative flex justify-center text-xs uppercase">
            <span class="bg-white dark:bg-slate-card px-2 text-slate-500 dark:text-[#9db9b9]"
              >Or continue with</span
            >
          </div>
        </div>

        <!-- Social Buttons -->
        <div class="grid grid-cols-2 gap-4">
          <button
            class="flex items-center justify-center gap-2 rounded-lg h-12 border border-border-muted bg-white dark:bg-[#111818] text-charcoal dark:text-white text-sm font-semibold hover:bg-slate-50 dark:hover:bg-primary/5 transition-colors"
          >
            <svg class="w-5 h-5" viewBox="0 0 24 24">
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                fill="#4285F4"
              />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              />
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                fill="#FBBC05"
              />
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#EA4335"
              />
            </svg>
            Google
          </button>
          <button
            class="flex items-center justify-center gap-2 rounded-lg h-12 border border-border-muted bg-white dark:bg-[#111818] text-charcoal dark:text-white text-sm font-semibold hover:bg-slate-50 dark:hover:bg-primary/5 transition-colors"
          >
            <span class="material-symbols-outlined text-xl">brand_awareness</span>
            Github
          </button>
        </div>

        <!-- Footer Links -->
        <div class="mt-8 text-center space-y-2">
          <p class="text-xs text-slate-400 dark:text-[#9db9b9]/70 leading-relaxed">
            By clicking "Create Account", you agree to our <br class="md:hidden" />
            <a class="underline hover:text-primary" href="#">Terms of Service</a> and
            <a class="underline hover:text-primary" href="#">Privacy Policy</a>.
          </p>
        </div>
      </div>
    </main>

    <!-- Footer -->
    <footer class="p-8 text-center text-slate-400 dark:text-[#9db9b9]/40 text-xs">
      © 2026 Wealth Journey Inc. All rights reserved.
    </footer>
  </div>
</template>

<style scoped></style>
