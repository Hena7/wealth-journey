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
  <!-- Main Wrapper -->
  <div
    class="bg-background-light dark:bg-background-dark font-display min-h-screen flex items-center justify-center p-4"
  >
    <div class="relative flex h-auto w-full max-w-[440px] flex-col overflow-hidden">
      <!-- Login Card -->
      <div
        class="flex flex-col border border-gray-200 dark:border-[#34655d]/30 bg-white dark:bg-[#1a322e] rounded-xl shadow-sm p-8 @container"
      >
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
            class="text-gray-900 dark:text-white tracking-tight text-[28px] font-bold leading-tight text-center"
          >
            Welcome Back
          </h1>
          <p class="text-gray-500 dark:text-[#93c8bf] text-sm mt-2 text-center">
            Enter your credentials to access your dashboard
          </p>
        </div>

        <!-- Form Section -->
        <form @submit.prevent="handleLogin" class="flex flex-col gap-5">
          <!-- Email Field -->
          <div class="flex flex-col gap-2">
            <label class="text-gray-700 dark:text-white text-sm font-medium">Email Address</label>
            <input
              v-model="email"
              class="form-input flex w-full rounded-lg text-gray-900 dark:text-white focus:outline-0 focus:ring-1 focus:ring-primary border border-gray-300 dark:border-[#34655d] bg-white dark:bg-[#11211e] h-12 px-4"
              placeholder="name@company.com"
              type="email"
              required
            />
          </div>

          <!-- Password Field -->
          <div class="flex flex-col gap-2">
            <div class="flex justify-between items-center">
              <label class="text-gray-700 dark:text-white text-sm font-medium">Password</label>
              <a class="text-primary text-xs font-medium hover:underline" href="#"
                >Forgot Password?</a
              >
            </div>

            <div class="flex w-full items-stretch rounded-lg group">
              <input
                v-model="password"
                :type="showPassword ? 'text' : 'password'"
                class="form-input flex w-full min-w-0 flex-1 rounded-lg rounded-r-none border-r-0 text-gray-900 dark:text-white focus:outline-0 focus:ring-0 border border-gray-300 dark:border-[#34655d] bg-white dark:bg-[#11211e] h-12 px-4"
                placeholder="••••••••"
                required
              />
              <!-- Eye Toggle Button -->
              <div
                @click="showPassword = !showPassword"
                class="text-gray-400 dark:text-[#93c8bf] flex border border-gray-300 dark:border-[#34655d] bg-white dark:bg-[#11211e] items-center justify-center px-3 rounded-r-lg border-l-0 cursor-pointer hover:text-primary"
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
            class="w-full bg-primary hover:bg-primary/90 text-[#11211e] font-bold text-base h-12 rounded-lg transition-colors mt-2"
          >
            Sign In
          </button>

          <!-- Divider -->
          <div class="flex items-center gap-4 my-2">
            <div class="h-px bg-gray-200 dark:bg-[#34655d]/50 flex-1"></div>
            <span
              class="text-xs text-gray-400 dark:text-[#93c8bf] uppercase tracking-widest font-bold"
              >OR</span
            >
            <div class="h-px bg-gray-200 dark:bg-[#34655d]/50 flex-1"></div>
          </div>

          <!-- Google Button -->
          <button
            type="button"
            class="w-full bg-transparent border border-gray-300 dark:border-[#34655d] text-gray-700 dark:text-white font-medium text-sm h-12 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-50 dark:hover:bg-[#34655d]/10 transition-colors"
          >
            <span class="material-symbols-outlined" style="font-size: 20px">google</span>
            Continue with Google
          </button>
        </form>

        <!-- Footer Section -->
        <div class="mt-8 text-center">
          <p class="text-gray-500 dark:text-[#93c8bf] text-sm">
            Don't have an account?
            <!-- Using RouterLink for SPA navigation -->
            <RouterLink
              to="/signup"
              class="text-primary font-bold underline underline-offset-4 decoration-primary/30 hover:decoration-primary"
            >
              Sign up
            </RouterLink>
          </p>
        </div>
      </div>

      <!-- Legal Footer -->
      <div class="mt-6 flex flex-col items-center gap-2">
        <p class="text-gray-400 dark:text-[#93c8bf]/60 text-xs text-center">
          @2026 Wealth Journey. All rights reserved.
        </p>
      </div>
    </div>
  </div>
</template>
