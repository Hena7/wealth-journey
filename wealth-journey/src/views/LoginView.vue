<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const email = ref('')
const password = ref('')
const showPassword = ref(false)

const handleLogin = () => {
  console.log('Login Attempt:', { email: email.value, password: password.value })
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
          >Don't have an account?</span
        >
        <RouterLink
          to="/signup"
          class="flex min-w-[84px] cursor-pointer items-center justify-center rounded-lg h-10 px-4 border border-primary text-primary hover:bg-primary/10 transition-colors text-sm font-bold leading-normal"
        >
          <span class="truncate">Sign Up</span>
        </RouterLink>
      </div>
    </header>

    <!-- Main Wrapper -->
    <main class="flex-1 flex items-center justify-center p-6 md:p-12">
      <div
        class="w-full max-w-[440px] bg-white dark:bg-slate-card rounded-xl border border-border-muted p-8 md:p-10"
      >
        <!-- Login Card -->
        <div class="flex flex-col @container">
          <!-- Header Section -->
          <div class="flex flex-col items-center mb-8">
            <div
              class="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4 text-primary"
            >
              <span class="material-symbols-outlined" style="font-size: 32px"
                >account_balance_wallet</span
              >
            </div>
            <h1
              class="text-charcoal dark:text-white tracking-tight text-[28px] font-bold leading-tight text-center pb-2 font-display"
            >
              Welcome Back
            </h1>
            <p class="text-slate-500 dark:text-[#9db9b9] text-sm mt-2 text-center">
              Enter your credentials to access your dashboard
            </p>
          </div>

          <!-- Form Section -->
          <form @submit.prevent="handleLogin" class="flex flex-col gap-5">
            <!-- Email Field -->
            <div class="flex flex-col gap-2">
              <label class="text-charcoal dark:text-white text-sm font-semibold leading-normal"
                >Email Address</label
              >
              <input
                v-model="email"
                class="form-input flex w-full rounded-lg text-charcoal dark:text-white focus:outline-0 focus:ring-1 focus:ring-primary border border-border-muted bg-white dark:bg-[#111818] h-14 px-4 text-base transition-all"
                placeholder="name@company.com"
                type="email"
                required
              />
            </div>

            <!-- Password Field -->
            <div class="flex flex-col gap-2">
              <div class="flex justify-between items-center">
                <label class="text-charcoal dark:text-white text-sm font-semibold leading-normal"
                  >Password</label
                >
                <a class="text-primary text-xs font-medium hover:underline" href="#"
                  >Forgot Password?</a
                >
              </div>

              <div class="flex w-full items-stretch rounded-lg group">
                <input
                  v-model="password"
                  :type="showPassword ? 'text' : 'password'"
                  class="form-input flex w-full min-w-0 flex-1 rounded-lg rounded-r-none border-r-0 text-charcoal dark:text-white focus:outline-0 focus:ring-0 border border-border-muted bg-white dark:bg-[#111818] h-14 px-4 text-base transition-all"
                  placeholder="••••••••"
                  required
                />
                <!-- Eye Toggle Button -->
                <div
                  @click="showPassword = !showPassword"
                  class="text-slate-400 dark:text-[#9db9b9] flex border border-border-muted bg-white dark:bg-[#111818] items-center justify-center px-3 rounded-r-lg border-l-0 cursor-pointer hover:text-primary transition-colors"
                >
                  <span class="material-symbols-outlined">
                    {{ showPassword ? 'visibility_off' : 'visibility' }}
                  </span>
                </div>
              </div>
            </div>

            <!-- Login Button -->
            <button
              type="submit"
              class="w-full bg-primary hover:opacity-90 active:scale-[0.98] text-charcoal font-bold text-base h-14 rounded-lg transition-all mt-2"
            >
              Sign In
            </button>

            <!-- Divider -->
            <div class="flex items-center gap-4 my-2">
              <div class="h-px bg-border-muted flex-1"></div>
              <span
                class="text-xs text-slate-400 dark:text-[#9db9b9]/60 uppercase tracking-widest font-bold"
                >OR</span
              >
              <div class="h-px bg-border-muted flex-1"></div>
            </div>

            <!-- Google Button -->
            <button
              type="button"
              class="w-full bg-transparent border border-border-muted text-charcoal dark:text-white font-medium text-sm h-12 rounded-lg flex items-center justify-center gap-2 hover:bg-slate-50 dark:hover:bg-primary/5 transition-colors"
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
              Continue with Google
            </button>
          </form>

          <!-- Footer Section -->
          <div class="mt-8 text-center">
            <p class="text-slate-500 dark:text-[#9db9b9] text-sm">
              Don't have an account?
              <RouterLink
                to="/signup"
                class="text-primary font-bold underline underline-offset-4 decoration-primary/30 hover:decoration-primary"
              >
                Sign up
              </RouterLink>
            </p>
          </div>
        </div>
      </div>
    </main>
    <footer class="p-8 text-center text-slate-400 dark:text-[#9db9b9]/40 text-xs">
      © 2026 Wealth Journey Inc. All rights reserved.
    </footer>
  </div>
</template>
